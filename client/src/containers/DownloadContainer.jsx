import React from 'react';

import AppSegment from '@department-of-veterans-affairs/appeals-frontend-toolkit/components/AppSegment';
import Link from '@department-of-veterans-affairs/appeals-frontend-toolkit/components/Link';

import CopyIcon from '../components/CopyIcon';
import DocumentListRow from '../components/DocumentListRow';

// TODO: Add spinner that displays while the download loads.
// TODO: Add modal for confirming that the user wants to download even when the zip does not contain the entire
// list of all documents.
export default class DownloadContainer extends React.PureComponent {
  render() {
    // const veteranFullName = `${this.props.download.veteran_first_name} ${this.props.download.veteran_last_name}`;
    const veteranName = 'DeMarco Murray';
    const fileNumber = '128677390';

    const totalDocumentsCount = 11;
    const vbmsDocumentsCount = 10;
    const vvaDocumentsCount = 1;

    // TODO: Does this need to be a variable?
    const startRetrievalButtonLabel = 'Start retrieving efolder';

    // TODO: Get copy-paste feature working.

    return <main className="usa-grid">

      <AppSegment extraClassNames="cf-efolder-header">
        <h3 className="cf-push-left cf-name-header cf-efolder-name">{veteranName}</h3>

        <div className="cf-txt-uc cf-efolder-id-control cf-push-right ">Veteran ID &nbsp;
          <button
            type="submit"
            title="Copy to clipboard"
            className="cf-apppeal-id ee-copy-button"
            data-clipboard-text={fileNumber}
          >
            {fileNumber} <CopyIcon />
          </button>
        </div>
      </AppSegment>

      <AppSegment filledBackground>
        <p>eFolder Express found a total of {totalDocumentsCount} documents ({vbmsDocumentsCount} from VBMS and&nbsp;
          {vvaDocumentsCount} from VVA/LCM) for {veteranName} #{fileNumber}. Verify the Veteran ID and click the&nbsp;
          {startRetrievalButtonLabel} button below to start retrieving the eFolder.
        </p>

        <p><input className="cf-submit cf-retrieve-button" type="submit" value={startRetrievalButtonLabel} /></p>

        <div className="ee-document-list">
          <table className="usa-table-borderless ee-documents-table" summary="Files in veteran's eFolder">
            <thead>
              <tr>
                <th className ="document-col" scope="col">Document Type</th>
                <th className ="sources-col" scope="col" id="vva-tour-3">Source</th>
                <th className ="upload-col" scope="col">Receipt Date</th>
              </tr>
            </thead>

            <tbody className ="ee-document-scroll" >
              <DocumentListRow
                type="VA 21-4142a General Release for Medical Provider Information"
                source="VBMS"
                received_at="01/29/2018"
              />
              <DocumentListRow
                type="VA 24-0296 Direct Deposit Enrollment"
                source="VVA/LCM"
                received_at="01/27/2018"
              />
              <DocumentListRow
                type="VA 21-4142a General Release for Medical Provider Information"
                source="VBMS"
                received_at="01/29/2018"
              />
              <DocumentListRow
                type="VA 24-0296 Direct Deposit Enrollment"
                source="VVA/LCM"
                received_at="01/27/2018"
              />
              <DocumentListRow
                type="VA 21-4142a General Release for Medical Provider Information"
                source="VBMS"
                received_at="01/29/2018"
              />
              <DocumentListRow
                type="VA 24-0296 Direct Deposit Enrollment"
                source="VVA/LCM"
                received_at="01/27/2018"
              />
              <DocumentListRow
                type="VA 21-4142a General Release for Medical Provider Information"
                source="VBMS"
                received_at="01/29/2018"
              />
              <DocumentListRow
                type="VA 24-0296 Direct Deposit Enrollment"
                source="VVA/LCM"
                received_at="01/27/2018"
              />
              <DocumentListRow
                type="VA 21-4142a General Release for Medical Provider Information"
                source="VBMS"
                received_at="01/29/2018"
              />
              <DocumentListRow
                type="VA 24-0296 Direct Deposit Enrollment"
                source="VVA/LCM"
                received_at="01/27/2018"
              />
              <DocumentListRow
                type="VA 21-4142a General Release for Medical Provider Information"
                source="VBMS"
                received_at="01/29/2018"
              />
              <DocumentListRow
                type="VA 24-0296 Direct Deposit Enrollment"
                source="VVA/LCM"
                received_at="01/27/2018"
              />
              <DocumentListRow
                type="VA 21-4142a General Release for Medical Provider Information"
                source="VBMS"
                received_at="01/29/2018"
              />
              <DocumentListRow
                type="VA 24-0296 Direct Deposit Enrollment"
                source="VVA/LCM"
                received_at="01/27/2018"
              />
              <DocumentListRow
                type="VA 21-4142a General Release for Medical Provider Information"
                source="VBMS"
                received_at="01/29/2018"
              />
              <DocumentListRow
                type="VA 24-0296 Direct Deposit Enrollment"
                source="VVA/LCM"
                received_at="01/27/2018"
              />
              <DocumentListRow
                type="VA 21-4142a General Release for Medical Provider Information"
                source="VBMS"
                received_at="01/29/2018"
              />
              <DocumentListRow
                type="VA 24-0296 Direct Deposit Enrollment"
                source="VVA/LCM"
                received_at="01/27/2018"
              />
              <DocumentListRow
                type="VA 21-4142a General Release for Medical Provider Information"
                source="VBMS"
                received_at="01/29/2018"
              />
              <DocumentListRow
                type="VA 24-0296 Direct Deposit Enrollment"
                source="VVA/LCM"
                received_at="01/27/2018"
              />
              <DocumentListRow
                type="VA 21-4142a General Release for Medical Provider Information"
                source="VBMS"
                received_at="01/29/2018"
              />
              <DocumentListRow
                type="VA 24-0296 Direct Deposit Enrollment"
                source="VVA/LCM"
                received_at="01/27/2018"
              />
            </tbody>
          </table>
        </div>
      </AppSegment>

      <AppSegment>
        <input
          className="cf-submit cf-retrieve-button ee-right-button"
          type="submit"
          value={startRetrievalButtonLabel}
        />
        <Link href="/" className="ee-button-align">Start over</Link>
      </AppSegment>
    </main>;
  }
}
