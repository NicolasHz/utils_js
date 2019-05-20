  swap(arr) {
    [arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]];
    return arr;
  }
  shiftOne(arr, direction) {
    // dont forget to create a copy of the array before if you dont want sideEffects
    direction > 0 ? arr.unshift(arr.pop()) : arr.push(arr.shift())
  }

function findMostReaptedWord(str){
    let counts = {}, mr=[];

    str.slice().match(/\w+/g).forEach(w => { counts[w]=(counts[w]||0)+1 });
    for (let w in counts) {
      if (counts[w] === Math.max.apply(null, Object.values(counts))) {
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
