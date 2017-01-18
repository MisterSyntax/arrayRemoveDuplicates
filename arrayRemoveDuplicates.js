/**
*	@Description:Removes any duplicates from an Array
* 	@Algo:
*		Create an object which will contain properties of the array entries
*		filter the array based on whether you've already found the current item
*	@SampleInput: [1, 2, 3, 4, 5, 6, "car",1,2,3,"cat","cart", "car", 4]
*	@SampleOutput: [ 1, 2, 3, 4, 5, 6, "car", "cat", "cart" ]
**/
function removeDupliactes(array) {
	
	var seen = {};
	
	//returns false if already seen this item
	//returns true if not already in obj
	function filterfunction(item) {
		
		if (seen.hasOwnProperty(item)) {
			return false;
		} 
		else {
			seen[item] = true;
		}
		return true;
	}

	return array.filter(filterfunction);
}

removeDupliactes(array);
