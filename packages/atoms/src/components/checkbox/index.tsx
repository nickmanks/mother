import {
  Component,
  ComponentInterface,
  Host,
  Prop,
  State,
  h,
} from "@stencil/core";
import uniqueId from "lodash.uniqueId";

@Component({
  tag: "atom-checkbox",
  styleUrl: "index.scss",
  shadow: true,
})
export class AtomCheckbox implements ComponentInterface {
  @State() id = uniqueId("checkbox-");

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
    | "white" = "primary";

  render() {
    return (
      <Host>
        <input
          data-theme={this.theme}
          type="checkbox"
          id={this.id}
          name="check"
          value=""
        />
        <label htmlFor={this.id} data-theme={this.theme}>
          <span></span>
          <slot></slot>
        </label>
      </Host>
    );
  }
}
