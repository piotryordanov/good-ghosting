import { GoogleSpreadsheet } from 'google-spreadsheet';

// Config variables
const SPREADSHEET_ID = ''
const SHEET_ID = ;
const CLIENT_EMAIL = ''
const PRIVATE_KEY = '';

const doc = new GoogleSpreadsheet(SPREADSHEET_ID);

const appendSpreadsheet = async (row, res) => {
  try {
    await doc.useServiceAccountAuth({
      client_email: CLIENT_EMAIL,
      private_key: PRIVATE_KEY,
    });
    // loads document properties and worksheets
    await doc.loadInfo();
    const sheet = doc.sheetsById[SHEET_ID];
    const result = await sheet.addRow(row);
    res.send(200);
  } catch (e) {
    res.send(e);
    console.error('Error: ', e);
  }
};

export default (req, res) => {
  appendSpreadsheet(req.body, res);
};
