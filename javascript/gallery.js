
//selve arrayet indeholdende billederne som har stier til image mappen
var images = [
    'img/hs-two-girls.jpg',
    'img/hs-buckethat-girls.jpg',
    'img/hs-haender.jpg',
    'img/hs-group-outside3.jpg',
    'img/hs-padel2.jpg',
    'img/hs-frivillige-grin2.jpg'
  ];
  
  //var index som er 0, da arrayet starter i 0, som er tilsvarende til det første billede i arrayet
  var index = 0;
  
  //DOM elementer som gemmer HTML elementer for left, main og right image
  //de går ind i HTML'en og identificerer ved elementernes id-attributter
  var the_image_left = document.getElementById("left-image");
  var the_image = document.getElementById("main-image");
  var the_image_right = document.getElementById("right-image");
  
  //de billeder som arrayet starter med at have (desktop)
  the_image_left.src = images[5];
  the_image.src = images[0];
  the_image_right.src = images[1];

 //funktion der bestemmer retningen af billederne og opdaterer index løbende 
  function show_image(direction)
  {
    if (direction == "left")
    {
      index--;
    }
    else
    {
      index++;
      index %= images.length;
    }
    
    if (index < 0)
    {
      index = images.length - 1;
    }
    
    the_image.src = images[index];
    
    var left_index = (index - 1 + images.length) % images.length;
    the_image_left.src = images[left_index];
    
    var right_index = (index + 1) % images.length;
    the_image_right.src = images[right_index];
  }

//får billederne til at skifte efter 3 sekunder 
  setInterval(function() {
    show_image("right"); 
}, 3000);
  