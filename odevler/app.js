var imgDiv=document.querySelector(".img-container")
const showImg=(i)=>{
   a=(i.id).toLowerCase()
   imgDiv.style.backgroundImage=`url(/images/${a}.jpg)`;
   var div=i.parentElement;
   div.style.transition="transform 0.5s ease";
   div.style.transform="translate(50px)"
}
const closeImg=(i)=>{
   a=(i.id).toLowerCase()
   imgDiv.style.backgroundImage="none";
   var div=i.parentElement;
   div.style.transition="transform 0.5 ";
   div.style.transform="translate(0)"
}