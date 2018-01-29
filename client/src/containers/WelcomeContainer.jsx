import { css } from 'glamor';
import React from 'react';

import AppSegment from '@department-of-veterans-affairs/caseflow-frontend-toolkit/components/AppSegment';

import RecentDownloadsContainer from './RecentDownloadsContainer';

const searchBarNoteTextStyling = css({
  fontStyle: 'italic',
  textAlign: 'center'
});

export default class WelcomeContainer extends React.PureComponent {
  render() {
    return <main className="usa-grid">
      <AppSegment filledBackground>

        <div className="ee-heading">
          <h1>Welcome to eFolder Express</h1>
          <p>eFolder Express allows VA employees to bulk-download VBMS eFolders.
            <br />Search for a Veteran ID number below to get started.
          </p>
        </div>

        <div className="ee-search">

          <form className="usa-search usa-search-big cf-form" id="new_download">
            <div role="search">
              <label className="usa-sr-only" htmlFor="file_number">
                Search for a Veteran ID number below to get started.
              </label>
              <input type="search" name="file_number" id="file_number" />
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

      </AppSegment>
    </main>;
  }
}
