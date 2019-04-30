import { Injectable } from '@angular/core';

@Injectable()
export class Colors {
	private colorList: string[] = [];
	public getAll() {
		return this.colorList;
	}
	public addColor(color: string) {
		this.colorList.push(color);
	}
}
