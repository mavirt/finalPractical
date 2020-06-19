function submitFunction(){
       var userName = document.getElementById('inputName').value;
       var userPassword = document.getElementById('inputPassword').value;
       var confirmPassword = document.getElementById('inputConfirm').value;
       var userAge = document.getElementById('inputAge').value;
       error = ''

       if (userName != 'FinalUsername'){
           error+="Incorrect username<br/>";
       }
  
  
       if ( userPassword != 'finalPassword'){
           error+="Incorrect password<br/>";
       }
  
  
       if( confirmPassword != userPassword){
           error+="Password does not match<br/>";
       }
  
  
       if(isNaN(userAge)){
           error+="Must be a number<br/>";
       }
  
  
       if(!isNaN(userAge) && userAge<18){
           error+="You are not old enough to visit this site<br/>";
       }

  
       if(error == ''){
           document.getElementById("error").innerHTML = '';
           document.getElementById("success").innerHTML = "Submitted Correctly!<br/>";
           }
         else{
           document.getElementById("error").innerHTML = error;
       }
       return false;
   }