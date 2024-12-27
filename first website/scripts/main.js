const myImage = document.querySelector("img");

myImage.addEventListener("click", () =>{
        const mySrc = myImage.getAttribute("src");
        if(mySrc=="images/ramanshu_sahani.jpg"){
                myImage.setAttribute("src", "images/ramanshu_sahani_2.jpg");
        } else{
                myImage.setAttribute("src", "images/ramanshu_sahani.jpg");
        }
});

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
        const myName = prompt("Please enter your name.");
        if(!myName){
                setUserName();
        }
        else{
                localStorage.setItem("name",myName);
                myHeading.textContent = `Hi ${myName}, Welcome to the world of Ramanshu Sahani`;
        }
}

if(!localStorage.getItem("name")){
        setUserName();
}
else{
        const storedName = localStorage.getItem("name");
        myHeading.textContent = `Hi ${storedName}, Welcome to the world of Ramanshu Sahani`;
}

myButton.addEventListener("click", () =>{
       setUserName(); 
});