import{Pipe,PipeTransform} from"@angular/core";

@Pipe({
  name:"capitalize",
  //pure:false,
})

export class CapitalizePipe implements PipeTransfrom{
  public transform(value:any){
    console.log("calling transform");
    const strValue=String(value);
    return strValue.charAt(0).toUperCase()+strValue.slice(1);
  }
}
