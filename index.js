console.log("hi guys");
//23ac4a38da68412796a22988fee045a6

//initialize the 
let source='bbc-news';
let apiKey='23ac4a38da68412796a22988fee045a6'

//grab the news container
let accordionExample = document.getElementById("accordionExample");

//create a ajax get request
const xhr=new XMLHttpRequest();
xhr.open('GET',`https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`, true);

//what to do when response is ready

xhr.onload=function(){
    if(this.status===200){
        let json=JSON.parse(this.responseText);
        let articles=json.articles;
        // console.log(articles);
        let newsHtml="";
        articles.forEach(function(element,index){
            console.log(element,index);
            let news=`<div class="accordion-item">
    <h2 class="accordion-header" id="heading${index+1}">
        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="collapseOne">
        <b>Breaking news${index+1}: </b>  ${element["title"]}
        </button>
    </h2>
    <div id="collapse${index}" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
        <div class="accordion-body">
            ${element["content"]}. <a href="${element['url']}" target="_blank">Read more here.</a>
        </div>
    </div>
</div>`;
   newsHtml+=news; 
        })
    accordionExample.innerHTML=newsHtml;
    }

    else{
        console.log("some error");
    }
}
xhr.send()



