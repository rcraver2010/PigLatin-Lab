
let main = require('./pig');


test('Starts with vowel e', () => {
    let pigLatinWord = main.translate('Even');

    expect(pigLatinWord).toBe('evenway');
})

test('Starts with vowel i', () => {
    let pigLatinWord = main.translate('Island');

    expect(pigLatinWord).toBe('islandway');
})

test('Starts with vowel o', () => {
    let pigLatinWord = main.translate('Orange');

    expect(pigLatinWord).toBe('orangeway');
})

test('Starts with vowel u', () => {
    let pigLatinWord = main.translate('Under');

    expect(pigLatinWord).toBe('underway');
})

test('Starts with vowel a', () => {
    let pigLatinWord = main.translate('Apple');

    expect(pigLatinWord).toBe('appleway');
})

test('One consonant word', () => {
    let pigLatinWord = main.translate('pie');

    expect(pigLatinWord).toBe('iepay');
})

test('One consonant word', () => {
    let pigLatinWord = main.translate('sea');

    expect(pigLatinWord).toBe('easay');
})

test('Two consonant word', () => {
    let pigLatinWord = main.translate('black');

    expect(pigLatinWord).toBe('ackblay');
})

test('Three consonant word', () => {
    let pigLatinWord = main.translate('splash');

    expect(pigLatinWord).toBe('ashsplay');
})