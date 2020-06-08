import { newSpecPage } from '@stencil/core/testing';
import { AtomPalette } from './atom-palette';

describe('atom-palette', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AtomPalette],
      html: `<atom-palette></atom-palette>`,
    });
    expect(page.root).toEqualHtml(`
      <atom-palette>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </atom-palette>
    `);
  });
});
