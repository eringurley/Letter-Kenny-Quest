import api from '../src/services/api.js';
import scoreQuest from '../src/quest/score-quest.js';
// 

const test = QUnit.test;
QUnit.module('api');
api.storage = sessionStorage;

test('test to return updated user profile', (assert) => {
    //arrange
    const choice = {
        puppers: 5,
        gusNbru: 5
    };

    const user = {
        puppers: 1,
        gusNbru: 0
    };


    //act
    const newUser = scoreQuest(choice, user);
    const result = {
        puppers: 6,
        gusNbru: 10
    };

    //assert
    assert.deepEqual(newUser, result);

});