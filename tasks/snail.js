

// const rotateLeft = (matrix) => {
//     const result = [];
//     let temp = [];
//     let bol = true;
//     let i = 0;
//     let j = 0;
  
//     while (bol) {
//       temp.push(matrix[i][j]);
//       i += 1;
  
//       if (matrix.length === i) {
//         i = 0;
//         j += 1;
//         result.unshift(temp);
//         temp = [];
//       }
//       if ((i === 0) && matrix[i].length === j) {
//         bol = false;
//       }
//     }
//     return result;
//   };
  
// const rotateRight = (matrix) => {
//     const result = [];
//     let temp = [];
//     let bol = true;
//     let i = 0;
//     let j = 0;
  
//     while (bol) {
//       temp.unshift(matrix[i][j]);
//       i += 1;
  
//       if (matrix.length === i) {
//         i = 0;
//         j += 1;
//         result.push(temp);
//         temp = [];
//       }
//       if ((i === 0) && matrix[i].length === j) {
//         bol = false;
//       }
//     }
//     return result;
//   };

// const buildSnailPath = (matrix) => {
//     const result = [];
//     let temp =  rotateLeft(matrix);
//     let temp2 = rotateLeft(temp)
//     console.log(temp)
//     console.log(temp2) 
    

//     console.log(result)
// }


// // console.log(buildSnailPath([
// //     [1, 2, 3, 4],
// //       [5, 6, 7, 8],
// //       [9, 10, 11, 12],
// //       [13, 14, 15, 16],
// // ]));

// // [[1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10] 

