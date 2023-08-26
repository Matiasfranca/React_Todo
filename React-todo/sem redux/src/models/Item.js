class Item{

    static lastId = 0;

    constructor(text){
        this._id = Item.lastId++;
        this.text = text;
        this.done = false;
    }

}

export default Item;