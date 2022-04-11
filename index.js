const btn = document.getElementById("gen_btn")
const text = document.getElementById("input")
const img = document.querySelector("img")

btn.addEventListener("click",()=>{
    //Time to get api from goqr
url=`https://api.qrserver.com/v1/create-qr-code/?size=321x321&data=${text.value}` 
    img.src=url
    //lets Set the size
})