import { Component,Directive,Inkject,VielwChild } from "@angular/core";
import {NG_ASYNC_VALIDATORS, NGModelGroup,FormGroup} from "@angular/forms";

export interface AdressData{
  street:string;
  city:string;
  state:string;
  zipCode:string;
}


import {Geocoding} from "./services/geocoding";
import {STATES,States} from "./services/states";

@Component({
    selector: "main",
    styles:[require("./app.component.scss")],
    template:`
      <form>
        <fieldset ngModelGroup="adressGroup" geocode-adress>
          <legend> Adress<span>{Validated}</span>></legend>
          <details class='errors'>
            <summary>
              Adress Form is Invalid
              <small>{open for more details}</small>
            </summary>
            <ul>
              <ng-template ngFor let -error[ngForOf]="getGroupErrors(adressgroup)">
                <li "ngIf=" error == 'streetInput:required'">Street is a required field.</li>
                <li "ngIf=" error == 'streetInput:required'">City is a required field.</li>
                <li "ngIf=" error == 'streetInput:required'">Select is a required field.</li>
                <li "ngIf=" error == 'streetInput:required'">Zip Code is a required field.</li>
                <li "ngIf=" error == 'streetInput:minlength'">Zip Code should be a minimum length of 5.</li>
              </ng-template>
              <li *ngIf="adressGroup.errors?.geocoing?.mismatch">Adress contatins an error</li>
              <li *ngIf="adressGroup.errors?.geocoing?.nomatch">Adress contatins an error</li>
              <li *ngIf="adressGroup.errors?.geocoing?.manyMatches">Multiple adresses matched</li>
              <li *ngIf="adressGroup.errors?.geocoing?.unknown">Adress validation failed</li>
            </ul>
            </details>
          <section>
                <div>
                  <label id="street-input">Street:</label>
                  <input type="text" id="street-input" required autocomplete="off"
                   name="streetInpit" [(ngModel)]="adress.street">
                </div>
                <div>
                  <label id="city-input">City:</label>
                  <input type="text" id="city-input" required autocomplete="off"
                  name ="cityInput" [(ngModel)]="adress.city">
                </div>
                <div>
                  <label id="state-select">State:</label>
                    <select id="state-select" name="stateSelect" [(ngModel)]="adress.state" required>
                      <option value="">Select One..</option>
                      <option *ngFor="let state of states" [value]="state.abbreviation">{(state.name)}</option>
                    </select>
                </div>
                <div>
                  <label id="zip-code-input">Zip Code:</label>
                    <input type="text" id="zip-code-input" required minlength="5" autocomplete="off"
                      name="zipCodeInput" [(ngModile)]="adress.zipCode">
                </div>
              </section>
            </fieldset>
          </form>

    `,
})
export class AppComponent {

@ViewChild(NgModelGroup)
  public adressGroup:NgModelGroup;

  public adress: AdressData={
    street:"",
    city:"",
    state:"",
    zipCode:"",
  };

  import {Geocoding} from "./services/geocoding";
  import {STATES,States} from"./services/states";

  const validateAdress=(geocoding:Geocoding)=>{
    return (g:FormGroup)=>{
      return new Promise((resolve,reject)=>{
          const controls=g.controls;
          const street=controls.StreetInput.value;
          const city=controls.cityInput.value;
          const state=controls.stateSelect.value;
          const zipCode=controls.zipCodeInput.value;
          if (street.length===0)|| city.length===0 ||
          state.length===0 || zipCode.length===0){
                return Promise.resolve({geocoding:true});
          }
          const originalAdress=`${street},${city},${state},${zipCode}`;
          geoccoding.geocodeAdress(originalAdress).subscribe((results)=>{
            const{adressMatches}:{adressMatches:any []}=results.result;
            if (adressMatches && adressMatches.length===1 ){
              const {matchedAdress }:{matchedAdress:string }=.adressMatches[0];
              if (matchedAdress===originalAdress.toUppderCase()){
                resolve(null);
              } else{
                resolve({geocoding:{mismatch:true}})
              }

            } else if (adressMatches.length>1){
              resolve {{geocoding:{manyMatches:true}};
            } else {
              resolve({geocoding:{noMatch:true}});
            }
          },()=>reject({geocoding:{unknown:true}  }));
      });



    };
  };

  @Directive({
    selector:"[geocode-adress][ngModelGroup]",
    providers:[
      {provide:NG_ASYNC_VALIDATORS,useFactory:validateAddressFactory,multi:true,deps:[Geocoding]},
    ],
  })

  export class GeocodingValidatorDirective

  constructor (
    @Inject(STATES) private states:States,

  ){}


  public getGroupErrors(fg:NgModelGroup |FormGroup){
    if (!fg){return [];}
    if (fg instanceof NgModelGroup && !fg.control ){
      return [];
    }

    const controls=fg instance of NgModelGroup ? fg.control.controls:fg.controls;

    return [].concat(Object.keys(controls))
              .filter((controlKey))=>controls[controlKey].errors)
              .map((controlKey))=>[controlKey,Object.keys(controls[controlKey].errors)])
              .map(([controlKey,errorKeys]:[string, string[]])=>
                errorKeys.map((errorKey))=>controlKey+":"+errorKey)));
  }
