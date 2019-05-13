import quests from './services/quest-data';

function scoreQuest(choice, user) {
    user.puppers = user.puppers + choice.puppers;
    user.gusNbru = choice.gusNbru + choice.gusNbru;
    user.completed[quests.id] = true;
    return user;
}
export default scoreQuest;
