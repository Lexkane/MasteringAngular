import { Component } from "@angular/core";

@Component({
    selector: "main",
    styles:[
      "div { margin:30px }",
      ".ng.invalid.ng.touched:not(:focus) {border:1px solid red;}",
      ".ng.valid:not(:focus) {border:3px solid:green;}",
      ".ng-untouched~span,focus~span {display:none;}",
      ".ng-valid+span {display:none;}",
      "strong{float:left,color:red;}",
      ".ng-valid+strong, .ng-untouched~strong,:focus ~strong  {display:none;}"
    ]
    template:`
    <div>

     <input type="text [(ngModel)]==message" required>
      <strong>*</strong>
     </div>
     <span>
     Message is required
     </span>
    `
})
export class AppComponent {

    public message: string = "";

}
