class Attraction {
    constructor(id, name, price, openingDays, childAccessLimited){
        this.id = id;
        this.name = name;
        this.price = price;
        this.openingDays = openingDays;
        this.childAccessLimited = childAccessLimited;
    }
    toString(){
        var daylist = "";
        var access = "does not have";
        if(this.childAccessLimited){
            access = "has";
        }
        this.openingDays.array.forEach(day => {
            daylist += day + " ";
        });
        return this.name + "(id: " + this.id + ") is open " + daylist + "and " + access + "limited access for children";
    }
}

export default Attraction;