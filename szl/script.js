let images=['bjk.png','bvb.png','gs.png','rm.png','ts.png','fb.jpg']

function play(){
    let rndm1=images[Math.floor(Math.random()*images.length)]
    let rndm2=images[Math.floor(Math.random()*images.length)]
    let rndm3=images[Math.floor(Math.random()*images.length)]

    document.getElementById("l1").src=rndm1;
    document.getElementById("l2").src=rndm2;
    document.getElementById("l3").src=rndm3;

 if(rndm1==rndm2==rndm3){
    document.getElementById("yz").value=("şampiyon oldunuz");
 }



}