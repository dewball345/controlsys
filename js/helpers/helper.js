export class Helper{
    constructor({element, mapKey, tracker, callback}){
        this.element = element;
        this.mapKey = mapKey;
        this.tracker = tracker;
        this.callback = callback;
        this.main();

    }
    main(){
        this.element.addEventListener('change', (event) => {
            this.onChange(event);
            this.callback(event);
        })
    }

    onChange(event){

    }

    terminate(){
        this.element.removeEventListener('change');
    }
}