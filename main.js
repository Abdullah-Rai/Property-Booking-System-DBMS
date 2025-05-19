
const firebaseConfig = {
  apiKey: "AIzaSyCiUXTNjIx3Qq4RWwIbn7M5G5OOI4SQtcs",
  authDomain: "hotel-3a444.firebaseapp.com",
  databaseURL: "https://hotel-3a444-default-rtdb.firebaseio.com",
  projectId: "hotel-3a444",
  storageBucket: "hotel-3a444.firebasestorage.app",
  messagingSenderId: "937361856719",
  appId: "1:937361856719:web:c43e9a7815ad1218b73fba"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = this.name.value;
  const email = this.email.value;
  const room = this.room.value;
   const phone = this.phone.value;

  const message = this.message.value;

  db.ref("contacts").push({ name, email, room, phone, message })
    .then(() => {
      alert("Message sent successfully!");
      this.reset();
    })
    .catch((error) => {
      alert("Error: " + error.message);
    });
});
