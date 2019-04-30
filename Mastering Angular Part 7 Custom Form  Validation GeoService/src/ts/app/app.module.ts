import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent,GeocodingValidatorDirective } from "./app.component";

import "../../scss/styles.scss";

@NgModule({
    imports: [ BrowserModule,FormsModule,ReactiveFormsModule,HttpModule],
    declarations: [ AppComponent,GeocodingValidatorDirective ],
    bootstrap: [ AppComponent,Books,{provide:STATES,useValue:states} ],
})
export class AppModule { }
