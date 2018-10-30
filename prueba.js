const pegoArray=(arr1,arr2)=> {

    return arr1.concat(arr2);

}  
  
console.log(pegoArray([1,2,3],[5,6,7])) ;

const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const squareList = (arr) => {
    const squaredIntegers = arr.filter( (num) => num > 0 && num % parseInt(num) === 0 ).map( (num) => Math.pow(num, 2) );
    return squaredIntegers;
};
// resultados
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);
