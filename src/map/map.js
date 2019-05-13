import api from '../services/api.js';
import createQuestLink from './create-quest-link.js';
import loadProfile from '../services/load-profile.js';
// import hasCompletedAllQuests from './hasCompletedAllQuests.js';

loadProfile();
const quests = api.getQuests();
const user = api.getUser();

if(!user) {
    window.location = './';
}

const div = document.getElementById('barn');

for(let i = 0; i < quests.length; i++) {
    const quest = quests[i];    
    const link = createQuestLink(quest);
    div.appendChild(link);
    if(user.completed[quest.id]) {
        link.classList.add('completed');
    }
}

