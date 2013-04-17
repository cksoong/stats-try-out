
var universityLeagues = function(){

	//How 
	this.primaryPreferenceIndex_distribution = function(){

	}

}

var University = function(university){

	//this.bins = new Array(AbstractTwoBin())
	this.name = university;

	
	//create faculties
	this.init = function(){
		this.artFaculty = new Faculty('ARTS', university);
		this.engineFaculty = new Faculty('ENGINE', university);
		this.lawFaculty = new Faculty('LAW', university);

	}

	//How traffic flows between faculties in a university
	this.trafficFlow = function(){

	}

	//


}

var Faculty = function(faculty, university){

	this.name = faculty; //denoting which faculty
	this.uni = university;
	//this.distribution = new NormalDistribution();

	this.population = function(){

		this.nusEngineStudents = 0.7;
		this.nusArtsStudents = 0.15;
		this.nusLawStudents = ;
		this.ntuEngineStudents = 0.7;
		this.ntuArtsStudents = ;
		this.ntuLawStudents = ;
	}

	// Distributions
	this.daveReputation_distribution = function(){

	}

	this.primaryTypeIndex_distribution = function(){

	}

	this.primaryPreferenceIndex_distribution = function(){

	}

}

//AbstractionTwo 


