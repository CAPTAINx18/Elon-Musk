function TouchSpace(object1, object2){
    if(object1.y - object2.y < (object1.height + object2.height)/2 && object2.y - object1.y < (object1.height + object2.height)/2 && object1.x - object2.x < (object1.width + object2.width)/2 && object2.x - object1.x < (object1.width + object2.width)/2){
       return true;
    }
  
    else{
      return false;
    }
  }
  
  function combine(object1, object2){
    if(object1.y - object2.y < (object1.height + object2.height)/2 && object2.y - object1.y < (object1.height + object2.height)/2 && object1.x - object2.x < (object1.width + object2.width)/2 && object2.x - object1.x < (object1.width + object2.width)/2){
      object2.setVelocity(0, 0);
  
   }
  
   else{
     return false;
   }
  }
  
  function Bounceoff(object1, object2){
    if(object1.x - object2.x < (object1.width + object2.width)/2 && object2.x - object1.x < (object1.width + object2.width)/2){
      object2.velocityX = (-1) * object2.velocityX;
   }
  
   if(object2.y - object2.y < (object1.height + object2.height)/2 && object2.y - object1.y < (object1.height + object2.height)/2){
     object2.velocityY = (-1) * object2.velocityY;
   }
   
   else{
     return false;
   }
  }
  
  function Bounce(object1, object2){
    if(object1.x - object2.x < (object1.width + object2.width)/2 && object2.x - object1.x < (object1.width + object2.width)/2){
      temp = object1.velocityX;
      object1.velocityX = object2.velocityX;
      object2.velocityX = temp;
      //object1.velocityX = object2.velocityX;
      //object2.velocityX = object1.velocityX;
   }
  
   if(object1.y - object2.y < (object1.height + object2.height)/2 && object2.y - object1.y < (object1.height + object2.height)/2){
    temp = object1.velocityY;
    object1.velocityY = object2.velocityY;
    object2.velocityY = temp;
   }
  
   else{
     return false;
   }
  }
  
  
  