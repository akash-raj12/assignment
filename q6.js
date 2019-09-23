
var email = prompt("Please enter Email");
var reg =/^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/gi;
   /*email in the form of (any letter, no.,.,-)@(any letter and no(0-9).)(any letter)
   (.anyletter(it is optional))*/
function validate(email) {

 
  
  if (reg.test(email))
  {
      console.log('valid Email Address');
      
  }else{
    console.log('Invalid Email')
  }
}validate(email);