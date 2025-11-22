/*Scenario 1:
    arr1 = [1,2,3,7,6,5,8,9]
    arr2 = [5,8,3,0,3,5]
    result = [1,2,3,7,6,5,8,9,5,8,3,0,3,5]
    */

    let arr1 = [1,2,3,7,6,5,8,9]
    let arr2 = [5,8,3,0,3,5]
    let result = new Array(arr1.length + arr2.length)

    for (let i=0; i<result.length;i++){
        result[i] = arr1[i]
        if (i >= arr1.length)
        result[i] = arr2[i-arr1.length]
    }
    console.log(result.join(", "))
