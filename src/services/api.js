const api = {
    //use by testing to control where api saves data 
    stroage: localStorage, 
    //methods for reading and saving data
    signUp(user) {
        const json = JSON.stringify(user);
        api.stroage.setItem('user', json);
    }, 
    getUser() {
        return;
        // const json = api.storaage.getItem('user');
        // if(!json) return null;
        // const user = JSON.parge(json);
        // return user;
    }
};

export default api;