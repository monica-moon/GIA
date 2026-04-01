// Firebase Configuration for Healing with Gia
// =============================================
// TO SET UP:
// 1. Go to https://console.firebase.google.com/
// 2. Create a new project (or use an existing one)
// 3. Click "Add app" and choose Web (</>)
// 4. Register the app (no hosting needed)
// 5. Copy your config values below
// 6. Go to Realtime Database > Create Database > Start in TEST mode
// 7. Your database URL will look like: https://YOUR-PROJECT-ID-default-rtdb.firebaseio.com

var firebaseConfig = {
  apiKey: "YOUR_API_KEY_HERE",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  databaseURL: "https://YOUR_PROJECT_ID-default-rtdb.firebaseio.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Database Rules (set these in Firebase Console > Realtime Database > Rules):
// {
//   "rules": {
//     ".read": true,
//     ".write": true
//   }
// }
