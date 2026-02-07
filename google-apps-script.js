/**
 * Google Apps Script for Google Sheets Form Submission
 * 
 * INSTRUCTIONS:
 * 1. Open Google Sheets: https://sheets.google.com
 * 2. Open your spreadsheet "Project Details" (ID: 1N1rDDX2TDmSCXJRD4JT0bdnU-34ISC9i)
 * 3. Go to Extensions > Apps Script
 * 4. Delete any existing code and paste this entire file
 * 5. Save the project (Ctrl+S or Cmd+S)
 * 6. Click "Deploy" > "New deployment"
 * 7. Click the gear icon next to "Select type" and choose "Web app"
 * 8. Set:
 *    - Description: "Form Submission Handler"
 *    - Execute as: "Me"
 *    - Who has access: "Anyone"
 * 9. Click "Deploy"
 * 10. Copy the Web App URL and paste it in the Contact.tsx file where it says "YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL"
 * 11. Click "Done"
 */

function doPost(e) {
  try {
    // Parse the JSON data from the request
    const data = JSON.parse(e.postData.contents);
    
    // Open the spreadsheet by ID
    const spreadsheetId = '1ADLySeraWl-4K64ONrkVYae0BMir5zfyt4jz4nMMYro';
    const sheetId = 1683568260; // Form Leads sheet ID
    const spreadsheet = SpreadsheetApp.openById(spreadsheetId);
    const sheet = spreadsheet.getSheetById(sheetId);
    
    // If sheet not found by ID, try by name
    if (!sheet) {
      const sheet = spreadsheet.getSheetByName('Form Leads');
      if (!sheet) {
        throw new Error('Sheet "Form Leads" not found');
      }
    }
    
    // Get the last row to append data
    const lastRow = sheet.getLastRow();
    
    // Prepare the row data matching your sheet columns:
    // Full Name | Email Address | Phone Number | Project Vision
    const rowData = [
      data.fullName || '',
      data.email || '',
      data.phone || '',
      data.projectVision || ''
    ];
    
    // Append the data to the sheet
    sheet.appendRow(rowData);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({
        success: true,
        message: 'Data submitted successfully'
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({
        success: false,
        error: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Optional: GET handler for testing
function doGet(e) {
  return ContentService
    .createTextOutput('Google Sheets Form Handler is running!')
    .setMimeType(ContentService.MimeType.TEXT);
}
