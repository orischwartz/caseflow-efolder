class JobPrometheusMetricMiddleware
  def call(_worker, queue, _msg, body)
    job_class = body["job_class"]

    yield
  rescue StandardError
    PrometheusService.background_jobs_error_counter.increment(name: job_class)

    # reraise the same error. This lets Shoryuken's retry logic kick off
    # as normal, but we still capture the error
    raise
  ensure
    record_and_push_metrics(job_class, queue, body)
  end

  def record_and_push_metrics(job_class, queue, body)
    PrometheusService.background_jobs_attempt_counter.increment(name: job_class)
    PrometheusService.push_metrics!
  rescue StandardError => error
    tags = { job: job_class, queue: queue }
    context = { message: body }
    Raven.capture_exception(error, tags: tags, extra: context) unless error.ignorable?
  end
end
