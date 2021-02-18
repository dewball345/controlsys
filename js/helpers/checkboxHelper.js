import {Helper} from './helper.js';

export class CheckboxHelper extends Helper{
    constructor({checkbox, mapKey, tracker, callback}){
        super({element: checkbox, mapKey: mapKey, tracker: tracker, callback: callback});
    }
    onChange(event){
        if(event.currentTarget.checked){
            this.tracker[this.mapKey] = true;
        } else {
            this.tracker[this.mapKey] = false;
        }
    }
}