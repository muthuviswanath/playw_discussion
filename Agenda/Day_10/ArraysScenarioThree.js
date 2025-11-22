/*Scenario 2:
    arr1 = [1,2,3,7,6,5,8,9]                    //visited element:[0][1][2][3]
    arr2 = [5,8,3,0,3,5]                        //visited element:[0]
    result = [1,5,2,8,3,3,7,0,6,3,5,5,8,9]      //visited element:[arr1[0],arr1[1], arr1[2], arr2[0], arr1[3]
    */


    let arr1 = [1,2,3,5,8,9]
    let arr2 = [5,8,9,11,23,45,67,97]
    let result = new Array(arr1.length+arr2.length)

    let i=0,j=0,k=0
    while (i < arr1.length && j < arr2.length){
        if (arr1[i] < arr2[j])
            result[k++] = arr1[i++]
        else
            result[k++] = arr2[j++]
    }

    while (i < arr1.length){
        result[k++] = arr1[i++]
    }
    
    while (j < arr2.length){
        result[k++] = arr2[j++]
    }

    console.log(result.join(", "))