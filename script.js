// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//
// const checkSum = (array) => {
//     let sum = 0;
//     for (let index = 0; index < array.length; index++){
//         sum += array[index]
//     }
//     return sum;
// }
//
// console.log(checkSum(array))

// const newArray = 'lorem ipsum dolor sit amet'
// const secondArr = newArray.split('').reduce((acc, el, idx) => {
//     return [...acc, idx % 2 === 0 ? el : false]
// }, [])
//
// console.log(secondArr)
//
// const array = 'lorem ipsum dolor sit amet'
//
// const checkStr = (array) => {
//     let string = '';
//     for (let index = 0; index < array.length; index++){
//         string += array[index]
//     }
//     return string;
// }
//
// console.log(checkStr(array))

// const arr = [1, 2, 3, 4, 5]
// const result = (arr) => {
//     let sum = 0
//     for (let index = 0; index < arr.length; index++){
//         sum += arr[index]
//     }
//     return sum;
// }
//
// console.log(result(arr))

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const result = (arr) => {
//     let sum = 0
//     for (let index = 0; index < arr.length; index++){
//         sum += arr[index]
//     }
//     return sum;
// }
//
// console.log(result(arr))


const result = (arr) => {
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === 4){
            return 'Есть'
        }
    }
}
console.log(result([1, 2, 5, 9, 4, 13, 4, 10]))