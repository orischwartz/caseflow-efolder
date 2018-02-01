import React from 'react';
import { connect } from 'react-redux';

import {
  MANIFEST_STATUS_LOADING,
  MANIFEST_STATUS_LISTED,
  MANIFEST_STATUS_DOWNLOADING,
  MANIFEST_STATUS_COMPLETE
} from '../Constants';
import DownloadListContainer from './DownloadListContainer';
import DownloadSpinnerContainer from './DownloadSpinnerContainer';

// TODO: Add modal for confirming that the user wants to download even when the zip does not contain the entire
// list of all documents.
class DownloadContainer extends React.PureComponent {
  componentDidMount() {
    // TODO: Make request.
  }

  render() {
    switch (this.props.manifestStatus) {
    case MANIFEST_STATUS_LOADING:
      return <DownloadSpinnerContainer />;
    case MANIFEST_STATUS_LISTED:
      return <DownloadListContainer />;
    default:
      return <DownloadSpinnerContainer />;
    }
  }
}

const mapStateToProps = (state) => ({ manifestStatus: state.manifestStatus });

export default connect(mapStateToProps)(DownloadContainer);
