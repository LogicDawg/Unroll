
function unroll(matrix) {
    const arr = [];
      
    while (matrix.length) {
      arr.push(
        ...matrix.shift(),
        ...matrix.map(a => a.pop()),
        ...(matrix.pop() || []).reverse(),
        ...matrix.map(a => a.shift()).reverse()
      );
    }
    return arr;
  }

    



module.exports = unroll;


// function run(input, result) {
//     if (input.length == 0) {
//         return result;
//     }

//     // add the first row to result
//     result = result.concat(input.shift());

//     // add the last element of each remaining row
//     input.forEach(function(rightEnd) {
//         result.push(rightEnd.pop());
//     });

//     // add the last row in reverse order
//     result = result.concat(input.pop().reverse());

//     // add the first element in each remaining row (going upwards)
//     var tmp = [];
//     input.forEach(function(leftEnd) {    
//         tmp.push(leftEnd.shift());
//     });
//     result = result.concat(tmp.reverse());

//     return run(input, result);
// }

// var result = run(input, []);

// console.log('result', result);