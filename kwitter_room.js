
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyBdpNitrnremh7K23rLUujeF7SzK3tfoMA",
      authDomain: "lets-chat-1983a.firebaseapp.com",
      projectId: "lets-chat-1983a",
      storageBucket: "lets-chat-1983a.appspot.com",
      messagingSenderId: "1047628650009",
      appId: "1:1047628650009:web:e04a96e7b458b914717c88"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
