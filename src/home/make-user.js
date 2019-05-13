function makeUser(formData) {
    const user = {
        character: formData.get('character'),
        puppers: 3, 
        gusNbru: 1,
        completed: {}
    };
    return user;
}

export default makeUser;