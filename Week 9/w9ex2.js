function showgreetingmessage(){
    let name = window.prompt(" what is your name ")
    window.alert(" hello " + name);
}

document.querySelector("#btn").addEventListener("Click",showgreetingmessage);