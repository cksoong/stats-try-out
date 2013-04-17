var InputManager = function() {
    var _FPS;
    var _canvas;
    var _scene;

    var _mouse = {
        x : 0,
        y : 0,
        press :false
    }
    _keys = [];// physical key states
    K_LEFT = 37;
    K_RIGHT = 39;
    K_UP = 38;
    K_DOWN = 40;
    K_SPACE = 32;

    var COUNT;
    var DELAY_RATE = 2;

    this.init = function(FPS) {
        _canvas = canvas;
        _FPS = FPS;
        COUNT = 0;

        _keys = [];
        for (var i=0; i<255; i++) {
            var newKey = {press : false};
            _keys.push(newKey);
        }

        window.addEventListener('keydown', 	 this.handleKeyDown, true );
        window.addEventListener('keyup', 	 this.handleKeyUp, true );

        // listen for location change event ~ jensen
        document.getElementById('location').onchange = function(){
            simulation.changeLocation();
        };

        /*
        window.addEventListener("mousedown", this.clickInCanvas, true );
        window.addEventListener("mouseup", 	 this.releaseInCanvas, true );
        window.addEventListener("mousemove", this.moveInCanvas, true );*/

    };

    /////////////////////////////////////////////////////////
    // User-Event interface
    this.clickInCanvas = function( e )
    {
        var x = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
        var y = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;

        x -= _canvas.offsetLeft;
        y -= _canvas.offsetTop;

        if( x >= 0 && y >= 0
            && x < _canvas.width
            && y < _canvas.height )
        {
            _mouse.press = true ;
        }
    };

    this.releaseInCanvas = function( e )
    {
        var x = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
        var y = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;

        x -= _canvas.offsetLeft;
        y -= _canvas.offsetTop;

        if( x >= 0 && y >= 0
            && x < _canvas.width
            && y < _canvas.height )
        {
            _mouse.press = false ;
        }
    };

    this.moveInCanvas = function( e )
    {
        var x = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
        var y = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;

        x -= _canvas.offsetLeft;
        y -= _canvas.offsetTop;

        if( x >= 0 && y >= 0
            && x < _canvas.width
            && y < _canvas.height )
        {
            _mouse.x = x ;
            _mouse.y = y ;
        }
    };

    this.handleKeyDown = function( evt )
    {
        //this.keys[evt.keyCode] = this.keys[evt.keyCode];
        //evt.preventDefault();
        _keys[evt.keyCode].press = true;
    };
    this.handleKeyUp = function( evt )
    {
        //this.keys[evt.keyCode] = this.keys[evt.keyCode];
        _keys[evt.keyCode].press = false;
    };

    this.processEntry = function(object) {
        if (_keys[K_LEFT].press) {
            object.move();
        }
        if (_keys[K_RIGHT].press) {
            object.move();
        }
        if (_keys[K_UP].press) {
            object.move();
        }
        if (_keys[K_DOWN].press) {
            object.move();
        }
    }
}
var inputManager = new InputManager();

