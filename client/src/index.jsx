import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import reducer from './reducer';
import InitContainer from './containers/InitContainer';

const initState = {
  fileNumber: '128677390',
  searchInputText: '',

  // TODO: Does this need to be a variable?
  startDownloadButtonLabel: 'Start retrieving efolder',
  veteranName: 'DeMarco Murray'
};

module.exports = {
  init(props) {
    const store = createStore(reducer, { ...initState,
      ...props }, applyMiddleware(thunk));

    render(<Provider store={store}>
      <InitContainer />
    </Provider>, document.getElementById('efolder_express_app'));
  }
};
