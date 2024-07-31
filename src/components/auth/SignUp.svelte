<script>
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

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
</script>

<main>
  <h1>Sign Up</h1>
  <form>
    <label for="email">Email</label>
    <input type="email" id="email" name="email" required>

    <label for="password">Password</label>
    <input type="password" id="password" name="password" required>

    <button type="submit">Sign Up</button>
  </form>
</main>