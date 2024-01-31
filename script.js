fetch("./header.html")
.then(response =>{
    return response.text()
})
.then(data =>{
    document.querySelector("header").innerHTML= data;
});
fetch("./header2.html")
.then(response =>{
    return response.text()
})
.then(data =>{
    document.querySelector("header2").innerHTML= data;
});
fetch("./header3.html")
.then(response =>{
    return response.text()
})
.then(data =>{
    document.querySelector("header3").innerHTML= data;
});
fetch("./footer.html")
.then(response =>{
    return response.text()
})
.then(data =>{
    document.querySelector("footer").innerHTML= data;
});

//fetching json data
let http = new XMLHttpRequest();
http.open('get', 'json/paragraph.json', true);
http.send();
http.onload = function () {
    if (this.readyState == 4 && this.status == 200) {
        let paragraphs = JSON.parse(this.responseText);
        let output = "";
        for (let item of paragraphs) {
            output += `
             <h3>
               ${item.heading}</strong>
             </h3>
             <p>${item.description}</p>         
               
	         `;
        }
        document.querySelector("paragraph").innerHTML = output;
    }
}