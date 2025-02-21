const database = firebase.database();

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    // User is signed in.
    console.log('User is signed in:', user.uid);
    database.ref('/').once('value').then(snapshot => {
      console.log(snapshot.val());
    }).catch(error => {
      console.error('Error reading data:', error);
    });
  } else {
    // User is signed out.
    console.log('User is signed out.');
    // Redirect to login or handle accordingly
  }
});