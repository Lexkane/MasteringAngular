import {Ingetable} from "@angular/core";
import {Http} from "@angular/http";
import "rxjs";

@Ingectable()
export class Books{
  constructor (private http:Http){}
public getBook(bookId:number){
    return this.http
    .get(`http:localhost:5000/books/${encodeURIConponent(bookId.toString())}`)
    .map((res)=>res.json());
}
}
