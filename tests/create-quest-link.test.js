import createQuestLink from '../src/map/create-quest-link.js';
const test = QUnit.test;

QUnit.module('create quest link');

test('create correct html', (assert) => {
    //arrange
    const quest = {
        id: 'barn',
        title: 'Barn'
    };

    const expected = '<a class="barn" href="quest.html?id=barn">></a>';

    //act
    const dom = createQuestLink(quest);

    //assert
    assert.eqaul(dom.outerHTML, expected);
});