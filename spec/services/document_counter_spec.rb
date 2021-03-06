describe DocumentCounter do
  let(:vva_documents) do
    [
      OpenStruct.new(document_id: "11", series_id: "3"),
      OpenStruct.new(document_id: "12", series_id: "4", type_id: DocumentFilter::RESTRICTED_TYPES.sample)
    ]
  end

  before do
    allow(Fakes::VVAService).to receive(:v2_fetch_documents_for).and_return(vva_documents)
  end

  describe "#count" do
    subject { described_class.new(veteran_file_number: "DEMOFAST") }

    it "returns total unrestricted document count for all sources" do
      expect(subject.count).to eq(11) # 10 for DEMOFAST + 1 unrestricted vva_documents
    end
  end
end
