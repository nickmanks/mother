import { Component, ComponentInterface, Element, h } from "@stencil/core";
import Prism from "prismjs";

@Component({
  tag: "atom-syntax",
  styleUrl: "index.scss",
  shadow: true,
})
export class AtomSyntax implements ComponentInterface {
  @Element() host: HTMLDivElement;

  render() {
    const childNodes = [];
    this.host.childNodes.forEach((childNode) => childNodes.push(childNode));

    const syntax = childNodes.map((childNode: HTMLElement) => {
      if (childNode.outerHTML) {
        return (
          <div
            class={{ element: true }}
            innerHTML={Prism.highlight(
              childNode.outerHTML,
              Prism.languages.html,
              "html"
            )}
          ></div>
        );
      }
    });

    return <div class={{ container: true }}>{syntax}</div>;
  }
}
