import makeUser from '../src/home/make-user.js';
const test = QUnit.test;

QUnit.module('make user');

test('create user object from form data', (assert) => {
    //arrange
    const formData = new FormData();
    formData.set('character', 'Wayne');

    const expected = {
        character: 'Wayne',
        puppers: 3,
        gusNbru: 1
    };
    //act
    const user = makeUser(formData);

    //assert
    assert.deepEqual(user, expected);
});

   
