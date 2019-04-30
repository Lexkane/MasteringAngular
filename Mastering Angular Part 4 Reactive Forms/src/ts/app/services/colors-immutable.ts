import { Injectable } from '@angular/core';
import { Logger } from './logger';
@Injectable()
export class ColorsImmutable {
	private colorList: string[] = [];

	constructor(private logger: Logger) {}
	public getAll() {
		return this.colorList;
	}
	public addColor(color: string) {
		this.logger.log('added color to the List immutably' + color);
		this.colorList.concat(color);
	}
}
