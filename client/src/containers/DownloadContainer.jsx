import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import AppSegment from '@department-of-veterans-affairs/caseflow-frontend-toolkit/components/AppSegment';
import StatusMessage from '@department-of-veterans-affairs/caseflow-frontend-toolkit/components/StatusMessage';

import { clearErrorMessage, setManifestId } from '../actions';
import { pollManifestFetchEndpoint } from '../apiActions';
import DownloadPageFooter from '../components/DownloadPageFooter';
import DownloadPageHeader from '../components/DownloadPageHeader';
import PageLoadingIndicator from '../components/PageLoadingIndicator';
import { MANIFEST_DOWNLOAD_STATE } from '../Constants';
import DownloadListContainer from './DownloadListContainer';
import DownloadProgressContainer from './DownloadProgressContainer';
import { documentDownloadStarted, manifestFetchComplete } from '../Utils';

// TODO: Add modal for confirming that the user wants to download even when the zip does not contain the entire
// list of all documents.
class DownloadContainer extends React.PureComponent {
  componentDidMount() {
    // Clear all previous error messages. The only errors we care about will happen after this component has mounted.
    this.props.clearErrorMessage();

    const manifestId = this.props.match.params.manifestId;

    this.props.setManifestId(manifestId);

    if (!manifestFetchComplete(this.props.documentSources) ||
      this.props.documentsFetchStatus === MANIFEST_DOWNLOAD_STATE.IN_PROGRESS
    ) {
      this.props.pollManifestFetchEndpoint(0, manifestId, this.props.csrfToken);
    }
  }

  render() {
    let pageBody = <React.Fragment>
      <AppSegment filledBackground>
        <PageLoadingIndicator>We are gathering the list of files in the eFolder now...</PageLoadingIndicator>
      </AppSegment>
      <DownloadPageFooter />
    </React.Fragment>;

    if (this.props.errorMessage) {
      pageBody = <React.Fragment>
        <StatusMessage title="Could not fetch manifest">{this.props.errorMessage}</StatusMessage>
        <DownloadPageFooter />
      </React.Fragment>;
    } else if (documentDownloadStarted(this.props.documentsFetchStatus)) {
      pageBody = <DownloadProgressContainer />;
    } else if (manifestFetchComplete(this.props.documentSources)) {
      pageBody = <DownloadListContainer />;
    }

    return <React.Fragment>
      <DownloadPageHeader veteranId={this.props.veteranId} veteranName={this.props.veteranName} />
      { pageBody }
    </React.Fragment>;
  }
}

const mapStateToProps = (state) => ({
  csrfToken: state.csrfToken,
  documentsFetchStatus: state.documentsFetchStatus,
  documentSources: state.documentSources,
  errorMessage: state.errorMessage,
  manifestId: state.manifestId,
  veteranId: state.veteranId,
  veteranName: state.veteranName
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  pollManifestFetchEndpoint,
  clearErrorMessage,
  setManifestId
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(DownloadContainer);
