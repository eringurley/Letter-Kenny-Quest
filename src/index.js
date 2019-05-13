import api from './services/api.js'; 
import makeUser from './home/make-user.js';

const usersaveUser = document.getElementById('user-sign-up');

usersaveUser.addEventListener('submit', function(event){
    event.preventDefault();

    const formData = new FormData(usersaveUser);
    const user = makeUser(formData);
    api.saveUser(user);

    window.location = 'map.html';
});