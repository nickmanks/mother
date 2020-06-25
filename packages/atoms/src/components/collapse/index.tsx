import {
  Component,
  ComponentInterface,
  Host,
  Listen,
  State,
  h,
} from "@stencil/core";

@Component({
  tag: "atom-collapse",
  styleUrl: "index.scss",
  shadow: true,
})
export class AtomCollapse implements ComponentInterface {
  @State() open: boolean = false;

  @Listen("click")
  handleFocus() {
    this.open = !this.open;
  }

  render() {
    return (
      <Host>
        <div class={{ container: true, open: this.open }}>
          <div>
            <slot name="header"></slot>
          </div>
          <div class={{ collapse: true, open: this.open }}>
            <slot name="content"></slot>
          </div>
        </div>
      </Host>
    );
  }
}
