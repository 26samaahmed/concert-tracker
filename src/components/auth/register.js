// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
  import {getAuth, createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBjv6fAgXh1_ShXu_LCDD3z7w3V_Fvk9OE",
    authDomain: "concert-tracker-2d579.firebaseapp.com",
    databaseURL: "https://concert-tracker-2d579-default-rtdb.firebaseio.com",
    projectId: "concert-tracker-2d579",
    storageBucket: "concert-tracker-2d579.appspot.com",
    messagingSenderId: "549247172105",
    appId: "1:549247172105:web:f77729e22d32c1cfc542d8"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  // Submit button
  const submit = document.getElementById('submit');

  // Submit event
  submit.addEventListener('click', function(event) {
    event.preventDefault();

    // Input fields
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      alert('Creating User');

      // Redirect to login page
      window.location.href = 'login.html';
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert('Error Creating User: ', errorCode, errorMessage);
      // ..
    });
  });