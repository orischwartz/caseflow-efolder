import React from 'react';
import { connect } from 'react-redux';

import AppSegment from '@department-of-veterans-affairs/caseflow-frontend-toolkit/components/AppSegment';

import DocumentListRow from '../components/DocumentListRow';
import DownloadPageFooter from '../components/DownloadPageFooter';
import DownloadPageHeader from '../components/DownloadPageHeader';

class DownloadListContainer extends React.PureComponent {
  render() {
    const totalDocumentsCount = 11;
    const vbmsDocumentsCount = 10;
    const vvaDocumentsCount = 1;

    return <main className="usa-grid">
      <DownloadPageHeader fileNumber={this.props.fileNumber} veteranName={this.props.veteranName} />

      <AppSegment filledBackground>
        <p>eFolder Express found a total of {totalDocumentsCount} documents ({vbmsDocumentsCount} from VBMS and&nbsp;
          {vvaDocumentsCount} from VVA/LCM) for {this.props.veteranName} #{this.props.fileNumber}.&nbsp;
          Verify the Veteran ID and click the&nbsp;
          {this.props.startDownloadButtonLabel} button below to start retrieving the eFolder.
        </p>

        <p>
          <input className="cf-submit cf-retrieve-button" type="submit" value={this.props.startDownloadButtonLabel} />
        </p>

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

      <DownloadPageFooter label={this.props.startDownloadButtonLabel} />
    </main>;
  }
}

const mapStateToProps = (state) => ({
  fileNumber: state.fileNumber,
  startDownloadButtonLabel: state.startDownloadButtonLabel,
  veteranName: state.veteranName
});

export default connect(mapStateToProps)(DownloadListContainer);
