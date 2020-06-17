import {
  Component,
  ComponentInterface,
  Host,
  State,
  Prop,
  Listen,
  h,
} from "@stencil/core";
import uniqueId from "lodash.uniqueId";

@Component({
  tag: "atom-input",
  styleUrl: "index.scss",
  shadow: true,
})
export class AtomInput implements ComponentInterface {
  @State() id = uniqueId("input-");
  @State() focused: boolean;

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

  /**
   * A prepended icon
   */
  @Prop() pre?: string;

  /**
   * An appended icon
   */
  @Prop() post?: string;

  /**
   * Placeholder
   */
  @Prop() placeholder?: string;

  /**
   * A prepended icon
   */
  @Prop() label?: string;

  @Listen("focus", { capture: true })
  handleFocus() {
    this.focused = true;
  }

  @Listen("blur", { capture: true })
  handleBlur() {
    this.focused = false;
  }

  render() {
    return (
      <Host>
        {this.label && (
          <label class={{ label: true }} htmlFor={this.id}>
            {this.label}
          </label>
        )}
        <div class={{ outer: true }}>
          <div id={this.id} class={{ container: true, focus: this.focused }}>
            {this.pre && (
              <div>
                <atom-icon name={this.pre} size={"sml"} theme={this.theme} />
              </div>
            )}
            <input
              class={{
                input: true,
                pre: this.pre !== undefined,
                post: this.post !== undefined,
              }}
              placeholder={this.placeholder}
            />
            {this.post && (
              <div>
                <atom-icon name={this.post} size={"sml"} theme={this.theme} />
              </div>
            )}
          </div>
          <div
            class={{ border: true, focused: this.focused }}
            data-border={this.theme}
          />
        </div>
      </Host>
    );
  }
}
