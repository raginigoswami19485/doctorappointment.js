 let sing=()=>{

    let name=document.querySelector("#name").value
    let email=document.querySelector("#email").value
    let number=document.querySelector("#number").value
    let address=document.querySelector("#address").value
    let pass=document.querySelector("#pass").value
    let cpass=document.querySelector("#cpass").value

    if(name==""){
        alert("Please fill your name");
        document.querySelector("#name").focus();
        return false;
    }
    if(email==""){
        alert("Please fill your Email");
        document.querySelector("#email").focus();
        return false;
    }
    if(pass==""){
        alert("Please fill your password");
        document.querySelector("#pass").focus();
        return false;
    }
    if(address==""){
        alert("Please fill your address");
        document.querySelector("#address").focus();
        return false;
    }    
    if(number==""){
        alert("Please fill your number");
        document.querySelector("#number").focus();
        return false;
    }
    if(cpass==""){
        alert("Please fill your confirm pass");
        document.querySelector("#cpass").focus();
        return false;
    }
    
    if(number.length!=10 ){
        alert("10 digits are allowed")
        document.querySelector("#number").focus()
        return false
    }
    if(isNaN(number)){
        alert("only digits are allowed")
        document.querySelector("#number").focus()
        return false
    }
    if(!(email.includes("@"))){
        alert("add @ in email")
        document.querySelector("#email").focus()
        return false
    }
    if(!(pass.match(/[~!@#$%^&*-+]/))){
        alert("please add one special character in your password")
        document.querySelector("#pass").focus()
        return false
    }
    if(pass!=cpass){
        alert("mis match password")
        document.querySelector("#cpass").focus()
        return false
    }    
 localStorage.setItem("name",name)
 localStorage.setItem("cpass",cpass)
 localStorage.setItem("number",number)
 localStorage.setItem("email",email)
 localStorage.setItem("pass",pass)
 localStorage.setItem("address",address)
 
 location.href='login.html'
 return false
}

let login = () => {
    let names = document.querySelector("#loginname").value;
    let loginpasse = document.querySelector("#loginpass").value;

    let localname = localStorage.getItem("name");
    let localpass = localStorage.getItem("pass");

    if (names == localname && loginpasse == localpass) {
        location.href = 'homepage.html'; 
    } else {
        alert("Invalid Credentials"); 
    }
    return false; 
}

