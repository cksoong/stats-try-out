/*
		Assume Dave starts in NUSEngin

		Global Sequence
		================
		[engin, art, law]
		[nerd, hunk, talent]

		// At any point of time, we are holding this (global)
		NPC_CurrentFaculty = [ guyObject, girlObject ];

		inFlightList[ guyObject, girlObject];
			
		otherFaculty_1_stats = [ mean, variance ];

		otherFaculty_2_stats = [ mean, variance ];

		currentFaculty_stats = [ mean, variance ];

		// Abstract 3 List (extra info)
		otherUniversity = [ mean, variance ];

		
		X: Perform an action, or goes to NTU - Compression Abstract 1
		========================================================
		// Within Faculty - compressLevelOne()
		1. Go through all NPCs in NUSEngin, get daveReputation, update currentFaculty_stats.

		
		// Other Faculties  - compressLevelOne()
		2. Get NUSArts stats, create and populate daveReputationList_NUSArts[ ].
		3. Go through inflighttoNUSArts object, extract daveReputation, and timeNPCLeaves
		4. function spreadingEffect(daveReputation_inflight, timeNPCLeaves) {
	
			// assume 5 units of time has passed since NPC left
			// average out with 5 daveReputation values (based on some intelligence)

		}
		4. Recompute NUSArts stats (otherFaculty_1_stats)
		5. do the same for NUSLaw (otherFaculty_2_stats)


		Y: Goes to NUSEngin from NUSArts (change faculty)  
		=========================================
			1:Compress NUSEngin + All other Faculties - compressLevelOne()
			==========================
			Step X

			2: Decompress NUSArts - decompressAbstractTwo()
			==================
			1. Use NUSArts stats(mean, variance), other info, create NPCs

			// Populate NPC Girls
			2. Use preferenceType percentage (0.2 nerd, 0.5 talent, 0.3 hunk) at AbstractThree to assign the number of NPC girls who has a specific preferenceType

			note: preferenceType works with percentage of population.
			for example:
			- 0.2 of population is nerd
			- 0.5 is talent
			- 0.3 is hunk
			note: when exam time happens, we change accordingly
			- 0.3 nerd
			- 0.5 talent
			- 0.2 hunk

			// Populate NPC Guys
			3. Use probability to assign primaryTypeIndex to guys(0.1 is a lousy nerd, while 0.3 is a good nerd).

			0 - 0.3: Nerd
			0.4-0.7: Hunk
			0.8-1.0: Talent


		Z: Goes to NTUEngin 
		==========================================
			Compress AbstractTwo Stats (NUS)
			=================================
			1. Perform all steps in X (compress every faculty in NUS and take individual faculty stats), store it as it is
			2. Take average daveReputation of three faculties

			Decompress AbstractThree Stats (NTU)
			==================================

			1. function changeUni(NTU_stats){
				
				//NTU_stats is [NTUEngin_stats, NTUArts_stats, NTULaw_stats]

				function spreadingEffectLevel3(NTU_stats) {
					
					1. Time for daveReputation to spread within NTU
					- take average of NTU stats
					- if negative, or positive, will go into individual faculties and modify accordingly (to time) - need withinUni variable

					2. SpreadingEffect from NUS
					- take average daveReputation from all 3 faculties from NUS
					- if negative, or positive, will go into individual faculties in NTU and modify accordingly (to time) - need withinUni variable, but at a LESSER extent - assume traffic flow (constant)
				}

				function eventsEffectLevel3() {

					at time 300_seconds: Exam(nerd) {
						

					}
					600_seconds: sports day(hunk)

					900_seconds: music festival(talent)


					//change preferenceType (see Y.2)
				}
			}

			2. Decompress NTUEngin stats (Y.2:)





