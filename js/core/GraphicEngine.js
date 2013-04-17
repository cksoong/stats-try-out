function GraphicEngine(){
	var _abstract1_canvas = null;
	var _abstract2_canvas = null;

	this.init = function(canvas1, canvas2){
		_abstract1_canvas = canvas1;
		_abstract2_canvas = canvas2;
		
	}

	//render map and characters in this class
	this.render = function(){
		renderUI();

		renderCharacters();

		renderMap();
	}
}
var graphicEngine = new GraphicEngine();