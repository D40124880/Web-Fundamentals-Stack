function numbersOnly(arr){
    var arr2 = [];
    for(var x = 0; x < arr.length; x++){
        if(typeof(arr[x]) === "number"){
            arr2.push(arr[x]);
        }
    }
    console.log(arr2);
}

numbersOnly(["Martin", 2, 4, "MOM", 24])