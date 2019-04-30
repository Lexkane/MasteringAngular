import {Injectable} from "@angular/core";
import {Http} from "@angular/http";

import "rxjs";

@Injectable()

export class Geocoding{

  private baseUrl="/geocoder/locations/onlineadress";
  private benchmarkParam="Public_AR_Current";
  private formatParam="json"
}

constructor (private http:Http){}

public geocodeAdress(address:string){
  let url=`${this.baseUrl}?adress=${encodeURIComponent(adress)}`;
  url+=`&benchmark=${this.benchmarkParam}&format=${this.formatParam}`;

  return this.http.get(url).map((res)=> res.json());

}

}
