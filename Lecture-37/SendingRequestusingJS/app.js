

let ul = document.querySelector('ul');

//XMLHttpRequest -- method 1
let req = new XMLHttpRequest();

//connection bana hai basically
req.open('GET','https://inshorts.deta.dev/news?category=entertainment')

//bhejni hai apni request/demand..
req.send();

req.onload = function(){
    // console.log(this,'Sonu');
    let samachar = JSON.parse(this.response);
    // console.log(samachar);
    for(let d of samachar.data){
        let li = document.createElement('li');
        li.innerHTML = `
        <img src=${d.imageUrl} height="100px" />
        <span>${d.title}</span>
        `
        ul.appendChild(li);
    }

}

//lekin agar error 
req.onerror = function(){
    console.log(this);
}