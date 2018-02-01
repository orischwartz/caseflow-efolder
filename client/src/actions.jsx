import {
  SET_MANIFEST_FETCH_RESPONSE,
  UPDATE_MANIFEST_STATUS,
  UPDATE_SEARCH_TEXT
} from './actionTypes';

export const clearManifestFetchResponse = () => ({
  type: SET_MANIFEST_FETCH_RESPONSE,
  payload: ''
});

export const setManifestFetchResponse = (resp) => ({
  type: SET_MANIFEST_FETCH_RESPONSE,
  payload: resp
});

export const updateManifestStatus = (status) => ({
  type: UPDATE_MANIFEST_STATUS,
  payload: status
});

export const updateSearchInputText = (text) => ({
  type: UPDATE_SEARCH_TEXT,
  payload: text
});
