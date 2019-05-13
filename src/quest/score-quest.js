function scoreQuest(choice, user) {
    user.puppers = user.puppers + choice.puppers;
    user.gusNbru = choice.gusNbru + choice.gusNbru;
    return user;
}
export default scoreQuest;
