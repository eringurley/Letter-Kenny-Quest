import api from '../services/api.js';
import createQuestLink from './create-quest-link.js';
import loadProfile from './load-profile.js';

loadProfile();

const user = api.getUser();

if(!user) {
    window.location = './';
}



const quests = api.getQuests();
const div = document.getElementById('quests');
for(let i = 0; i < quests.length; i++) {
    const quest = quests[i];
    const link = createQuestLink(quest);
    div.appendChild(link);
}