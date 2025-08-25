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
