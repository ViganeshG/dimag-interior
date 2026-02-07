# Google Sheets Integration Setup Guide

## Step 1: Deploy Google Apps Script

1. Open your Google Sheet: [Project Details](https://docs.google.com/spreadsheets/d/1N1rDDX2TDmSCXJRD4JT0bdnU-34ISC9i)

2. Go to **Extensions** → **Apps Script**

3. Delete any existing code and paste the entire contents of `google-apps-script.js`

4. Click **Save** (Ctrl+S or Cmd+S)

5. Click **Deploy** → **New deployment**

6. Click the gear icon ⚙️ next to "Select type" and choose **"Web app"**

7. Configure the deployment:
   - **Description**: "Form Submission Handler"
   - **Execute as**: "Me"
   - **Who has access**: "Anyone" (this allows your website to submit data)

8. Click **Deploy**

9. **Copy the Web App URL** (it will look like: `https://script.google.com/macros/s/.../exec`)

## Step 2: Configure the Website

### Option A: Using Environment Variable (Recommended)

1. Create a `.env.local` file in the root of your project:

```env
VITE_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
```

2. Replace `YOUR_SCRIPT_ID` with the actual ID from your deployed script URL

3. Restart your development server (`npm run dev`)

### Option B: Direct Update in Code

1. Open `dimag-interior/pages/Contact.tsx`

2. Find this line (around line 40):
```typescript
const scriptUrl = import.meta.env.VITE_GOOGLE_SCRIPT_URL || 'YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL';
```

3. Replace `'YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL'` with your actual Web App URL:
```typescript
const scriptUrl = import.meta.env.VITE_GOOGLE_SCRIPT_URL || 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec';
```

## Step 3: Test the Integration

1. Make sure your Google Sheet has the headers in the "Form Leads" sheet:
   - Column A: Full Name
   - Column B: Email Address
   - Column C: Phone Number
   - Column D: Project Vision

2. Fill out the contact form on your website

3. Submit the form

4. Check your Google Sheet - the data should appear in a new row

## Troubleshooting

### Form not submitting?
- Check browser console for errors
- Verify the Google Apps Script URL is correct
- Make sure "Who has access" is set to "Anyone" in the deployment settings

### Data not appearing in sheet?
- Check the Apps Script execution log: **View** → **Execution log**
- Verify the sheet name is exactly "Form Leads" (case-sensitive)
- Make sure the sheet ID (1353630690) is correct

### CORS errors?
- Make sure you deployed as a Web app (not just saved the script)
- Verify "Who has access" is set to "Anyone"

## Security Note

The current setup allows anyone to submit data to your sheet. For production, consider:
- Adding form validation
- Implementing rate limiting
- Adding a CAPTCHA
- Using Google Apps Script to add authentication
