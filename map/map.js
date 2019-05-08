import api from '../services/api.js';

//reference needed DOM elements

const character = document.getElementById('character');
const avatar = document.getElementById('avatar');
const puppers = document.getElementById('puppers');
const gusNbru = document.getElementById('gusNBru');

//initialle: load profile with user
const user = api.getUser();

//copy data from object to DOM properties
character.textContent = character.name;
avatar.src = '..public/assets/avatars/' + user.character + '.png';
puppers.textContent = user.puppers;
gusNbru.textContent = user.gusNbru;