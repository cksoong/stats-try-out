var AbstractThreeContainer = function(){

	this.universities = ["NUS", "NTU"];

	this.universityStats = ["",""];

	//???
	this.preferenceTypeModifier = [1.0, 1.0, 1.0]
	this.timeOutOfUniversity;

	this.globalTimer;

	this.updatePreference = function(){

		//Purpose: Loop through all events every 999 seconds = 16 minutes
		//Get the last three digits of the time (22334) - time keeps increasing in seconds
		var the_number = getCurTime().toString();
		var temp_end_index = the_number.length;
		var temp_beginning_index = temp_end_index-3;

		//Ranges from 000 - 999 
		var thousand_sec_cycle = the_number.substring( temp_beginning_index , temp_end_index );

		//As long as it is within the cycle
		if(this.globalTimer < 995){
			this.globalTimer = thousand_sec_cycle;
		}else{
			this.globalTimer = 0;
		}
		
		/*************
			Events
		**************/

		//Exam week
		if(this.globalTimer > 200 && this.globalTimer<500){
		 	this.preferenceTypeModifier = [1.5, 0.7, 0.7];
		}
		//Sports Week
		else if(this.globalTimer > 500 && this.globalTimer < 700){
			this.preferenceTypeModifier = [0.6, 1.5, 0.7];
		}
		//V day (Talent)
		else if(this.globalTimer > 700){
			this.preferenceTypeModifier = [0.6, 0.6, 1.5];
		}

		
	}
	this.update = function(statsMeanArray, statsVarArray, university ){

		//order of array is
		//faculty_MeanStats[engin, arts, law]
		var i = this.universities.indexOf(university);
		var faculty_MeanStats = statsMeanArray;
		var faculty_VarStats = statsVarArray;
		var avgMean;
		var avgVar;

		var totalMean = 0;
		var totalVar = 0;


		for(var j =0; j<faculty_MeanStats.length; ++j){
			totalMean += faculty_MeanStats[j];
			totalVar += faculty_VarStats[j];
		}


		avgMean = totalMean / faculty_MeanStats.length;
		avgVar = totalVar / faculty_VarStats.length;

		var parameters = new AbstractThreeParameters(university, statsMeanArray, statsVarArray, avgMean, avgVar);
		this.universityStats[i] = parameters;
	}
}

var AbstractThreeParameters = function(university, facultyMeanStats, facultyVarStats, averageDaveReputationMean, averageDaveReputationVariance){
	this.university = university;
	//arrays of means [engine, arts, law]
	this.facultyMeanStats = facultyMeanStats;
	this.facultyVarStats = facultyVarStats;
	this.averageDaveReputationMean = averageDaveReputationMean;
	this.averageDaveReputationVariance = averageDaveReputationVariance;

	//the last time Dave is seen in the university
	this.lastSeen = getCurTime();

}


