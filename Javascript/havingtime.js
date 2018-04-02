var hour = 8;
 var minute = 50;
 var period = "AM";

 if(period == "AM"){
    if(minute < 30){
        console.log("It's just after", hour, "in the morning.");
    }
    if(minute >= 30){
        hour++;
        console.log("It's almost", hour, "in the morning.");
    }
 }
 if(period == "PM"){
     if(minute < 30){
         console.log ("It's just after", hour, "in the evening.")
     }
     if(minute >= 30){
         hour++;
         console.log("It's almost", hour, "in the evening.")
     }
 }