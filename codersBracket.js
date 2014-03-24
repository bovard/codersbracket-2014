var statsBracket = {};

// 1 vs 1st ... 16 vs 16 is .50 
for (var i = 1; i <= 16; i++) {
	statsBracket[i] = {};
	statsBracket[i][i] = .5;
}

// pull these from 	http://statistics.about.com/od/Applications/a/March-Madness-Statistics.htm
statsBracket[1][16] = 1;
statsBracket[2][15] = .96;
statsBracket[3][14] = .85;
statsBracket[4][13] = .79;
statsBracket[5][12] = .67;
statsBracket[6][11] = .67;
statsBracket[7][10] = .6;
statsBracket[8][9] = .47;


// generate these from the above stats
function getStatsForPosition(seedOne, seedTwo) {
	// make sure seedOnce <= seedTwo
	if (seedOne > seedTwo) {
		var temp = seedOne;
		seedOne = seedTwo;
		seedTwo = temp;	
	}

	if (statsBracket[seedOne][seedTwo]) {
		return statsBracket[seedOne][seedTwo];
	} else if (seedOne + seedTwo > 17) {
		return (getStatsForPosition(seedOne - 1, seedTwo) + getStatsForPosition(seedOne, seedTwo - 1)) / 2;
	} else {
		return (getStatsForPosition(seedOne + 1, seedTwo) + getStatsForPosition(seedOne, seedTwo + 1)) / 2;
	}

}

