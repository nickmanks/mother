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
        >
          <div class="modal-dialog">
            <div class="modal-header">
              <atom-icon
                name="ProfileSearch"
                theme="primary"
                size="md"
              ></atom-icon>
              <p>Select the thing now</p>
              <div
                class="modal-header-close"
                onClick={this.handleClick.bind(this)}
              >
                <atom-icon name="Cancel" theme="dark" size="sml"></atom-icon>
              </div>
            </div>
            <div class="modal-body">
              <atom-input
                post="DelveAnalytics"
                placeholder="Look at this"
                label="Appended Icon"
              ></atom-input>
              <atom-input
                pre="Search"
                placeholder="Search something"
                label="Search"
              ></atom-input>
              <atom-input
                pre="CheckMark"
                label="Success"
                placeholder="You did the thing"
                theme="success"
              ></atom-input>

              <div style={{ paddingTop: "2rem" }}>
                <atom-checkbox>Checkbox</atom-checkbox>
              </div>
            </div>
            <div class="modal-footer">
              <div
                style={{
                  display: "flex",
                  textAlign: "right",
                  justifyContent: "flex-end",
                }}
              >
                <atom-button
                  onClick={this.handleClick.bind(this)}
                  theme="transparent"
                  pill
                >
                  Secondary Click
                </atom-button>
                <atom-button
                  style={{ marginRight: "0" }}
                  onClick={this.handleClick.bind(this)}
                  theme="primary"
                  pill
                >
                  Primary Click
                </atom-button>
              </div>
            </div>
          </div>
        </div>
      </Host>
    );
  }
}
