import { Component } from "@angular/core";

@Component({
  selector: "hello-world",
  template: `
    <h2 i18n>Hello World</h2>
    <p i18n>This is my first component!</p>
  `,
})
export class HelloWorldComponent {
  // The code in this class drives the component's behavior.
}
