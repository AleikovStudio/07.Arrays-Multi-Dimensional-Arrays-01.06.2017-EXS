function printEl(arrStr) {
    let n = Number(arrStr.pop());

    for (let i = 0; i < arrStr.length; i+=n){//note the i+=n!!!
        console.log(arrStr[i]);
    }
}

printEl(["5", "20", "31", "4", "20", "2"]);
//printEl(["dsa", "asd", "test", "tset", "2"]);
//printEl(["1", "2", "3", "4", "5", "6"]);