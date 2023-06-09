console.log("hi there");

function handleNoAuthentication(){
    
}

if(location.pathname === "/signin.html"){
    if(localStorage.getItem("login_token")){
        location.href = "/";
    }

   
}else if(location.pathname === "/signup.html"){
    let username = document.querySelector("#username").value;
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;
    
    let data = new FormData();
    data.set("username", username);
    data.set("email", email);
    data.set("password", password);
    data.set("action", "register");


    document.querySelector("#submit").onclick = (e) => {
        e.preventDefault();
        fetch("https://figozo-test.000webhostapp.com", {
            body: data,
            method: "POST"
        });        
    }

}else if(location.pathname === "/"){
    console.log("ginx");
    // if(!localStorage.getItem("login_token")){
    //     location.href = "/signin.html";
    // }

    let data = new FormData();
    data.set("login_token", localStorage.getItem("login_token"));
    data.set("action", "get_data");

    fetch("https://figozo-test.000webhostapp.com", {
        body: data,
        method: "POST"
    }).then(res => res.json())
    .then(data => {
        let container = document.querySelector("#temp_container");

        if(data.data.length > 0){
            data.data.forEach( temp_data => {
                let element = document.createElement("div");
                element.setAttribute("class","sn_temp sn_temp1")
                element.innerHTML = `
                    <h3>${temp_data.id}</h3>
                    <h3>${temp_data.date}</h3>
                    <h3>${temp_data.val} deg</h3>
                `;
                container.appendChild(element);
            })
            
        }
        console.log(data);
    })

}




