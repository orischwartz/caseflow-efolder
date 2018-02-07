import { css } from 'glamor';
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import request from 'superagent';
import nocache from 'superagent-no-cache';

import AppSegment from '@department-of-veterans-affairs/caseflow-frontend-toolkit/components/AppSegment';

import {
  setDocuments,
  setDocumentSources,
  setVeteranId,
  setVeteranName,
  updateSearchInputText
} from '../actions';
import RecentDownloadsContainer from './RecentDownloadsContainer';

const searchBarNoteTextStyling = css({
  fontStyle: 'italic',
  textAlign: 'center'
});

class WelcomeContainer extends React.PureComponent {
  handleInputChange = (event) => {
    this.props.updateSearchInputText(event.target.value);
  }

  handleFormSubmit = (event) => {
    this.props.setVeteranId(this.props.searchInputText);

    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      FILE_NUMBER: this.props.searchInputText,
      'X-CSRF-Token': this.props.csrfToken
    };

    request.
      post('/api/v2/manifests').
      set(headers).
      send().
      use(nocache).
      then(
        (resp) => {
          const respAttrs = resp.body.data.attributes;

          this.props.setDocuments(respAttrs.records);
          this.props.setDocumentSources(respAttrs.sources);
          this.props.setVeteranId(respAttrs.file_number);
          this.props.setVeteranName(`${respAttrs.veteran_first_name} ${respAttrs.veteran_last_name}`);

          this.props.history.push(`/downloads/${resp.body.data.id}`);
        }
      );

    event.preventDefault();
  }

  render() {
    return <AppSegment filledBackground>
      <div className="ee-heading">
        <h1>Welcome to eFolder Express</h1>
        <p>eFolder Express allows VA employees to bulk-download VBMS eFolders.
          <br />Search for a Veteran ID number below to get started.
        </p>
      </div>

      <div className="ee-search">

        <form className="usa-search usa-search-big cf-form" id="new_download" onSubmit={this.handleFormSubmit}>
          <div role="search">
            <label className="usa-sr-only" htmlFor="file_number">
              Search for a Veteran ID number below to get started.
            </label>
            <input
              type="search"
              name="file_number"
              id="file_number"
              value={this.props.searchInputText}
              onChange={this.handleInputChange}
            />
            <button type="submit" className="cf-submit">
              <span className="usa-search-submit-text">Search</span>
            </button>
          </div>
        </form>

        <p {...searchBarNoteTextStyling}>
Note: eFolder Express now includes Virtual VA documents from the Legacy Content Manager Documents tab in VBMS.
        </p>
      </div>

      <RecentDownloadsContainer />
    </AppSegment>;
  }
}

const mapStateToProps = (state) => ({
  csrfToken: state.csrfToken,
  searchInputText: state.searchInputText
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  setDocuments,
  setDocumentSources,
  setVeteranId,
  setVeteranName,
  updateSearchInputText
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeContainer);
