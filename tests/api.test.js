import questData from '../src/services/quest-data.js';
import api from '../src/services/api.js';

const test = QUnit.test;

QUnit.module('api');
api.storage = sessionStorage;
QUnit.testStart(() => {
    sessionStorage.clear();
});

test('signUp sets user and return on getUser', (assert) => {
    //arrange
    const user = { character: 'wayne' };

    //act
    api.signUp(user);
    const result = api.getUser();

    //assert
    assert.deepEqual(result, user);
});

test('returns lists of quests', (assert) => {
    //arrange
    const expected = questData;

    //act
    const quests = api.getQuests();
    
    //assert
    assert.deepEqual(quests, expected);
});

test('load specific quest from ID', (assert) => {
    //arrange
    const quests = api.getQuests();
    const expectedQuest = quests[0];
    //act
    const foundQuest = api.getQuest(expectedQuest.id);
    //assert
    assert.deepEqual(foundQuest, expectedQuest);
});