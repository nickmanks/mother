import { Component, ComponentInterface, Host, State, h } from "@stencil/core";

@Component({
  tag: "atom-modal",
  styleUrl: "index.scss",
  shadow: true,
})
export class AtomModal implements ComponentInterface {
  @State() open: boolean = false;

  handleClick() {
    this.open = !this.open;
  }

  render() {
    return (
      <Host>
        <button onClick={this.handleClick.bind(this)}>Open</button>
        <div
          class={{
            modal: true,
            show: this.open,
            hide: !this.open,
          }}
          onClick={this.handleClick.bind(this)}
        >
          <div class="modal-dialog">
            <div class="modal-header">
              <h4>Dear reader,</h4>
            </div>
            <div class="modal-body">
              <p>
                This is a modal window. You can do the following things with it:
              </p>
              <ul>
                <li>
                  <strong>Read</strong>: modal windows will probably tell you
                  something important so don't forget to read what they say.
                </li>
                <li>
                  <strong>Look</strong>: a modal window enjoys a certain kind of
                  attention; just look at it and appreciate its presence.
                </li>
              </ul>

              <small>Click anywhere to close</small>
            </div>
          </div>
        </div>
      </Host>
    );
  }
}
