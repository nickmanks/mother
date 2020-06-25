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
  tag: "atom-radio",
  styleUrl: "index.scss",
  shadow: true,
})
export class AtomRadio implements ComponentInterface {
  @State() id = uniqueId("radio-");

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
        <label htmlFor={this.id} class="radio" data-theme={this.theme}>
          <input id={this.id} type="radio" name="radios" />
          <span class="outer">
            <span class="inner"></span>
          </span>
          <slot></slot>
        </label>
      </Host>
    );
  }
}
