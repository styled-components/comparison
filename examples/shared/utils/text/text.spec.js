import assert from 'assert';

import { transform } from './text';

describe('text', () => {
  describe('transform', () => {
    it('transforms text using entities', () => {
      const data = {
        text: '\ud83d\udc4f Love love love this article by @chantastic. CSS-in-JS isn\u2019t a campaign against CSS! https://t.co/P3QdkX88rs https://t.co/vV3dJ4fens',
        entities: {
          user_mentions: [{
            screen_name: 'chantastic',
          }],
          urls: [{
            url: 'https://t.co/P3QdkX88rs',
            display_url: 'medium.com/learnreact/sca\u2026',
          }],
          media: [{
            url: 'https://t.co/vV3dJ4fens',
          }],
        },
      };

      const expected = '\ud83d\udc4f Love love love this article by <a target="_blank" href="https://twitter.com/chantastic">@chantastic</a>. CSS-in-JS isn\u2019t a campaign against CSS! <a target="_blank" href="https://t.co/P3QdkX88rs">medium.com/learnreact/sca…</a>';

      assert.equal(transform(data), expected);
    });
  });
});
