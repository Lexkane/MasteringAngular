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
    <form #contactForm="ngForm" id="contact-form" novalidate>
    <div> Submited :{{contactForm.submited}}</div>
    <fieldset #adressGroup="ngModelGroup" ngModelGroup="adress">
    <div> Adress Group Valid :{{adressGroup.valid}} </div>
      <div>
        <strong *ngIf=streetInput.invalid && streetInput.touched> >* </strong>
         <input type="text #streetInput ="ngModel" [(ngModel)]="street" name="streetInput" required>
          <strong>*</strong>

         Street is required
         </span>
       </div>
       </fieldset>
       <button type="submit">Submit</button>
     </form>
    `
})
export class AppComponent {

    public message: string = "";

}
