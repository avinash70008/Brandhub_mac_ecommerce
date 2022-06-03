let arr = [{qty: 1 , id: 1}, {qty: 1 , id: 2},{qty: 1 , id: 3}]

let index = arr.findIndex((ele)=> ele.id == 2)
arr[index].qty += 1
console.log(arr)