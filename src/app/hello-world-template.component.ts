import { Component } from "@angular/core";

@Component({
  selector: "hello-world-template",
  template: `
    <h2 i18n>Hello World Template</h2>
    <button i18n type="button" (click)="onEditClick()">
      Make text editable!
    </button>
    <p [contentEditable]="canEdit">{{ message }}</p>
  `,
})
export class HelloWorldTemplateComponent {
  message = $localize`I am read only!`;
  canEdit = false;
  onEditClick() {
    this.canEdit = !this.canEdit;
    if (this.canEdit) {
      this.message = $localize`You can edit me!`;
    } else {
      this.message = $localize`I am read only!`;
    }
  }
}
