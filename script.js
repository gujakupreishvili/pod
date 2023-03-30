const email = document.getElementById("input-email");
const error = document.querySelector(".error");
const buttonSubmit = document.querySelector(".submit");
const success = document.querySelector(".submit-email");

let mailregex =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
console.log(error)
function testmail (input){
  if(mailregex.test(input.value)){
    console.log("this is true");
    // input.classList.add("submit-email");
    // input.classList.remove("error");
    // error.lastElementChild.style.display ="none";
    success.style.display="block";
    error.style.display ="none";
    
  }else if(!mailregex.test(input.value)){
    console.log("this is false");
    // input.classList.add('error');
    // input.classList.remove('submit-email');
    // error.firstElementChild.style.display ="none";
    // error.lastElementChild.syle.display = "none";
    success.style.display="none";
    error.style.display ="block";
  }
}


buttonSubmit.addEventListener('click',(event)=>{
  event.preventDefault()
  testmail(email);
  console.log('clicked');
})