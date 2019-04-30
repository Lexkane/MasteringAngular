import { Component } from "@angular/core";

@Component({
    selector: "main",
    template:  `

          <div>
              <span>{{message |lowercase }}</span><br>
              <span>{{message |currensy:'USD':true '4.2-2' }}</span><br>
              <input type="text" [(ngModel)]="message">
              <div>{{someNumber | number :'2.2-5' }}</div>
              <div>{{someDate | date:'HH:mm:ss'}}</div>
              <div>{{message |currensy:'EUR':true:'1.0-0'}}</div><br>
          </div>
    `,
})
export class AppComponent {

    public message: string = "Hello World!";
    public currency:number=30.50;
    public someNumber:number=3.678345;
    public someDate:Date=new Date();
    public someCurrency:number=34.56;

}
