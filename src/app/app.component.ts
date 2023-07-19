import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
})
export class AppComponent {
  localesList = [
    { code: "en-US", label: "English" },
    { code: "ua", label: "Українська" },
    { code: "de", label: "Deutsch" },
  ];
}
