import React from 'react';
import { render } from 'react-dom';

import ReduxBase from '@department-of-veterans-affairs/caseflow-frontend-toolkit/components/ReduxBase';

import { IN_PROGRESS_TAB, MANIFEST_DOWNLOAD_STATE } from './Constants';
import reducer from './reducer';
import InitContainer from './containers/InitContainer';

const initState = {
  activeDownloadProgressTab: IN_PROGRESS_TAB,
  confirmDownloadModalIsVisible: false,
  documents: [],
  documentsFetchCompletionEstimate: '',
  documentsFetchStatus: MANIFEST_DOWNLOAD_STATE.NOT_STARTED,
  documentSources: [],
  errorMessage: '',
  searchInputText: '',
  veteranId: '',
  veteranName: ''
};

module.exports = {
  init(props) {
    render(<ReduxBase reducer={reducer} initialState={{ ...initState,
      ...props }}>
      <InitContainer />
    </ReduxBase>, document.getElementById('efolder_express_app'));
  }
};
