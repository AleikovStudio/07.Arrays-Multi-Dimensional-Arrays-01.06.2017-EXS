function printByDelimiter(arrStr){
    //let delimiter = arrStr[arrStr.length-1];
    let delimiter = arrStr.pop();//gets the last element of the array
    //console.log(delimiter);
    let result = arrStr.join(delimiter);
    console.log(result);
}


printByDelimiter(["One","Two","Three","Four","Five","-"]);
//printByDelimiter(["How about no?","I","will","not","do","it!","_"]);