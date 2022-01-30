

 function myfunction(){
  let buttval= document.getElementById("button")
   let input = document.getElementById("link")
   if(buttval.innerHTML=="get QR code"){
 
  document.getElementById("image").src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input.value}`
  buttval.innerHTML="Clear"
  console.log(input.value)
}
else{
  buttval.innerHTML="get QR code"
  document.getElementById("image").src="#"
  input.value=" "
}
}




