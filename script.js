// //////////////////////////////PART ONE/////////////////////////////////////////////////
// OBTAINING INPUT FROM A USER AND USING CONTROL STATEMENTS TO DETERMINE FEEDBACK
funct1 = function(){
    let username = document.getElementById("username").value;
    if(username !== ""){
        document.body.innerHTML = ""
        let newdiv = document.createElement("div");
        newdiv.textContent = "Your name is " + username
        document.body.appendChild(newdiv)
    }
    else{
        return alert("No valid response given")
    }
}
/////////////////////////////////////////////////////////////////////////////////////////////
// ////////////////////////////////PART TWO/////////////////////////////////////////////////
// CREATING A FUNCTION TAKING IN TWO INPUTS AND PROVIDING THE SUM,DIFFERENCE,QUOTIENT AND PRODUCT
funct2 = function(a,b){
    let sum = a + b;
    let difference = a - b;
    let product = a * b;
    let quotient;
    if(b !== 0){
        quotient = a/b
    }
    else{
        quotient = "Division by zero not possible."
    }
    return "Your sum is " + sum + ", difference is " + difference + ",product is " + product + " and quotient is " + quotient
}
// Displays an alert message with the values already calculated when the page loads
alert(funct2(89,34));
///////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////PART THREE////////////////////////////////////////////
// USING A WHILE LOOP TO DISPLAY REPETITION ON THE CONSOLE
let i = 1
while(i<8){
    console.log("The value of i is " + i)
    i++
}
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////PART FOUR///////////////////////////////////////////////
// CREATING A FUNCTION TO CHANGE THE COLOR OF A TEXT TO BLUE AT A BUTTON'S CLICK
colorchanger = function(){
    let msg1 = document.getElementById("msg1")
    msg1.style.color = "blue"
}

// CREATING A FUNCTIN TO GENERATE NEW CONTENT
contentcreator = function(){
    let newcont = document.createElement("header")
    newcont.textContent = "Surprise! I am the new content you created!!"
    newcont.style.fontSize = "x-large"
    document.body.appendChild(newcont)
}