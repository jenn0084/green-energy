//const resources = [
//    {
//        heading: "This is content 1", 
//        path: "img/recycle.png",
//        body: "making green energy affordable for people with average budget"
//    },
//    {
//        heading: "This is content 2",
//        path: "https://via.placeholder.com/300/ff00ff/000000",
//        body: "making green energy affordable for people with average budget"
//    },
//    
//    {
//        heading: "This is content 3",
//        path: "https://via.placeholder.com/300/ff00ff/000000",
//        body: "making green energy affordable for people with average budget"
//    },
//    
//];
//
///* GETTING REFERENCES TO ACTIVE ELEMENTS */
//const btns = document.querySelectorAll("button");
//const currentContent = document.querySelector(".current-content");
//
//
//currentContent.innerHTML =`<article>
//<h2>${resources[0].heading}</h2>
//<img src="${resources[0].path}">
//<p>${resources[0].body}</p>
//</article>`;
//
//
//
//function load(e) {
//    let event = e.currentTarget.innerHTML;
//    console.log(event);
//    
//    if(event == "<img src=\"img/tree.png\">"){
//        console.log("match");
//        bucket.innerHTML = resources[0].name;
//    } else if(event == "<img src=\"img/recycle.png\">") {
//        console.log("match");  
//        bucket.innerHTML = resources[1].name;
//    }
//}
//
//
///*CREATING EVENT-HANDLER*/
//function load(ev) {
//    let event = ev.currentTarget.innerHTML;
//    console.log(event);
//
//
//    if (eventTarget == "<img src=\"img/leave.png\" alt=\"leave\" height=\"42\" width=\"42\" id=\"active-button\">");
//    {
//        currentContent.innerHTML = `<article>
//                                    <h2>${resources[0].heading}</h2>
//                                    <img src="${resources[0].path}">
//                                    <p>${resources[0].body}</p>
//                                    </article>`;
//        
//    } 
//    
//    else if(event == "<img src=\"img/tree.png\">")
//    {
//        currentContent.innerHTML = `<h2>${resources[1].heading}</h2>`;
//    } 
//    
//    else if(event == "<img src=\"img/recycle.png\">")
//    {
//        currentContent.innerHTML = `<h2>${resources[2].heading}</h2>`;
//    }
//    
//    /*move id to current button*/
//    /*ev.target.id ="active";*/
//    
//    for(let btn of btns){
//        
//        if(btn.id){
//                btn.removeAttribute("id")
//           }
//    }
//    
//    ev.target.id ="active-button";
//    
//}
//
//
//let btns = document.querySelectorAll(".btns");
//console.log(btns);
//let bucket = document.querySelector(".current-content");
//
//
//
//
//
//
//
//
//
//
///* REGISTERING EVENT CONTENT */
//btns[0].addEventListener("click", load);
//btns[1].addEventListener("click", load);
//btns[2].addEventListener("click", load);










var resources = [
   {
        heading: "Leave", 
        path: "img/leave.png",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ultrices pharetra dui, ac fermentum nulla ultrices non. In imperdiet eros eu ligula fringilla consectetur. Etiam elementum rutrum elit, nec iaculis nulla ultricies vel. Integer finibus quis augue porta iaculis. Etiam vestibulum tortor sollicitudin elementum tincidunt. Proin quis tellus mollis, tempus nisl non, scelerisque nisl. In commodo elit a lacus hendrerit placerat. Nullam ac urna nibh. Sed neque libero, finibus non faucibus sit amet, efficitur vitae mauris. Nullam sed scelerisque elit. Duis malesuada felis vel augue imperdiet mattis."
    },
    
    {
        heading: "Tree",
        path: "img/tree.png",
        body: "Nullam consectetur ex non felis consequat blandit. Fusce ornare justo a porttitor mollis. Duis sodales rutrum erat, ut lobortis diam malesuada quis. Nulla a aliquam quam. Donec pellentesque ligula eget fringilla auctor. Nam id enim velit. Aliquam ullamcorper felis sed risus malesuada varius. Pellentesque sed dui feugiat, ultricies risus lacinia, molestie metus. Sed vitae ligula egestas, vulputate lacus eu, congue nibh. Curabitur finibus leo eros, blandit dignissim turpis rhoncus nec. Ut placerat dolor enim, nec scelerisque ligula placerat id. Fusce tristique eu magna non rhoncus. Praesent sit amet vestibulum erat, vitae sodales elit. Aenean lacinia odio nec molestie dapibus."
    },
    
    {
        heading: "RECYCLE",
        path: "img/recycle.png",
        body: "Morbi auctor vestibulum metus, a cursus magna elementum et. Aenean vehicula pharetra euismod. Vivamus hendrerit ut odio at tincidunt. Quisque sed aliquam ligula. Etiam libero est, finibus vulputate rhoncus et, aliquam quis mi. Fusce consequat elementum magna nec mollis. Cras vulputate purus vel urna rhoncus, et sodales eros rhoncus.Sed urna dui, vestibulum id aliquam eget, pulvinar ac massa. Nunc dignissim semper volutpat. Maecenas ultrices lacus dapibus orci volutpat, vel vehicula tellus fermentum. Vestibulum ut mauris condimentum, placerat neque eget, pellentesque nisi. Quisque posuere malesuada vulputate. Morbi varius tortor accumsan scelerisque sollicitudin. Proin non facilisis leo. Morbi ultricies eget sapien sit amet consectetur. In posuere orci non venenatis dictum. Duis fringilla egestas dictum."
    },
    
];

let btns = document.querySelectorAll(".btns");
console.log(btns);
let bucket = document.querySelector(".current-content");

function load(e) {
    let event = e.currentTarget.innerHTML;
    console.log(event);
    
    if(event == "<img src=\"img/leave.png\">")
    {
        console.log("match");
        bucket.innerHTML = `<article>
                                <h1>${resources[0].heading}</h1>
                                <div class="row">
                                    <div class="col-md-3">
                                        <img class="img-fluid"> src="${resources[0].path}">
                                    </div>
                                    <div class="col-md-6">
                                        <p>${resources[0].body}</p>
                                    </div>
                                </div>
                            </article>`;
    } 
    
    else if(event == "<img src=\"img/tree.png\">")
    {
        console.log("match");  
        bucket.innerHTML = `<article>
                                <h1>${resources[1].heading}</h1>
                                <div class="row">
                                    <div class="col-md-3">
                                        <img class="img-fluid"> 
                                <img src="${resources[1].path}">
                                    </div>
                                    <div class="col-md-6">
                                <p>${resources[1].body}</p>
                                    </div>
                                </div>
                            </article>`;
    }
    
    else if(event == "<img src=\"img/recycle.png\">")
    {
        console.log("match");  
        bucket.innerHTML = `<article>
                                <h1>${resources[2].heading}</h1>
                                <div class="row">
                                    <div class="col-md-3">
                                        <img class="img-fluid"> 
                                <img src="${resources[2].path}">
                                    </div>
                                    <div class="col-md-6">
                                <p>${resources[2].body}</p>
                                    </div>
                                </div>
                            </article>`;
    }
}

btns[0].addEventListener("click",load);
btns[1].addEventListener("click",load);
btns[2].addEventListener("click",load);








