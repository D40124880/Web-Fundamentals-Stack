function printRange(start, end, add){
    while(start < end){
        console.log(start);
        start = start + add;
    } 
 }
 printRange(2, 10, 2);