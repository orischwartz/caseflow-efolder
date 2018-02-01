import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducer from './reducer';
import InitContainer from './containers/InitContainer';

module.exports = {
  init(props) {
    const initState = {
      veteranName: 'DeMarco Murray',
      fileNumber: '128677390',

      // TODO: Does this need to be a variable?
      startDownloadButtonLabel: 'Start retrieving efolder'
    };
    const store = createStore(reducer, { ...initState,
      ...props });

    render(<Provider store={store}>
      <InitContainer />
    </Provider>, document.getElementById('efolder_express_app'));
  }
};
