
var utilities ={};


utilities.shuffle = function(arr) {
    var j, x, i;
    for (i = arr.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = arr[i - 1];
        arr[i - 1] = arr[j];
        arr[j] = x;
    }
  return arr;
}


utilities.pluralize =function(val, n, pluralword) {
if(n ==1) {
 	return val;
	}	
	else if(pluralword){
 		return pluralword;
	} 
	else{
		return val +"s";
	}
}




utilities.has = function  (obj, v) {
  for (var key in obj) {
   if(obj[key] == v ){
	   return true
	 }
}
 return false;
}
