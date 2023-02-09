
let data = {
    name: "John",
    age: 30,
    city: "New York"
}


async function sendData(url, data, method) {
   let req= await fetch(url, {
        method: method,
        headers: {
            "Allow-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })

    let res = await req.json();
    console.log(res);  
}



let input = document.getElementById("input-id");

let subBTN = document.getElementById("submit-BTN");
subBTN.addEventListener("click", ()=>{
    sendData("http://localhost:3000/login", {user:'user', password:'password'}, "POST")
}); 
