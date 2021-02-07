module.exports = function towelSort (matrix) {
  let arr = [];
  let tempArr = [];
  if(matrix == undefined){
    return [];
  }
    for (let i = 1; i < matrix.length+1; i++){
      if(i % 2 != 0){
        for (key in matrix[i-1] ){
          arr.push(matrix[i-1][key]);
        }
      }else{
        for (key in matrix[i-1] ){
          tempArr.push(matrix[i-1][key]);
        }
        tempArr.reverse();
        for (key in matrix[i-1] ){
          arr.push(tempArr[key]);
        }
        tempArr = [];
      }
    }
    return arr;
}