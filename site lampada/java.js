imgoff= document.createElement("img")
imgoff.src="./imagens/interruptoroff.png"

imgon= document.createElement("img")
imgon.src="./imagens/interruptoron.png"

imgloff=document.createElement("img")
imgloff.src="./imagens/lampadaoff.png"

imglon=document.createElement("img")
imglon.src="./imagens/lampadaon.png"

div=document.createElement("div")
div.append(imgoff)
div.append(imgon)
divl=document.createElement("div")
divl.append(imgloff)
divl.append(imglon)

body=document.querySelector("body")
body.append(divl)
body.append(div)

html=document.querySelector("html")

imgoff.setAttribute("id","interruptorOff")
imgon.setAttribute("id","interruptorOn")
imgloff.setAttribute("id","lampadaOff")
imglon.setAttribute("id","lampadaOn")
div.setAttribute("id","interruptores")
divl.setAttribute("id","lampadas")

imgoff.onclick=function(){
   
    imgoff.style.display="none"
    imgon.style.display="block"
    imgloff.style.display="none"
    imglon.style.display="block"

    html.style.backgroundColor = "white";
}

imgon.onclick=function(){
   
    imgoff.style.display="block"
    imgon.style.display="none"
    imgloff.style.display="block"
    imglon.style.display="none"

    html.style.backgroundColor = "gray";
}