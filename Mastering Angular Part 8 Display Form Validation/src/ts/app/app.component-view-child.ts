import { Component,ViewChild,AfterViewInit,ViewChildren } from "@angular/core";
import {NgForm,NgModelGroup,NgModel} from "@angular/forms";

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
    <form  id="contact-form" novalidate>
    <div> Submited : {{contactForm.submited}}</div>
    <fieldset #adressGroup="ngModelGroup" ngModelGroup="adress">
    <div> Adress Group Valid :{{adressGroup.valid}} </div>
        <div>
          <strong *ngIf=streetInput.invalid && streetInput.touched> >* </strong>
          <label for="street-input">Street</label>
   <input type="text" id="street-input" #streetInput ="ngModel"
    [(ngModel)]="street" name="streetInput" required>
            <strong>*</strong>
          <span *ngIf="streetInput.invalid && streetInput.touched">
            Street is required
           </span>
         </div>
         <div>
         <label for="city-input">City</label>
           <strong *ngIf=streetInput.invalid && streetInput.touched> >* </strong>
            <input type="text id=city-input #cityInput ="ngModel" [(ngModel)]="city" name="cityInput" required>
             <strong>*</strong>
             <span *ngIf="cityInput.invalid && cityInput.touched">
               City is required
            </span>
          </div>
       </fieldset>
       <button type="submit">Submit</button>
     </form>
    `,
})
export class AppComponent implements AfterViewInit {

    public message: string = "";
    @ViewChild(NgForm)
    public contactForm:NgForm;

    @ViewChildren(NgModel){
      public contactControls: QueryList<NgModel>;

      public ngAfterViewInit(){
        console.log(this.contactForm);
        console.log(this.contactControls);
      }




}
