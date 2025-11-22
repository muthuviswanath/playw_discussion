/*Scenario 2:
    arr1 = [1,2,3,7,6,5,8,9]
    arr2 = [5,8,3,0,3,5]
    result = [1,5,2,8,3,3,7,0,6,3,5,5,8,9]
    */


    let arr1 = [1,2,3,7,6,5,8,9]
    let arr2 = [5,8,3,0,3,5]
    let result = new Array(arr1.length+arr2.length)

    let i=0,j=0,k=0
    while (i < arr1.length && j < arr2.length){
        result[k++] = arr1[i++]
        result[k++] = arr2[j++]
    }

    while (i < arr1.length){
        result[k++] = arr1[i++]
    }
    
    while (j < arr2.length){
        result[k++] = arr2[j++]
    }

    console.log(result.join(", "))