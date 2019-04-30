import { Component } from "@angular/core";

@Component({
    selector: "main",
    template: require("./app.component.html"),
    styles:[require('./app.component.scss')],
})
export class AppComponent {

    public header: string = "Hello World!";
    public colors :string[]=[
      "red","white","green","orange","blue",
    ];

    public newColor string="";

    public addColor(){
        this.colors.push(this.Colors);
        this.newColor="";
    }

}
