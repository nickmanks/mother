import { Component, ComponentInterface, Host, Prop, h } from "@stencil/core";

@Component({
  tag: "atom-button",
  styleUrl: "index.scss",
  shadow: true,
})
export class AtomButton implements ComponentInterface {
  /**
   * The theme color of the button background
   * e.g. primary
   */
  @Prop() theme?:
    | "primary"
    | "secondary"
    | "warning"
    | "danger"
    | "info"
    | "success"
    | "transparent"
    | "light"
    | "white" = "primary";

  /**
   * True if create a pill button with rounded corners
   */
  @Prop() pill?: boolean;

  render() {
    return (
      <Host>
        <button
          class={{
            button: true,
            pill: this.pill,
            transparent: this.theme === "transparent",
            white: this.theme === "white",
          }}
          data-theme={this.theme}
        >
          <slot></slot>
        </button>
      </Host>
    );
  }
}
