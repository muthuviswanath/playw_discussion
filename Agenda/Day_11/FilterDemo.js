let arr = [1,2,3,2,4,3,5]

/* arr.indexOf(i)           new_array       if newarry_index == arr.index(i)
1   -> 0                    0               0 == 0  new_arr.append(1)
2   -> 1                                    1 == 1  new_arr.append(2)
3   -> 2                                    2 == 2  new_arr.append(3)
2   -> 3                                    3 == 1  
4   -> 4                                    4 == 4  new_arr.append(4)
3   -> 5                                    5 == 2  
5   -> 6                                    6 == 6  new_Arr.append(5)
*/

let new_arr = arr.filter((element, index) => {
    return arr.indexOf(element) === index
})

console.log(arr)
console.log(new_arr)