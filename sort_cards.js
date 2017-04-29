// 1. Take user input
// 2. d == diamonds, s == spaces, c == clubs, h == hearts (sort in this order d,s,c,h)
// 3. J = Jack (10), Q = Queen (10), K = King (10), A = Ace (11)
// 4. If we have a Jack, Queen, King, or Ace with any suit  -  Jack = 20, Queem = 40, King = 60, Ace = 80
// 5. String to array input by comma
// 6. Seperate by suits into individual arrays
// 7. For each item in our pushed array we need to look at first our suits and run quick sort on the values
// 8. Now that we have suits sorted into seperate arrays and values sorted within those arrays we can build a new string by interating each item

var input = prompt("Please give me a string!")
var input = "3c,Js,2d,10h,Kh,8s,Ac,4h"
var inputArray = input.split(",");


var diamonds =[];
var spades =[];
var clubs =[];
var hearts =[];
for (var i = 0; i < inputArray.length; i++){
	var numVal, suit
	if (inputArray[i].length == 3){
		thisSuit = inputArray[i][2]
		numVal = inputArray[i][0] + inputArray[i][1]
		if (thisSuit == 'd'){
       		diamonds.push({suit:thisSuit,number:parseInt(numVal),value:thisSuit.charCodeAt()})
     	}
	    if (thisSuit == 's'){
	       spades.push({suit:thisSuit,number:parseInt(numVal),value:thisSuit.charCodeAt()})
	     }
	    if (thisSuit == 'c'){
	       clubs.push({suit:thisSuit,number:parseInt(numVal),value:thisSuit.charCodeAt()})
	     }
	    if (thisSuit == 'h'){
	       hearts.push({suit:thisSuit,number:parseInt(numVal),value:thisSuit.charCodeAt()})
	     }
	}
	else {
		thisSuit = inputArray[i][1]
		if (inputArray[i][0] == 'J'){
			numVal = 20
		}
		else if (inputArray[i][0]=='Q'){
      		numVal = 40 
	    }
	    else if (inputArray[i][0]=='K'){
	      	numVal = 60
	    }
	    else if (inputArray[i][0]=='A'){
	      	numVal = 80
	    }
		else {
			numVal = inputArray[i][0]
		}
		if (thisSuit == 'd'){
			diamonds.push({suit:thisSuit,number:parseInt(numVal),value:thisSuit.charCodeAt()})
		}
	    if (thisSuit == 's'){
	    	spades.push({suit:thisSuit,number:parseInt(numVal),value:thisSuit.charCodeAt()})
	    }
	    if (thisSuit == 'c'){
	    	clubs.push({suit:thisSuit,number:parseInt(numVal),value:thisSuit.charCodeAt()})
	     }
	    if (thisSuit == 'h'){
	    	hearts.push({suit:thisSuit,number:parseInt(numVal),value:thisSuit.charCodeAt()})
	    }
	}
}




var masterArray = [diamonds,spades,clubs,hearts]
// var objArray = [{suit:'d',number:2,'value':100},{suit:'c',number:4,'value':238},{suit:'s',number:30,'value':236},{suit:'h',number:30,'value':336}]


function swap(array, i, j){
	var temp = array[i];
	array[i] = array[j];
	array[j] = temp;
}

function quicksort(array, left, right){
	left = left || 0;
	right = right || array.length - 1;

	// var pivot = partitionLomuto(array, left, right); 
	// we can play with both partition (but in this case, I choose to go with partitionHoare for it's efficient benefit!!!)
	var pivot = partitionHoare(array, left, right); // this allow us to play with both partition

	if (left < pivot - 1){
		quicksort(array, left, pivot - 1);
	}
	if (right > pivot){
		quicksort(array, pivot, right);
	}
	return array;
}


function partitionHoare(array, left, right){
	var pivot = Math.floor((left+right) / 2);   

	while (left < right){
		while (array[left].number < array[pivot].number){
			left++;
		}
		while (array[right].number > array[pivot].number){
			right--;
		}
		if (left <= right){
			swap (array, left, right);
			left++;
			right--;
		}
	}
	return left;
}




var newString =" ";

function buildString(array){
	for (var x in array){
		console.log(array[x].number)
		if (array[x].number == 20){
			useNumber = "J"
		}
		else if (array[x].number == 40){
			useNumber = "Q"
		}
		else if (array[x].number == 60){
	      useNumber = "K"
	    }
	     else if (array[x].number == 80){
	      useNumber = "A"
	    }
	    else {
	      useNumber = array[x].number
	    }
	    newString += useNumber + array[x].suit + ","
	}
}

for (j in masterArray){
	quicksort(masterArray[j], 0, masterArray[j].length - 1)
	buildString(masterArray[j])
}


console.log(newString.substring(0, newString.length - 1));

















































