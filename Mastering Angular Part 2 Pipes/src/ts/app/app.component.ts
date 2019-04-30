import { Component } from "@angular/core";

@Component({
    selector: "main",
    template:  `
      <span> {{message| capitalize}}</span> <br><br>
      <input type="text" [(ngModel)]="message"> <br>
        <input type="text" [(ngModel)]="message2"> <br>
            
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
            </tr>
          </thead>
          <tbody>
            <tr*ngFor="let person of people | startPerson:endPerson " >
              <td>{{person.fn}}
              <td>{{person.ln}}
            </tr>
        </tbody>
      </table>
      <button type="button" (click)="prevPage()">Prev</button>
      <button type="button" (click)="nextPage()">Next</button>
      <div>{{prevButton.parentNode.innerHTML |json}}</div>

    `,
})
export class AppComponent {


public currentPage :number=0;
public pageLength :number=3;

public message:string="hello";
public message2:string="world";

public get startPerson():number{
  return this.currentPage*pageLength;
}

public get endPerson():number{
  return (this.currentPage+1)*pageLength;
}


public people: any[]=[
  {fn:"Jonh",ln:"Smith"},
  {fn:"James",ln:"Smith"},
  {fn:"James",ln:"Thomas"},
  {fn:"Jane",ln:"Doe"},
  {fn:"Tim",ln:"Johnson"},
  {fn:"Abby",ln:"Peters"},
  {fn:"Bob",ln:"Simmons"},
]

public prevPage(){
  if(this.currentPage>0){
    currentPage--;
  }

  public nextPage() {
    let pages=this.people.length/this.pageLength;

    if(this.people.length%this.pageLength)>0;{
      pages++;
    }

    if(this.currentPage<pages){
      this.currentPage++;
    }

}
