import { Component,ViewChild,AfterViewInit,ViewChildren } from "@angular/core";
import {FormGroup,FormControl,Validators} from "@angular/forms";

@Component({
    selector: "main",
    template:`
    <div>
    <form ngNoForm id="contact-form" novalidate [formGroup]="contactForm">
        <fieldset formGroupName="adressGroup">
        <div> Adress Group Valid :{{contactForm.controls.adressGroup.valid}} </div>
        <div>
          <strong *ngIf=adressGroup.controlls.streetInput.invalid && adressGroup.controlls.streetInput.touched> >* </strong>
          <label for="street-input">Street</label>
         <input type="text" id="street-input" #streetInput ="ngModel"
          [(ngModel)]="street" name="streetInput"  formControlName="streetInput">
            <strong>*</strong>
          <span *ngIf="adressGroup.controlls.streetInput.invalid && adressGroup.controlls.streetInput.touched">
            Street is required
           </span>
         </div>
         <div>
         <label for="city-input">City</label>
           <strong *ngIf=adressGroup.controlls.streetInput.invalid && adressGroup.controlls.streetInput.touched> >* </strong>
            <input type="text id=city-input #cityInput ="ngModel" [(ngModel)]="city" name="cityInput"
             formControlName="cityInput >
             <strong>*</strong>
             <span *ngIf="adressGroup.controlls.cityInput.invalid && adressGroup.controlls.cityInput.touched">
               City is required
            </span>
          </div>
       </fieldset>
       <button type="submit">Submit</button>
     </form>
    `,
})
export class AppComponent implements AfterViewInit {
  public adressGroup = new FormGroup({
    streetInput: new FormControl("",Validators.required),
    cityInput: new FormControl("",Validators.required),
  })
public contactForm= new FormGroup({
      adressGroup:this.adressGroup,
})


}
