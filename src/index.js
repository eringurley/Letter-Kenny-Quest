import makeUser from '.make-user.js';
import api from './src/services/api.js'; 

const userSignUp = document.getElementById('user-sign-up');

userSignUp.addEventListener('submit', function(event){
    event.preventDefault();

    const formData = new FormData(userSignUp);
    const user = makeUser(formData);
    api.signUp(user);

    window.location = 'map.html';
});