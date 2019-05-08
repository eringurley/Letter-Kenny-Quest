import api from '../src/services/api.js';

const test = QUnit.test;

QUnit.module('api');
api.storage = sessionStorage;
QUnit.testStart(() => {
    sessionStorage.clear();
});

test('signUp sets user and return on getUser', (assert) => {
    //arrange
    const user = { 
        character: 'wayne'
    };

    //act
    api.signUp(user);
    const result = api.getUser();

    //assert
    assert.deepEqual(result, user);
});