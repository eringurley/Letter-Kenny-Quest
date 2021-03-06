import api from './services/api.js'; 
import makeUser from './home/make-user.js';

const userSignUp = document.getElementById('user-sign-up');

userSignUp.addEventListener('submit', function(event){
    event.preventDefault();

    const formData = new FormData(userSignUp);
    const user = makeUser(formData);
    api.signUp(user);

    window.location = 'map.html';
});