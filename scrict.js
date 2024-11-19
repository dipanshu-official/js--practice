 const move=document.querySelector(".center")
 move.addEventListener("mousemove" ,function(details) {
    const reactangle = move.getBoundingClientRect();
    const insider = details.clintX -reactangle.left

})

   