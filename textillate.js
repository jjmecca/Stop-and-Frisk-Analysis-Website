$('#target').textillate({
    initialDelay: 100,
      in: {
          effect: 'fadeInLeft', // Animation effect for text appearing
          delayScale: 1, // Delay scale for each character
          delay: 70, // Delay in milliseconds between each character
          shuffle: false // Shuffle the character animation order
      },
      loop: false // Loop the animation
  });
$('#target2').textillate({
initialDelay: 500,
    in: {
        effect: 'fadeInLeft', // Animation effect for text appearing
        delayScale: 1, // Delay scale for each character
        delay: 80, // Delay in milliseconds between each character
        shuffle: false // Shuffle the character animation order
    },
    loop: false // Loop the animation
});