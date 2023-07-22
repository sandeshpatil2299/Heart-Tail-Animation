const bodyEl= document.querySelector("body");

bodyEl.addEventListener("mousemove", (event) =>
{
   const xPos= event.offsetX;
   const yPos= event.offsetY;
   const size= Math.round(Math.random() * 100);
   const spanEl= document.createElement("span");
   spanEl.style.left= xPos + "px";
   spanEl.style.top= yPos + "px";

   spanEl.style.width= size + "px";
   spanEl.style.height= size + "px";
   bodyEl.appendChild(spanEl);

   setTimeout(() =>
   {
      spanEl.remove();
   }, 3000);
})