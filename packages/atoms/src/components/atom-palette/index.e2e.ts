import { newE2EPage } from '@stencil/core/testing';

describe('atom-palette', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<atom-palette></atom-palette>');

    const element = await page.find('atom-palette');
    expect(element).toHaveClass('hydrated');
  });
});
