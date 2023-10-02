window.addEventListener("mousemove",function(detail){

    var rect=this.document.querySelector('#rect');
   var location= gsap.utils.mapRange(0,window.innerWidth,100+rect.getBoundingClientRect().width/2,window.innerWidth-200,detail.clientX)
    gsap.to('#rect',{

        left:location,
        ease:Power3,

    }

)
});