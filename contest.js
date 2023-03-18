function changeDate(a)
{
  const datetimeString = a;
  const date = new Date(datetimeString);
  const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
  const formattedDate = date.toLocaleDateString('en-US', options);
  return formattedDate
}


let url = "https://kontests.net/api/v1/all"
let promise = fetch(url)

promise.then((value) => {
  return value.json()
}).then((contest) => {
  console.log(contest);



  let htmlhackerrank = ""
  let htmlhackerearth = ""
  let htmlcodechef = ""
  let htmlleetcode = ""
  let htmlcodeforces = ""
  let htmlatcoder = ""
  let htmlKickStart = ""
  let htmlother = ""
  for (const i of contest) {
    
    if(i.site == "HackerRank")
    {
        
      htmlhackerrank += `   
      <div class="card" style="width: 16rem;   margin: 10px; ">
      <img src="image contest/HackerRank Website.png" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${i.name}</h5>
        <p class="card-text">Status is ${i.status}</p>
        <p class="card-text">Site is  <span> <b>${i.site}</b> </span> </p>
        <p class="card-text  p-date ">Start-time : ${changeDate(i.start_time)}</p>
        <p class="card-text  p-date ">End-time : ${changeDate(i.end_time)}</p>
        <p class="card-text  p-date ">In 24 Hours : ${i.in_24_hours}</p>
       
        <a href="${i.url}" class="btn btn-primary" target="blank" >Visit website</a>
      </div>
    </div>
    ` 
    // document.getElementById("contest-id-1").innerHTML = htmlhackerrank
    }

     else if(i.site == "HackerEarth")
    {
      htmlhackerearth += `
      <div class="card" style="width: 14rem;   margin: 10px; ">
      <img src="image contest/hackerearth_old_logo.jpg" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${i.name}</h5>
        <p class="card-text">Status is ${i.status}</p>
        <p class="card-text">Site is  <span> <b>${i.site}</b> </span> </p>
        <p class="card-text  p-date ">Start-time : ${changeDate(i.start_time)}</p>
        <p class="card-text  p-date ">End-time : ${changeDate(i.end_time)}</p>
        <p class="card-text  p-date">In 24 Hours : ${i.in_24_hours}</p>
       
        <a href="${i.url}" class="btn btn-primary" target="blank" >Visit website</a>
      </div>
    </div>
    `

    }

    else if(i.site == "CodeChef")
    {
      htmlcodechef += `
      <div class="card" style="width: 14rem;   margin: 10px; ">
      <img src="image contest/codchef new.jpg" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${i.name}</h5>
        <p class="card-text">Status is ${i.status}</p>
        <p class="card-text">Site is  <span> <b>${i.site}</b> </span> </p>
        <p class="card-text p-date ">Start-time : ${changeDate(i.start_time)}</p>
        <p class="card-text  p-date ">End-time : ${changeDate(i.end_time)}</p>
        <p class="card-text  p-date">In 24 Hours : ${i.in_24_hours}</p>
       
        <a href="${i.url}" class="btn btn-primary" target="blank" >Visit website</a>
      </div>
    </div>
    `

    }

    else if(i.site == "LeetCode")
    {
      htmlleetcode += `
      <div class="card" style="width: 14rem;   margin: 10px; ">
      <img src="image contest/leetcode.png" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${i.name}</h5>
        <p class="card-text">Status is ${i.status}</p>
        <p class="card-text">Site is  <span> <b>${i.site}</b> </span> </p>
        <p class="card-text p-date ">Start-time : ${changeDate(i.start_time)}</p>
        <p class="card-text  p-date ">End-time : ${changeDate(i.end_time)}</p>
        <p class="card-text  p-date">In 24 Hours : ${i.in_24_hours}</p>
       
        <a href="${i.url}" class="btn btn-primary" target="blank" >Visit website</a>
      </div>
    </div>
    `

    }

    else if(i.site == "CodeForces")
    {
      htmlcodeforces += `
      <div class="card" style="width: 14rem;   margin: 10px; ">
      <img src="image contest/codeforces.jfif" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${i.name}</h5>
        <p class="card-text">Status is ${i.status}</p>
        <p class="card-text">Site is  <span> <b>${i.site}</b> </span> </p>
        <p class="card-text p-date ">Start-time : ${changeDate(i.start_time)}</p>
        <p class="card-text  p-date ">End-time : ${changeDate(i.end_time)}</p>
        <p class="card-text  p-date">In 24 Hours : ${i.in_24_hours}</p>
       
        <a href="${i.url}" class="btn btn-primary" target="blank" >Visit website</a>
      </div>
    </div>
    `

    }

    else if(i.site == "AtCoder")
    {
      htmlatcoder += `
      <div class="card" style="width: 14rem;   margin: 10px; ">
      <img src="image contest/atcoders new.jpg" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${i.name}</h5>
        <p class="card-text">Status is ${i.status}</p>
        <p class="card-text">Site is  <span> <b>${i.site}</b> </span> </p>
        <p class="card-text p-date ">Start-time : ${changeDate(i.start_time)}</p>
        <p class="card-text  p-date ">End-time : ${changeDate(i.end_time)}</p>
        <p class="card-text  p-date">In 24 Hours : ${i.in_24_hours}</p>
       
        <a href="${i.url}" class="btn btn-primary" target="blank" >Visit website</a>
      </div>
    </div>
    `

    }

    else if(i.site == "Kick Start")
    {
      htmlKickStart += `
      <div class="card" style="width: 14rem;   margin: 10px; ">
      <img src="image contest/kick start canva.png" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${i.name}</h5>
        <p class="card-text">Status is ${i.status}</p>
        <p class="card-text">Site is  <span> <b>${i.site}</b> </span> </p>
        <p class="card-text p-date ">Start-time : ${changeDate(i.start_time)}</p>
        <p class="card-text  p-date ">End-time : ${changeDate(i.end_time)}</p>
        <p class="card-text  p-date">In 24 Hours : ${i.in_24_hours}</p>
       
        <a href="${i.url}" class="btn btn-primary" target="blank" >Visit website</a>
      </div>
    </div>
    `

    }

    else
    {
      htmlother += `
      <div class="card" style="width: 14rem;   margin: 10px; ">
      <img src="cding-img.png" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${i.name}</h5>
        <p class="card-text">Status is ${i.status}</p>
        <p class="card-text">Site is  <span> <b>${i.site}</b> </span> </p>
        <p class="card-text p-date ">Start-time : ${changeDate(i.start_time)}</p>
        <p class="card-text  p-date ">End-time : ${changeDate(i.end_time)}</p>
        <p class="card-text  p-date">In 24 Hours : ${i.in_24_hours}</p>
       
        <a href="${i.url}" class="btn btn-primary" target="blank" >Visit website</a>
      </div>
    </div>
    `

    }

  
    //then end---
  }

 let a =  document.getElementById("contest-id-1")
 if (a) {  a.innerHTML = htmlhackerrank }
  else{ console.error("error in htmlhackerrank") }    

  let b =   document.getElementById("contest-id-2")
  if (b) {  b.innerHTML = htmlhackerearth }
   else{ console.error("error in htmlhackerearth") }   

   let c =   document.getElementById("contest-id-3")
   if (c) {  c.innerHTML = htmlcodechef }
    else{ console.error("error in htmlcodechef") } 

    let d =   document.getElementById("contest-id-4")
    if (d) {  d.innerHTML = htmlleetcode }
     else{ console.error("error in leetcode") } 

     
    let e =   document.getElementById("contest-id-5")
    if (e) {  e.innerHTML = htmlcodeforces }
     else{ console.error("error in coderforces") } 

      
    let f =   document.getElementById("contest-id-6")
    if (f) {  f.innerHTML = htmlatcoder }
     else{ console.error("error in atcoders") } 

        
    let g =   document.getElementById("contest-id-7")
    if (g) {  g.innerHTML = htmlKickStart }
     else{ console.error("error in kickstart") } 

          
    let h =   document.getElementById("contest-id-8")
    if (h) {  h.innerHTML = htmlother }
     else{ console.error("error in other challenges") } 


})






