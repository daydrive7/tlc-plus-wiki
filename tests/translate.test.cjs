const test = require('node:test');
const assert = require('node:assert/strict');
const { translationUrl } = require('../docs/javascripts/translate.js');
test('translation preserves a nested page, query, fragment and hyphenated host', () => {
  const source = 'https://my-wiki.example.com/tlc-plus-wiki/files/saving-loading/?q=save%20track#what-a-trk5-preserves';
  const result = new URL(translationUrl(source, 'pl'));
  assert.equal(result.origin, 'https://translate.google.com');
  assert.equal(result.searchParams.get('u'), source);
  assert.equal(result.searchParams.get('sl'), 'en');
  assert.equal(result.searchParams.get('tl'), 'pl');
});
test('local previews and file pages are not sent to translation', () => {
  for (const source of ['http://127.0.0.1:8000/', 'http://localhost:8000/',
    'https://localhost/', 'https://127.0.0.1/', 'http://[::1]/', 'file:///C:/wiki/index.html']) {
    assert.equal(translationUrl(source, 'de'), null);
  }
});
