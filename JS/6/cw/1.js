var obj = {
  className: 'open menu'
};


function addClass(a,b){
  for (key in a){
    var arrToObj = a[key].split(' ');
    for (var i = 0; i< arrToObj.length; i++){
      if (b == arrToObj[i]){
        continue;
      } else{
        arrToObj.push(b);
      }
    }  
    a[key]=arrToObj
  }
}

// addClass(obj, 'new');
addClass(obj, 'me');
console.log(obj);

