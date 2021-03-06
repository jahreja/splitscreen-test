
document.addEventListener("DOMContentLoaded", function(){
    let wrapper = document.getElementById("wrapper");
    let topLayer = wrapper.querySelector(".top");
    let handle = wrapper.querySelector(".handle");
    let handleHoz = wrapper.querySelector(".handle-hoz");

    wrapper.addEventListener("mousemove", function(e){
    
        handle.style.left = e.clientX + "px";
        handleHoz.style.top = e.clientY + "px";

        topLayer.style.width = e.clientX + "px";
        topLayer.style.height = e.clientY + "px";

    });
});

