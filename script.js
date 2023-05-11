let lis = document.querySelectorAll("ul li")

lis.forEach(
  li => {
    li.addEventListener('mouseover', ()=>{
     if ((li.style.transform = "scale(1.2)")) {
       li.style.flexDirection = "row";
       li.style.transform = "scale(1.1)";
       console.log(li);
     }
  })
  li.addEventListener('mouseout', ()=>{
    li.style.flexDirection = "column"
    li.style.transform = "scale(1)";
    console.log(li);
  })
  }
)