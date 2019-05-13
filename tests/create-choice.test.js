import createChoice from '../src/quest/create-choice.js';
import api from '../src/services/api.js';
const test = QUnit.test;

QUnit.module('api');
api.storage = sessionStorage;
QUnit.testStart(() => {
    sessionStorage.clear();
});

test('take a quest choice object and return DOM element for that choice', (assert) => {
    //arrange
    const choice = {
        id: 'horse',
        description: 'Cleary, the horse dressed up as a unicorn.'
    };
    //act
    const expected = '<label>Cleary, the horse dressed up as a unicorn.<input type="radio" name="choice" required="" value="horse"></label>';
    const dom = createChoice(choice);
    //assert
    assert.deepEqual(dom.outerHTML, expected);
});