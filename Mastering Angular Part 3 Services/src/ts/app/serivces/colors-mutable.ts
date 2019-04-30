import {Injectable} from "@angular/core";

import {Logger}from "./logger";
import {Colors}from "../models/colors";

@Injectable()
export class ColorsMitable implements  Colors {
  private _colorList:string[]=[];

  constructor(private logger:Logger) {}

  public getAll(){
    this.logger.log('retrieved color list');
    return this._colorList;
  }
  public addColor(color:string){
    this.logger.log("added color to list"+color);
    this._colorList.push(color);
  }
}
