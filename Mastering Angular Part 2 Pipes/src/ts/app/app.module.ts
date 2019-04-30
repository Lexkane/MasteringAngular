import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import {FormsModile} from "@angular/forms";
import {CapitalizePipe} from "./pipes/capitalize-pipe";
import "../../scss/styles.scss";

@NgModule({
    imports: [ BrowserModule ],
    declarations: [ AppComponent,CapitalizePipe ],
    bootstrap: [ AppComponent ],
})
export class AppModule { }
