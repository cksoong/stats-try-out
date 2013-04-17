var Scene = function() {
    // to enforce singleton
    if ( arguments.callee._singletonInstance )
        return arguments.callee._singletonInstance;
    arguments.callee._singletonInstance = this;

    //For map and character images
    var spritesList = [
        {
            name : "abstract1",
            imageSrc : "images/nus_engin.png",
            stage : 0
        },
        {
            name : "abstract2",
            //imageSrc : "assets/img/background/map2.png",
            stage : 1
        }
    ];
}

var sceneDef = new Scene();

Scene.prototype.Player = function(id, x, y){
    this.pos_x = x;
    this.pos_y = y;

    this.category;
    this.fitness = 0.3;
    this.studies = 0.6;
    this.talent = 0.4;
    this.girlsList = [];
    this.laidList = [];

    //other attributes to be added
}

Scene.prototype.Player.prototype.draw = function(context, x, y){
    //Draw sprite on canvas
}

Scene.prototype.NPC = function(id, category, university) {
    this.pos_x = 0;
    this.pos_y = 0;

    this.category = category; //faculty
    this.abstractionModifier;

    if (this.category === "engine") {
        this.fitness = 0.3;
        this.studies = 0.6;
        this.talent = 0.4;
    }
    if (this.category === "arts") {
        this.fitness = 0.6;
        this.studies = 0.3;
        this.talent = 0.5;
    }
    if (this.category === "law") {
        this.fitness = 0.3;
        this.studies = 0.6;
        this.talent = 0.4;
    }

    this.preferences = [];
    this.dateList = [];
    this.secDateList = [];

};

Scene.prototype.NPC.prototype.draw = function(context, x, y) {
    // body...
};



