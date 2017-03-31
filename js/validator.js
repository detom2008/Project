

var validator = {};


validator.isEmailAddress = function(input){
 
  var atSignPosition = input.indexOf('@');
  var periodPosition = input.lastIndexOf('.');
  
  if((atSignPosition < (periodPosition-1)) && ((periodPosition+1) <   input.length) && (atSignPosition > 0))
      return true;
  else
    return false;
};


validator.isPhoneNumber =  function (input){
  var number = parseInt(input);
  
  if ((!isNaN(parseInt(input))) &&     (input.length  >= 10)  && (input.length <= 11) && (input[0] == '0'))
    return true;
  else
    return false;
};

validator.withoutSymbols = function(input){
  var isAlpha = true;
  var count = 0;
  var sansSymbols = "";
  while ((count < input.length)) {
      if((input[count].toUpperCase() !== input[count].toLowerCase()) || (input[count] == " ")) 
            sansSymbols+= input[count];
    count++;
  } 
  return sansSymbols;
};


validator.isDate = function (date) {
    return (new Date(date) !== "Invalid Date") && !isNaN(new Date(date));
};

validator.isBeforeDate = function (input, reference) {
  if((!this.isDate(input)||(!this.isDate(reference)))){
     throw new error("invalid input");
     }
     
  return new Date(input) < new Date(reference); 
};


validator.isAfterDate = function(input, reference) {
  if((!this.isDate(input)||(!this.isDate(reference)))){
     throw new error("invalid input");
     }
     
  return new Date(input) > new Date(reference); 
};

validator.isBeforeToday = function (input) {
  if((!this.isDate(input))){
     throw new error("invalid input");
     }
     var reference = new Date();
  return new Date(input) < new Date(reference); 
};

validator.isAfterToday = function(input) {
  if((!this.isDate(input))){
     throw new error("invalid input");
     }
     var reference = new Date();
  return new Date(input) > new Date(reference); 
};

validator.isEmpty = function (input){
  if ((input.trim()).length < 1)
    return true;
  else 
    return false;
};

validator.contains = function (input, words){
  
  var temp = '';
  for(var x = 0; x < input.length -1; x++) {
    switch(input[x]){
      case',' :
      case'.' :
      case'\\' :
      case'?' :
      case'!':  
      case'\'':
      case'\"':    
      case'-': 
        temp+=" ";
        break;
      default : temp+= input[x].toUpperCase();
    }
              
  }
  
  var inputArr = temp.split(" ");
  var countInput = 0;
  var isPresent = false;
  var text = "";
  var wordStr ;
  var i = 0;
  do {
        wordStr = words[i].toUpperCase();   
        if (inputArr.indexOf(wordStr) >=0)
          isPresent = true;
        i++;
    } while((isPresent) && (i < words.length));
 return isPresent;
};

validator.lacks = function (input, words){
  
  var temp = '';
  for(var x = 0; x < input.length -1; x++) {
    switch(input[x]){
      case',' :
      case'.' :
      case'\\' :
      case'?' :
      case'!':  
      case'\'':
      case'\"':    
      case'-': 
        temp+=" ";
        break;
      default : temp+= input[x].toUpperCase();
    };
              
  }
  

  var inputArr = temp.split(" ");
  var countInput = 0;
  var isPresent = false;
  var text = "";
  var wordStr ;
  var i = 0;
  do {
        wordStr = words[i].toUpperCase();   
        if (inputArr.indexOf(wordStr) < 0)
          isPresent = true;
        i++;
    } while((isPresent) && (i < words.length));
 return isPresent;
};

validator.isComposedOf = function(input, words){
  
  var temp = '';
  for(var x = 0; x < input.length -1; x++) {
    switch(input[x]){
      case',' :
      case'.' :
      case'\\' :
      case'?' :
      case'!':  
      case'\'':
      case'\"':    
      case'-': 
        temp+=" ";
        break;
      default : temp+= input[x].toUpperCase();
    }
              
  }
  
  var inputArr = temp.split(" ");
  var countInput = 0;
  var isPresent = false;
  var text = "";
  var wordStr ;
  var i = 0;
  do {
        wordStr = words[i].toUpperCase();   
        if (inputArr.indexOf(wordStr) >=0)
          isPresent = true;
        i++;
    } while((isPresent) && (i < words.length));
 return isPresent;
};


validator.isLength = function(input, n){
  return input.length <= n;
};


validator.isOfLength = function(input, n){
  return input.length >= n;
};



validator.countWords = function(input){
  
  var temp = '';
  for(var x = 0; x < input.length -1; x++) {
    switch(input[x]){
      case',' :
      case'.' :
      case'\\' :
      case'?' :
      case'!':  
      case'\'':
      case'\"':    
      case'-': 
        temp+=" ";
        break;
      default : temp+= input[x].toUpperCase();
    }
              
  }
  var wordArr = temp.split(" ");
  return wordArr.length;
};


validator.lessWordsThan = function(input, n){
  return countWords(input) <= n;
};

validator.moreWordsThan = function(input, n){
  return countWords(input) >= n;
};


validator.isBetween = function(floor, ceiling, input){
  return ((input >= floor) && (input <= ceiling));
};



validator.isAlphaNumeric = function(input){
  var isAlpha = true;
  var count = 0;
  while ((isAlpha === true) && (count < input.length)) {
      var firstLetter = input[count].toUpperCase();
      if(firstLetter !== firstLetter.toLowerCase())
        {
        }
    
        else
        {
         
          if(isNaN(input[count]))
            {
            isAlpha = false;
              
             }
          else{
           
          }
        }
     count++;
    
  } 
  
  return isAlpha;
};



validator.isCreditCard  = function(input){
  
  if ((input.length !== 19 ) && (input.length !==16))
    {
      return false;
    }
  
  var count = 0;
  
  while (count < input.length){
    if(!this.isAlphaNumeric(input[count])&& !((input[count]==="-") && ((count+1)%5===0)))
      {
        return false;
      }
    count++;
  } 
  
  
  return true;
};


validator.isHex  = function(input) {
  if ((input[0] ==="#") &&(input.length <=7))
    {  
      var a = parseInt(input.substr(1, input.length),16);
      return (a.toString(16) === input.substr(1, input.length));
     }
  else
    return false;
};


validator.isRGB  = function(input){
  if (input.substr(0,input.indexOf("(")) !=="rgb")
    return false;
  else
    {
      var colorArr = (input.substring(input.indexOf("(")+1, input.indexOf(")"))).split(",");
      if (colorArr.length !== 3)
        return false;
      else
        {
          var count = 0;
          var isValidRGB = true;
          while((isValidRGB) && (count < 3))
            {
              if(!this.isBetween(0, 255, colorArr[count]))
                isValidRGB = false;
              count++;
            }
            
         return isValidRGB;   
        }
    }
};



validator.isHSL  = function(input){
  if (input.substr(0,input.indexOf("(")) !=="hsl")
    return false;
  else
    {
      var colorArr = (input.substring(input.indexOf("(")+1, input.indexOf(")"))).split(",");
      if ((colorArr.length !== 3) || (!this.isBetween(0,360,colorArr[0])) || 
          (!this.isBetween(0,1,colorArr[1])) || (!this.isBetween(0,1,colorArr[2])))
        return false;
     
       else return true;           
    }
};



validator.isColor  = function(input){
  if((this.isRGB(input)  ||   this.isHSL(input) ||  this.isHex(input) ))
     return true;
    else
      return false;
};

function getRVBN(rName) {
    var radioButtons = document.getElementsByName(rName);
    for (var i = 0; i < radioButtons.length; i++) {
        if (radioButtons[i].checked) return radioButtons[i].value;
    }
    return '';
}

