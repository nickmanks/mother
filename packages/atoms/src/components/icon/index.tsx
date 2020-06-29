import { Component, ComponentInterface, Host, Prop, h } from "@stencil/core";

@Component({
  tag: "atom-icon",
  styleUrl: "index.scss",
  shadow: false,
})
export class AtomIcon implements ComponentInterface {
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
    | "dark"
    | "white" = "primary";

  @Prop() name: string;

  @Prop() size?: "xs" | "sml" | "md" | "lg" | "xl";

  render() {
    return (
      <Host>
        <i
          class={`ms-Icon ms-Icon--${this.name}`}
          data-theme={this.theme}
          data-size={this.size}
        />
      </Host>
    );
  }
}
