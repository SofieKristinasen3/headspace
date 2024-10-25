var images = [
    'img/hs-two-girls.jpg',
    'img/hs-buckethat-girls.jpg',
    'img/hs-haender.jpg',
    'img/hs-group-outside3.jpg',
    'img/hs-padel2.jpg',
    'img/hs-frivillige-grin2.jpg'
  ];
  
  var index = 0;
  
  var the_image_left = document.getElementById("left-image");
  var the_image = document.getElementById("main-image");
  var the_image_right = document.getElementById("right-image");
  
  the_image_left.src = images[4];
  the_image.src = images[0];
  the_image_right.src = images[1];

  
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
  