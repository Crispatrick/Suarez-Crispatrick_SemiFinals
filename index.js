var bestworks = ["Git1/index.html", "Git/index.html"];
var bestworksIndex = 1;
let frame;

//Note = i do not know why, but it doesnt get read when you initialized it outside, and what i did is basically the same as initializing it each time.
let name;

function changebestwork() {
    framebestwork.src = bestworks[bestworksIndex];
    frame = document.getElementById("framebestwork");
    name = document.getElementById("nameofsite");

    //console.log("testing")
    if (bestworksIndex == 1) {
      name.href = "Git/index.html";
      name.innerHTML = "See all of Suarez Merch";  
      
    }else if (bestworksIndex == 0){
      name.href = "Git1/index.html"; 
      name.innerHTML = "See all of Crisite";
    }
    
    bestworksIndex++;
    
    if (bestworksIndex >= bestworks.length) {
      bestworksIndex = 0;
     
    }
  }
  
  

  function switchFrame(){
    name = document.getElementById("nameofsite");

    
    bestworksIndex = 0;
    framebestwork.src = bestworks[bestworksIndex];
    name.href = "Git1/index.html"; 
    name.innerHTML = "See all of Crisite";
  }
  
  function switchFrame1(){
    name = document.getElementById("nameofsite");

    bestworksIndex = 1;
    framebestwork.src = bestworks[bestworksIndex];
    name.href = "Git/index.html";
    name.innerHTML = "See all of Suarez Merch"; 
  }





  var honorray = ["Html/ITC122_Act_39_to_46_Suarez_Crispatrick_C.html", "Html/ITC122_Act_32_to_38_Suarez_Crispatrick_C.html"];
  var honorIndex = 1;
  let nameHonor;

  function changehonor() {
    //Notes = The bug was these guys and they are not loaded yet. it seems that the functions gets loaded first rather than the outside variables therefore I included them inside the function, now it works!! Good job me.
    var frameHonor = document.getElementById("frameHonorable");
    nameHonor = document.getElementById("nameofsiteHonor");
    
    frameHonorable.src = honorray[honorIndex]; 


    if (honorIndex == 1){
      //console.log("testing")
      nameHonor.href="test";  
      nameHonor.innerHTML = "See all of Calendar";   
       
    }
    else if (honorIndex == 0){
      nameHonor.href = "Html/ITC122_Act_39_to_46_Suarez_Crispatrick_C.html"; 
      nameHonor.innerHTML = "See all of Login";

      
    }

    
    honorIndex++;
    
    if (honorIndex >= honorray.length) {
      honorIndex = 0;
     
    }
  }
  

  function switchFrame3(){
    nameHonor = document.getElementById("nameofsiteHonor");

    honorIndex = 0;
    frameHonorable.src = honorray[honorIndex];
    nameHonor.href = "Html/ITC122_Act_39_to_46_Suarez_Crispatrick_C.html"; 
    nameHonor.innerHTML = "See all of Login";


    
  }
  
  function switchFrame4(){
    nameHonor = document.getElementById("nameofsiteHonor");
    
    honorIndex = 1;
    frameHonorable.src = honorray[honorIndex];
    nameHonor.href="test";  
    nameHonor.innerHTML = "See all of Calendar";   
  }


  //console.log("testing") 
  //Notes = Apparently, because of the setInterval, the code that resides with it does not get read. so I stored it inside a function rather than outside, in order for the codes outside to still work
  function pullTheLeverKronk() {
    setInterval(changebestwork, 5000);
    setInterval(changehonor, 5000);     
  }
  //console.log("testing")
  pullTheLeverKronk();
  //console.log("testing")
  

  

  
  