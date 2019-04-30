import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Colors } from './services/colors';
import { ColorsImmutable } from './services/colors-immutable';
import { Logger } from './services/logger';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControl } from '@angular/forms';
import '../../scss/styles.scss';

@Component({
	selector: "main",
	template: `<div> 
	<label form "first name linput">FIrst Name </label>
	<input type ="text" id="first-name-input"[formControll]="FirstNameInput">
	<br>
	</div>`
}

public FirstNameInput: FormControl = new FormControl('');
@NgModule({
	imports: [ BrowserModule ],
	declarations: [ AppComponent ],
	bootstrap: [ AppComponent ],
	providers: [
		{ provide: Logger, useValue: simpleLogger },
		{ provide: Colors, useFactory: colorsFactory, deps: [ Logger ] }
	]
})
export class AppModule {}
