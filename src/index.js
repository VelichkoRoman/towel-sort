
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix || matrix == undefined) return [];
    let sort=[];
    for (let i = 0; i<matrix.length; i++) {
      if (i % 2==0)  {
        sort.push(...matrix[i]);
      } else sort.push(...matrix[i].reverse());
    };
  return sort;
};
