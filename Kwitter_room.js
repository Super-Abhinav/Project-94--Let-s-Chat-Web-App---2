user_name = localStorage.getItem("Username");
document.getElementById("user_name").innerHTML = "Hi, " + user_name;

function Logout() {
      window.location = "Kwitter.html";
}
//ADD YOUR FIREBASE LINKS HERE

// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyCnXS8Fn8Y7WaMXSbAacvF8R-38kwFqq2M",
      authDomain: "kwitter-webapp---project.firebaseapp.com",
      projectId: "kwitter-webapp---project",
      storageBucket: "kwitter-webapp---project.appspot.com",
      messagingSenderId: "624110386371",
      appId: "1:624110386371:web:c1c560a12882f41e0e7676"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
