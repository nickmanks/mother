import { Component, ComponentInterface, Host, Prop, h } from '@stencil/core';

import { theme } from '../../utils/theme';

@Component({
  tag: 'atom-palette',
  styleUrl: 'index.scss',
  shadow: true,
})
export class AtomPalette implements ComponentInterface {
  /**
   * The primary color hex value of the palette
   * e.g. #912bff
   */
  @Prop() primary: string;
  @Prop() secondary: string;

  render() {
    const palette = theme(this.primary, this.secondary);
    const picks = [
      'base',
      'secondary',
      'success',
      'warning',
      'danger',
      'info',
      'primaryFont',
    ];

    const colors = Reflect.ownKeys(palette).filter(val => {
      for (const pick of picks) {
        if (pick === val) {
          return false;
        }
      }

      return true;
    });

    return (
      <Host>
        <div>
          <h1 class="heading">Your Theme</h1>
          <div class="color-container">
            {picks.map(hex => (
              <div>
                <div style={{ background: palette[hex] }}></div>
                <span class="subheading">{hex}</span>
                <br />
                <span class="subheading">{palette[hex]}</span>
              </div>
            ))}
          </div>
        </div>
        {colors.map(color => (
          <div>
            <h4 class="subheading">{color}</h4>
            <div class="color-container">
              {Array.isArray(palette[color]) ? (
                palette[color].map(hex => (
                  <div>
                    <div style={{ background: hex }}></div>
                    <span class="subheading">{hex}</span>
                  </div>
                ))
              ) : (
                <div style={{ background: palette[color] }}></div>
              )}
            </div>
          </div>
        ))}
      </Host>
    );
  }
}
