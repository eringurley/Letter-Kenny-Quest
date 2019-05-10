function scoreQuest(choice, user) {
    user.puppers = user.puppers + choice.puppers;
    user.gusNbru = user.gusNbru + choice.gusNbru;
    return user;
}
export default scoreQuest;
