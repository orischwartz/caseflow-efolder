class Fakes::BGSService
  include ActiveModel::Model

  def demo?(file_number)
    !!(file_number =~ /^DEMO/)
  end

  def demo_veteran_info(file_number)
    [
      {
        "file_number" => file_number,
        "veteran_first_name" => "Joe",
        "veteran_last_name" => "Snuffy",
        "veteran_last_four_ssn" => "1234",
        "return_message" => "BPNQ0301",
      },
      {
        "file_number" => file_number,
        "veteran_first_name" => "Bob",
        "veteran_last_name" => "Marley",
        "veteran_last_four_ssn" => "3232",
        "return_message" => "BPNQ0301",
      },
      {
        "file_number" => file_number,
        "veteran_first_name" => "James",
        "veteran_last_name" => "Ross",
        "veteran_last_four_ssn" => "4221",
        "return_message" => "BPNQ0301",
      }
    ].sample
  end

  def fetch_veteran_info(file_number)
    return demo_veteran_info(file_number) if demo?(file_number)
    (veteran_info || {})[file_number]
  end

  def valid_file_number?(file_number)
    return true if demo?(file_number.strip)
  end

  def check_sensitivity(file_number)
    !(sensitive_files || {})[file_number]
  end

  def record_found?(veteran_info)
    return false unless veteran_info && veteran_info["return_message"]
    veteran_info["return_message"].include?("No BIRLS record found") ? false : true
  end

  # Methods to be stubbed out in tests:
  def veteran_info; end

  def sensitive_files; end
end
