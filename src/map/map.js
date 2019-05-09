import api from '../services/api.js';
import createQuestLink from './create-quest-link.js';

//reference needed DOM elements

const character = document.getElementById('character');
const avatar = document.getElementById('avatar');
const puppers = document.getElementById('puppers');
const gusNbru = document.getElementById('gusNbru');

//initialle: load profile with user
const user = api.getUser();

if(!user) {
    window.location = './';
}

//copy data from object to DOM properties
character.textContent = character.name;
avatar.src = '../public/assets/avatars/' + user.character + '.png';
puppers.textContent = user.puppers;
gusNbru.textContent = user.gusNbru;

const quests = api.getQuests();
const div = document.getElementById('quests');
for(let i = 0; i < quests.length; i++) {
    const quest = quests[i];
    const link = createQuestLink(quest);
    div.appendChild(link);
}