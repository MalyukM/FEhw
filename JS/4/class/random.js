function randOne(x){
   return +(Math.random()*x).toFixed(0);
 }

function randTwo(x,y){
//   return(Math.floor(Math.rando(m) * x) + y);
  return(Math.floor(Math.random() * x) + y);
}

console.log("Return random one value: " + randOne(5));
console.log("Return random several value: " + randTwo(10,5));
