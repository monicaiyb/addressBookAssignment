// Define function vlaidate form to access attibutes of the <form> tag named registratoin
const validation = () => {
    // const useID = document.registration.userid;
    const useID = document.register.username;
    const passWord = document.register.password;
    const daTe = document.register.dateRegister;
    const firstNa = document.register.fname;
    const lastNa = document.register.lname;
    const perioD = document.register.periodStay;
    const emailAdd = document.register.email;
    const seX = document.register.Gender;
    const warD = document.register.ward;
    const ResD = document.register.residence;


    const phonNum = document.register.phoneNum;
    const DoB = document.register.birthDate;
    const UniqueID = document.register.uniqID;
    const nationalId = document.register.niN;

    // const warD1 = document.getElementById("wD1");
    // const warD2 = document.getElementById("wD2");
    // const warD3 = document.getElementById("wD3");
    // const warD4 = document.getElementById("wD4");

    const mobiL = document.getElementById("mob");
    const superV = document.getElementById("supE");
    const reguL = document.getElementById("reG");
    const suppO = document.getElementById("supp");
    const userErro = document.getElementById("usernameError")




    // const adDress = document.registration.address;
    // const counTry = document.registration.country;
    // const ziP = document.registration.zip;
    // const emailAdd = document.registration.email;
    // const sexM = document.getElementById("sexMale");
    // const sexF = document.getElementById("sexFemale");
    // const nonEng = document.getElementById("nLang");
    // const Eng = document.getElementById("eLang");
  
    //User ID form filled will be focused when the form loads
    

  
    //This function will validate user id.
    const validateUsername = /^\w{5,7}$/;
    if (useID.value.match(validateUsername)) {
      console.log(useID.value);
      userErro.innerHTML = "Please enter username"
      useID.style.border = "2px solid green";
    } else {
      useID.style.border = "2px solid red";
      useID.focus();
      // return false;
    }

    //This function will validate password
    const validatEpassword = /^\w{7,12}$/;
    if (passWord.value.match(validatEpassword)) {
      // alert("Correct password");
      passWord.style.border = "2px solid green";
    } else {
      passWord.style.border = "2px solid red";
    }
    // This function will validate first name 
    const validateFname = /^[A-Za-z]+$/;
    if (firstNa.value.match(validateFname)) {
      console.log(firstNa.value);
      firstNa.style.border = "2px solid green";

    } else {
      firstNa.style.border = "2px solid red";
    }
  // This function will validate last name
    const validateLname = /^[A-Za-z]+$/;
    if (lastNa.value.match(validateLname)) {
      console.log(lastNa.value);
      lastNa.style.border = "2px solid green";
    } else {
      lastNa.style.border = "2px solid red";
    }
   //This function will validate period of stay
    if (perioD.value==""){
      perioD.style.border= "2px solid red";
      return false;
    } else if (perioD.value!= "" && perioD.value > 10 )
    {
      perioD.style.border= "2px solid green";

    }
  
    //This function will validate gender 
    if (seX.value == "Default") {
      seX.style.border= "2px solid red"
      seX.focus();
      return false;
  
    } 
  
    ///Thisfunction will validate phone number
    const validatePhone = /^[0-9]{10}$/;
    if (!phonNum.value.match(validatePhone)) {
      phonNum.style.border = "2px solid red";
      return false;
    }

    ///This fuction will validate Ward selection
     //This function will validate gender 
     if (warD.value == "Default") {
      alert(" Select ward from the list");
      warD.style.border = "2px solid green";
      warD.focus();
      return false;
    } 

    //This function will validate residence type 

    if (ResD.value == "Default") {
      alert(" Select residence type from the list");
      ResD.style.border = "2px solid green";
      ResD.focus();
      return false;
    } 


    //This fucntion will validate Activities
    if (mobiL.checked == false && superV.checked == false && reguL.checked == false && suppO.checked == false) {
      alert("Please select activites");
      mobiL.style.border = "2px solid green";
      superV.style.border = "2px solid green";
      reguL.style.border = "2px solid green";
      suppO.style.border = "2px solid green";
    }

    ///This function will validate NIN number

    const ninRegex = /^[A-Z0-9]{13}$/;
    if(!nationalId.value.match(ninRegex)){
        ninError.innerHTML = "Please ensure your NIN is 13 characters"
        ninError.style.color = "red";
        nationalId.style.border = "2px solid red";
    return false;
    }

    // This fucntion will validate email add
    const validateEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (validateEmail.test(emailAdd.value) == true) {
      // alert("Correct email");
      emailAdd.style.border = "2px solid green";
    } else {
      emailAdd.style.border = "2px solid red";
      return false;
    }
  
    // This fucntion will validate country
    //   const validateCountry = "Default";
    if (counTry.value == "Default") {
      alert(" Select country from the list");
      counTry.style.border = "2px solid green";
      counTry.focus();
      return false;
    }
    // This function will validate sex
    if (sexM.checked == false && sexF.checked == false) {
      alert("Please select your sex");
      sexM.style.border = "2px solid green";
      sexF.style.border = "2px solid green";
    }
    //Validate language
    if (nonEng.checked == false && Eng.checked == false) {
      alert("Please select your language");
      nonEng.style.border = "2px solid green";
      Eng.style.border = "2px solid green";
    }
  };
  










 function makeid(length) {
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  console.log(result)
  document.getElementById('uniqID').value = result;
  return result;
}


// ///

// //validation for the farmer one registration form
// const validateForms = () =>{
//   // event.preventDefault();
//   // event.stopPropagation();
//       const fiName = document.registration.fname;
//       const laName = document.registration.lname;
//       const usrname = document.registration.username;
//       const fopassword = document.registration.password;
//       const nationalId = document.registration.nin;
//       const pnumber = document.registration.pnumber;
//       const period = document.registration.period;

// //validation regex for farmer one reg form
// const fo1stname = /^[A-Za-z]{2,50}$/;
// const fnameError = document.getElementById('fnameError');
// if(!fiName.value.match(fo1stname)){
//   fnameError.innerHTML = 'Please enter first name';
//   fiName.style.border = "2px solid red";
//   fnameError.style.color ="red";
// // return false;
// }

// const lastName= /^[A-Za-z]{2,50}$/;
// const lnameError = document.getElementById('lnameError')
// if(!laName.value.match(lastName)) {

//   lnameError.innerHTML= "Please enter your last name";
//   lnameError.style.color = "red";
//   laName.style.border = "2px solid red";
// // return false;
// }

// const usname = /^[A-Za-z0-9]{2,50}$/;
// const unameError = document.getElementById('unameError');
// if(!usrname.value.match(usname)){
//       unameError.innerHTML = "Please create a username"
//       unameError.style.color = "red"
//       usrname.style.border = "2px solid red"
// return false;
//   }

// let passWord=/^\w{7,12}$/;
// const fopassError = document.getElementById('fopassError');
// if(!fopassword.value.match(passWord)){
//   fopassError.innerHTML = "Password should be between 7 to 12 characters";
//   fopassError.style.color = "red"
//   fopassword.style.border ="2px solid red";
// // return false;
// }
// const periodError = document.getElementById('periodError');
// let date = new Date(period.value),
//   residenceYear = date.getFullYear(),
//   currentYear = new Date().getFullYear();
//   if (currentYear - residenceYear < 10) {

//   periodError.innerHTML = "Cannot register a farmer one who has spent less than 10 years in the ward"
//   periodError.style.color = "red"
//   period.style.border = "2px solid red";
// // return false;
// }

// const ninRegex = /^[A-Z0-9]{13}$/;
// const ninError = document.getElementById('ninError');
// if(!nationalId.value.match(ninRegex)){
//   ninError.innerHTML = "Please ensure your NIN is 13 characters"
//   ninError.style.color = "red";
//   nationalId.style.border = "2px solid red";
// return false;
// }

// const telRegex = /^[0-9]{10}$/;
// const pnumError = document.getElementById('pnumError');
// if(!pnumber.value.match(telRegex)) {
//   pnumError.innerHTML = "Should be 10 numbers";
//   pnumError.style.color = "red"
//   pnumber.style.border = "2px solid red";
// return false;
// }



// else{
//       alert("Thank you for putting correct information");
//       return true;
//   }
// };

// // let validation = document.getElementById('valfo');
// // validation.addEventListener('click', validateFo)