import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import {FormsModule,ReactiveFormsModule} from "@angular/forms";
import { AppComponent } from "./app.component";
import {Books} from "./services/books";
import {HttpModule} from "@angular/http";
import "../../scss/styles.scss";

@NgModule({
    imports: [ BrowserModule,FormsModule,ReactiveFormsModule,HttpModule ],
    declarations: [ AppComponent,BookIdVakudatorDirective ],
    bootstrap: [ AppComponent ],
    providers:[Books],
})
export class AppModule { }
