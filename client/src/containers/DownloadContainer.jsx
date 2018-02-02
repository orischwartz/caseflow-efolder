import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import request from 'superagent';
import nocache from 'superagent-no-cache';

import StatusMessage from '@department-of-veterans-affairs/caseflow-frontend-toolkit/components/StatusMessage';

import { clearManifestFetchResponse, setManifestFetchResponse, updateManifestStatus } from '../actions';
import {
  MANIFEST_STATUS_LOADING,
  MANIFEST_STATUS_LISTED,
  MANIFEST_STATUS_DOWNLOADING,
  MANIFEST_STATUS_COMPLETE,
  MANIFEST_STATUS_ERRORED
} from '../Constants';
import DownloadListContainer from './DownloadListContainer';
import DownloadSpinnerContainer from './DownloadSpinnerContainer';

// TODO: Add modal for confirming that the user wants to download even when the zip does not contain the entire
// list of all documents.
class DownloadContainer extends React.PureComponent {
  componentDidMount() {
    this.props.clearManifestFetchResponse();

    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'X-CSRF-Token': this.props.csrfToken
    };

    request.
      get(`/api/v2/manifests/${this.props.match.params.manifestId}`).
      set(headers).
      send().
      use(nocache).
      then(
        (resp) => {
          this.props.setManifestFetchResponse(resp);
          this.props.updateManifestStatus(MANIFEST_STATUS_LISTED);
        },
        (err) => {
          this.props.setManifestFetchResponse(err.response);
          this.props.updateManifestStatus(MANIFEST_STATUS_ERRORED);
        }
      );
  }

  // TODO: Make the DownloadListContainer work.
  // TODO: Add display for in progress.
  // TODO: Add display for download complete.

  render() {
    switch (this.props.manifestStatus) {
    case MANIFEST_STATUS_LISTED:
      return <DownloadListContainer />;
    case MANIFEST_STATUS_ERRORED:
      let resp = this.props.manifestFetchResponse;

      return <main className="usa-grid">
        <StatusMessage title="Could not fetch manifest">
          {resp.statusCode} ({resp.statusText}) {resp.body.status}
        </StatusMessage>
      </main>;
    case MANIFEST_STATUS_DOWNLOADING:
    case MANIFEST_STATUS_COMPLETE:
    case MANIFEST_STATUS_LOADING:
    default:
      return <DownloadSpinnerContainer />;
    }
  }
}

const mapStateToProps = (state) => ({
  csrfToken: state.csrfToken,
  manifestFetchResponse: state.manifestFetchResponse,
  manifestStatus: state.manifestStatus
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  clearManifestFetchResponse,
  setManifestFetchResponse,
  updateManifestStatus
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(DownloadContainer);
