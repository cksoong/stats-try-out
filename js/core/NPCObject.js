var NPCObj = function(id, destinationFaculty, category, gender, daveRep, preferenceType, primaryTypeIndex) {
    this.id = id;
    this.name = gender+"_"+id;
    this.pos_x = Math.floor(Math.random()*24) * 32 + 32;
    this.pos_y = Math.floor(Math.random()*17) * 32 + 32;
	this.image = new Image();
	this.whichSprite = 0;
	this.facingWhichDirection;
	this.isMoving = true;
	this.npcSpeed = 4;
	this.width = 32;
	this.target_x = this.pos_x;
	this.target_y = this.pos_y;
	this.wait_time = 0;
	this.interaction = false;
	this.interactionTarget = this;
	this.interactionReached = false;
	this.interactionTime = 0;
	this.leftAtTime = getCurTime();
	this.destFaculty = "nothing";

    this.category = category;
    this.gender = gender;
    this.university;

    this.abstractionModifier;


    this.daveReputation = daveRep;

    //to keep track of movement within university
    this.currUniversity;
    this.currFaculty = destinationFaculty;

    //distribution curve for preferenceType AND
    // primaryType

    // 0 - 0.3: Nerd
    // 0.3 - 0.7: Talent
    // 0.7-1.0: Hunk

    //tag the time when NPC leaves faculty
    this.leftAtTime;


    if(this.gender == "male"){
		
        if (this.category === "engine") {

            //this.primaryTypeIndex = 0.3; //want a super nerd
			//setting image source
			if(this.id%2 == 0){
				this.image.src = "images/engin_male1.png";
			}
			else{
				this.image.src = "images/engin_male2.png";
			}

        }
        if (this.category === "arts") {

            //this.primaryType
			//setting image source
			if(this.id%2 == 0){
				this.image.src = "images/arts_male1.png";
			}
			else{
				this.image.src = "images/arts_male2.png";
			}
          
          
        }
        if (this.category === "law") {
			//setting image source
			if(this.id%2 == 0){
				this.image.src = "images/law_male1.png";
			}
			else{
				this.image.src = "images/law_male2.png";
			}
        }

            this.primaryTypeIndex = primaryTypeIndex;
            this.primaryType;
            this.primaryTypeScore;
    }

    if(this.gender == "female"){

        //this.primaryPreferenceIndex = 0.5;
        this.preferenceType = preferenceType;

        // each interaction, girl goes into guy this.primaryTypeScore, and updates primaryPreferenceScore
        this.primaryPreference_best;

        this.laidWithDave = false;
		
		if (this.category === "engine") {
			//setting image source
			if(this.id%2 == 0){
				this.image.src = "images/engin_female1.png";
			}
			else{
				this.image.src = "images/engin_female2.png";
			}

        }
        if (this.category === "arts") {

            //this.primaryType
			//setting image source
			if(this.id%2 == 0){
				this.image.src = "images/arts_female1.png";
			}
			else{
				this.image.src = "images/arts_female2.png";
			}
          
          
        }
        if (this.category === "law") {
			//setting image source
			if(this.id%2 == 0){
				this.image.src = "images/law_female1.png";
			}
			else{
				this.image.src = "images/law_female2.png";
			}
        }
    }
	
	this.interactionCheck = function(){
		for (iter in toRenderList.NPCList){
			if(toRenderList.NPCList[iter].id != this.id){
				if(collisionChecker(this, toRenderList.NPCList[iter]) &&
					this.interaction == false &&
					toRenderList.NPCList[iter].interaction == false &&
					this.interactionTarget.id != toRenderList.NPCList[iter].id){
					//collided
					npcInteraction(this, toRenderList.NPCList[iter]);
					var tmpArray = influence_btwn_NPCS(this.daveReputation, toRenderList.NPCList[iter].daveReputation);
					//console.log(tmpArray[0] + ", " + tmpArray[1]);
					this.daveReputation = tmpArray[0];
					toRenderList.NPCList[iter].daveReputation = tmpArray[1];
				}
			}
		}
	}
	
	npcInteraction = function(npc1, npc2){
		var tmpNPC1;
		var tmpNPC2;
		npc1.interaction = npc2.interaction = true;
		if(npc1.id>npc2.id){
			tmpNPC1 = npc1;
			tmpNPC2 = npc2;
		}
		else{
			tmpNPC1 = npc2;
			tmpNPC2 = npc1;
		}
		//tmpNPC1.isMoving = tmpNPC2.isMoving = false;
		tmpNPC1.isMoving = false;
		tmpNPC2.target_y = tmpNPC1.pos_y;
		if(tmpNPC1.pos_x >= 768){
			tmpNPC2.target_x = tmpNPC1.pos_x - 32;
			tmpNPC1.facingWhichDirection = "left";
			tmpNPC2.facingWhichDirection = "right";
		}
		else{
			tmpNPC2.target_x = tmpNPC1.pos_x + 32;
			tmpNPC2.facingWhichDirection = "left";
			tmpNPC1.facingWhichDirection = "right";
		}
		npc1.interactionTarget = npc2;
		npc2.interactionTarget = npc1;
	}
	
	this.move = function(){
			if(this.isMoving == true && !performingAction){
				//using if else statements to ensure NPC move in one direction only
				//move right
				if (this.pos_x < this.target_x){
					this.pos_x += this.npcSpeed;
					if (this.whichSprite == this.width * 8){
						this.whichSprite = this.width * 9;
					}	else if (this.whichSprite == this.width * 9) {
							this.whichSprite = this.width * 10;
					} else if (this.whichSprite == this.width * 10) {
							this.whichSprite = this.width * 11;
					} else {
							this.whichSprite = this.width * 8;
            }
				}
				//move left
				else if (this.pos_x > this.target_x){
					this.pos_x -= this.npcSpeed;
					if (this.whichSprite == this.width * 4){
						this.whichSprite = this.width * 5;
					}	else if (this.whichSprite == this.width * 5) {
							this.whichSprite = this.width * 6;
					} else if (this.whichSprite == this.width * 6) {
							this.whichSprite = this.width * 7;
					} else {
							this.whichSprite = this.width * 4;
					}
				}
				//move down
				else if (this.pos_y < this.target_y){
					this.pos_y += this.npcSpeed;
					if (this.whichSprite == this.width * 0){
						this.whichSprite = this.width * 1;
					}	else if (this.whichSprite == this.width * 1) {
							this.whichSprite = this.width * 2;
					} else if (this.whichSprite == this.width * 2) {
							this.whichSprite = this.width * 3;
					} else {
							this.whichSprite = this.width * 0;
					}
				}
				//move up
				else if (this.pos_y > this.target_y){
					this.pos_y -= this.npcSpeed;
					if (this.whichSprite == this.width * 12){
						this.whichSprite = this.width * 13;
					}	else if (this.whichSprite == this.width * 13) {
							this.whichSprite = this.width * 14;
					} else if (this.whichSprite == this.width * 14) {
							this.whichSprite = this.width * 15;
					} else {
							this.whichSprite = this.width * 12;
					}		
				}
				//change the target position since NPC has reached its target
				else{
					if (this.interaction == true){
						this.isMoving = false;
						this.interactionReached = true;
					}
					this.wait_time--;
					if(this.wait_time <= 0){
						this.target_x = Math.floor(Math.random()*24) * 32;
						this.target_y = Math.floor(Math.random()*17) * 32;
						this.wait_time = 50;
					}
				}
			}
			//isMoving is false implies interaction
			else{
				switch(this.facingWhichDirection){
					case "up":
						this.whichSprite = this.width * 12;
						break;
					case "down":
						this.whichSprite = this.width * 0;
						break;
					case "left":
						this.whichSprite = this.width * 4;
						break;
					case "right":
						this.whichSprite = this.width * 8;
						break;
				}
				if(this.interactionReached == true){
					//render speech bubble
					var speechImage = new Image();
					speechImage.src = "images/normal_interaction2.png";
					context.drawImage(	speechImage, this.pos_x - 32, this.pos_y - 64);
					if(!performingAction)
						this.interactionTime++;
					if(this.interactionTime >= 50){
						//reset all interaction values
						//alert("a");
						this.interactionReached = false;
						this.isMoving = true;
						this.interaction = false;
						this.interactionTime = 0;
						this.interactionTarget.interactionReached = false;
						this.interactionTarget.isMoving = true;
						this.interactionTarget.interaction = false;
						this.interactionTarget.interactionTime = 0;
						this.wait_time = 0;
						this.interactionTarget.wait_time = 0;
					}
				}
			}
		}
	
    /*
    When Two NPCs meet:
    1. Update this.PrimaryPreferenceScore to the highest one
    2. Have an impact on daveReputation

    */

    

    this.draw = function() {

		context.drawImage(	this.image, this.whichSprite, 0,
							32, 32, this.pos_x,
							this.pos_y, 32, 32);

    }

}

collisionChecker = function(o1, o2){
	if( o2.pos_x > o1.width + o1.pos_x || o1.pos_x > o2.width + o2.pos_x)
		return false;
	if( o2.pos_y > o1.width + o1.pos_y || o1.pos_y > o2.width + o2.pos_y)
		return false;
	return true;
}