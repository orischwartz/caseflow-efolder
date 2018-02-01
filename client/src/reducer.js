import * as Actions from './actionTypes';

export default function reducer(state = {}, action = {}) {
  switch (action.type) {
  case Actions.SET_MANIFEST_FETCH_RESPONSE:
    return { ...state,
      manifestFetchResponse: action.payload };
  case Actions.UPDATE_SEARCH_TEXT:
    return { ...state,
      searchInputText: action.payload };
  case Actions.UPDATE_MANIFEST_STATUS:
    return { ...state,
      manifestStatus: action.payload };
  default:
    return state;
  }
}
