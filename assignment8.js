//Problem 4: Given stored username and password and input username and password, Print if the user can login or not.

let credential_username="suraj"
let credential_password="123456"

let username="suraj"
let password="123456"

if(credential_username==username){
  if(credential_password==password){
    console.log("user can login")
  }
  else{console.log("Password is Incorrect")
   }
}
else{console.log("Username is Incorrect")}