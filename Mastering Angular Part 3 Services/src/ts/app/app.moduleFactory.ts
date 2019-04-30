import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import {Logger,SimpleLogger} from "./services/logger";
import {ColorsMutable} from"./services/colors";
import{ColorsImmutable} from "./services/color-immutable";
import {Colors} from"./services/colors";

import "../../scss/styles.scss";

const useImmutable=true;

const colorsFactory=(logger:Logger) => {
  if(useImmutable){
    return new ColorsImmutable(logger);
  } else {
    return new Colors(logger);

  }
}

@NgModule({
    imports: [ BrowserModule ],
    declarations: [ AppComponent ],
    bootstrap: [ AppComponent ],
    providers:[
      {provide:Logger,useValue:simpleLogger },
      { provide:Colors,useFactory: colorsFactory,deps:[Logger] },
     ],
})
export class AppModule { }
