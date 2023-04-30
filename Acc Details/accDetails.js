var myInput = document.querySelector('#accountPassword');

validateAcctName = (event) => {
    console.log(event);
    if(event.keyCode >= 65 && event.keyCode <= 90 || event.keyCode >= 97 && event.keyCode <= 122){
        return true;
    }else{
        return false;
      }
};

validateAcctNumber = (event) =>{
    if(event.keyCode >= 47 && event.keyCode <= 57){
        return true;
      }else{
        return false;
      }
};

myInput.onfocus = function(){
    document.querySelector('.passwordValidator').style.display = 'block';
  }

  myInput.onblur = function(){
    document.querySelector('.passwordValidator').style.display = 'none';
  }
