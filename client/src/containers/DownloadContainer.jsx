import React from 'react';

import DownloadListContainer from './DownloadListContainer';
import DownloadSpinnerContainer from './DownloadSpinnerContainer';

// TODO: Add modal for confirming that the user wants to download even when the zip does not contain the entire
// list of all documents.
export default class DownloadContainer extends React.PureComponent {
  // TODO: When this page loads
  // - Show the spinner
  // - Make the API request
  //
  // Change the container we are displaying based on the response state.

  render() {
    return <DownloadSpinnerContainer />;
    // return <DownloadListContainer />;
  }
}
