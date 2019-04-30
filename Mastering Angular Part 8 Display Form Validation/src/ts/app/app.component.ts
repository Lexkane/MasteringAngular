import { Component,ViewChild,AfterViewInit,ViewChildren,QueryList } from "@angular/core";
import {NgForm,NgModelGroup,NgModel,FormGroup,FormControl,Validators} from "@angular/forms";

@Component({
    selector: "main",
    template:`
    template:`
    <div>
    <form  id="contact-form" novalidate>
    <div> Submited : {{contactForm.submited}}</div>
    <fieldset #adressGroup="ngModelGroup" ngModelGroup="adress">
    <legend>Adress</legend>
      <details *ngIf="adressGroup.invalid">
        <summary>
          Adress is Invalid
          <small>(open for more details)</small>
        </summary>
        <ul>
        <ng-template ngFor let-error [ngForOf]="getGroupErrors(adressGroup)">
          <li *ngIf="error=='streetInput:required'">Street is a required field</li>
          <li *ngIf="error=='cityInput:required'">City is a required field</li>
        </ng-template>
        </ul>
      </details>
      <section>
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
          </section>
       </fieldset>
       <button type="submit" *ngIf="!contactForm.invalid">Submit</button>
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

public getGroupErrors(fg:NgModelGroup | FormGroup ){
  if (!fg){return [];}
  if (fg instanceof NgModelGroup && !fg.control){
    return [];
  }
  const controls=fg instanceof NgModelGroup ? fg.control.controls:fg.controls;

  return [].concat(Object.keys(controls)
          .filter((controlKey)=> controls[controlKey].errors)
          .map((controlKey)=>[controlKey,Object.keys(controls[controlKey].errors) ])
          .map(([controlKey,errorKeys]:[string,string[]] )=>
          .errorKeys.map((errorKey)=>controlKey+":"+errorKey)));
        }
}
