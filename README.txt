
HOTEL WEBSITE - FIREBASE ENABLED CONTACT FORM

✅ How to Use:
1. Extract this ZIP completely.
2. DO NOT open index.html directly from inside the ZIP.
3. Open the extracted folder and double-click on:
   - contact.html (to test Firebase form)
   - Form.html (also integrated with Firebase)
4. Make sure you're connected to the internet so Firebase loads.

🚀 Firebase Configuration:
Replace the Firebase config in the <script> tag inside contact.html and Form.html:
  - apiKey
  - authDomain
  - databaseURL
  - etc.

📩 Form Submission:
Captured data: name, email, subject, message
Saved to: Firebase Realtime Database under node `/contacts`

❗ Common Fix:
If you get ERR_FILE_NOT_FOUND, make sure all files are in the same folder:
  - index.html
  - contact.html
  - Form.html
  - main.js
  - style.css
  - assets/
  - vendor/

Enjoy!
