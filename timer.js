const beepTime = process.argv.splice(2);
console.log(beepTime);


// convert process vector into array and then uses number stored in array to output sound every given number of seconds
function alertTerminal(arr) {
  for(const unit of arr){
    if (Number(unit) > 0) setTimeout(()=>{console.log("\u0007");}, Number(unit)*(1000));
    
  }
}

alertTerminal(beepTime);