import {Helper} from './helper.js';

export class InputHelper extends Helper{
    constructor({element, mapKey, tracker, callback}){
        super({element: element, mapKey: mapKey, tracker: tracker, callback: callback});
    }
    onChange(event){
        this.tracker[this.mapKey] = this.element.value;
    }
}