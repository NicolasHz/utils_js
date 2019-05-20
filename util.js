  swap(arr) {
	// dont forget to create a copy of the array before if you dont want sideEffects
	  [arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]];
	  return arr;
  }
  shiftOne(arr, direction) {
	// dont forget to create a copy of the array before if you dont want sideEffects
	  direction > 0 ? arr.unshift(arr.pop()) : arr.push(arr.shift());
	  return arr;
  }

function findMostReaptedWord(str){
    let counts = {}, mr=[];

    str.slice().match(/\w+/g).forEach(w => { counts[w]=(counts[w]||0)+1 });
    const higger = Math.max.apply(null, Object.values(counts));
    for (let w in counts) {
      if (counts[w] === higger) {
		mr = [...mr, {word: w, times:  counts[w]}]      
      }
    }
    return mr;
 /*
findMostReaptedWord(`Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Integer ultrices turpis leo, quis vulputate metus cursus sed. Nullam facilisis lacus sit amet fermentum rutrum. 
Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi lacinia arcu vel quam dignissim gravida. 
Etiam sed metus sit amet enim pulvinar suscipit. Pellentesque dignissim massa nec luctus volutpat. 
Mauris ornare eget nisl ac dictum. Nullam laoreet posuere cursus. Nulla non metus sit amet erat fermentum volutpat ut at tellus.`)
Outputs [{word: "sit", times: 4},{word: "amet", times: 4}]
*/
}
