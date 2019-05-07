function makeUser(formData) {
    const user = {
        character: formData.get('character'),
        puppers: 3, 
        gusNbru: 1
    };
    return user;
}

export default makeUser;