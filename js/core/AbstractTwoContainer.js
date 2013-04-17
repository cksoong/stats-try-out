var AbstractTwoContainer = function(){

	this.abstractThreeValue;

	//this.bins = new Array(AbstractTwoBin())
	this.university = null;

	//Array of faculties in both NUS and NTU
	this.faculties = ["engine", "arts", "law"];

	this.statsList = [];

	this.preferenceTypeStats = {
		nerd : 0.3,
		hunk : 0.4,
		talent : 0.3
	}

 
	this.init = function(meanArray, varianceArray){		
		for(var i = 0; i < this.faculties.length; ++i){
			var faculty_mean = meanArray[i];
			var faculty_variance = varianceArray[i];
			var faculty_stats = new AbstractTwoParameters(this.faculties[i],faculty_mean,faculty_variance);
			this.statsList.push(faculty_stats);
		}
	}
}


var AbstractTwoParameters = function(faculty, mean, variance){
	this.faculty = faculty;
	this.mean = mean;
	this.variance = variance;

	//Keep track of the last time Dave is in this faculty
	this.lastSeen = getCurTime();
}