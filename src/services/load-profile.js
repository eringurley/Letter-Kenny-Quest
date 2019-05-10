import api from './api.js';

function loadProfile() {
    const character = document.getElementById('character');
    const puppers = document.getElementById('puppers');
    const gusNbru = document.getElementById('gusNbru');
    const avatar = document.getElementById('avatar');

    const user = api.getUser();

    if(!user) {
        window.location = './';
    }

    character.textContent = user.character;
    avatar.src = '../public/assets/avatars/' + user.character + '.png';
    puppers.textContent = user.puppers;
    gusNbru.textContent = user.gusNbru;
}

export default loadProfile;