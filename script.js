// function sleep(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
//   }
  
//   var str = 'synvcz';
//   document.title = '';
//   async function typewriteTitle() {
//     for (let i = 0; i < str.length; i++) {
//       document.title += str.charAt(i);
//       console.log(document.title); //debug only
//       await sleep(200);
//     }
//   }
//   typewriteTitle();

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  var str = 'synvcz';
  document.title = ''; // Ensure the title is cleared initially
  
  // Store the original title
  const originalTitle = document.title; 
  
  async function typewriteTitle() {
    while (true) { // Infinite loop
      // Typing the string forward
      for (let i = 0; i < str.length; i++) {
        document.title += str.charAt(i);
        console.log(document.title); // Debug only
        await sleep(250); // Adjusted sleep duration to 250ms
      }
  
      // Erasing the string backwards
      for (let i = str.length - 1; i >= 0; i--) {
        document.title = document.title.slice(0, i); // Remove last character
        console.log(document.title); // Debug only
        await sleep(250); // Adjusted sleep duration to 250ms
      }
  
      // After completing the erase cycle, ensure title is set explicitly
      document.title = originalTitle; // Reset title to the original
      await sleep(250); // Optional delay before starting again
    }
  }
  
  typewriteTitle(); // Start the function   


const audio = document.getElementById('myAudio');
const volumeSlider = document.getElementById('volume-slider');
const speakerIcon = document.getElementById('speaker-icon');

let previousVolume = 1;

// Initial volume
audio.volume = 1;
volumeSlider.value = 1;


// Slider
volumeSlider.addEventListener('input', function () {
    const volume = parseFloat(this.value);

    audio.volume = volume;

    if (volume > 0) {
        previousVolume = volume;
        audio.muted = false;

        speakerIcon.classList.remove('fa-volume-mute');
        speakerIcon.classList.add('fa-volume-up');
    } else {
        audio.muted = true;

        speakerIcon.classList.remove('fa-volume-up');
        speakerIcon.classList.add('fa-volume-mute');
    }
});


// Speaker button
speakerIcon.addEventListener('click', function () {

    // If currently audible → mute
    if (audio.volume > 0 && !audio.muted) {

        // Remember the volume
        previousVolume = audio.volume;

        // Set volume to 0
        audio.volume = 0;
        volumeSlider.value = 0;

        // Mute
        audio.muted = true;

        // Change icon
        speakerIcon.classList.remove('fa-volume-up');
        speakerIcon.classList.add('fa-volume-mute');

    } 
    
    // If muted → restore
    else {

        // Restore previous volume
        audio.volume = previousVolume;
        volumeSlider.value = previousVolume;

        // Unmute
        audio.muted = false;

        // Change icon
        speakerIcon.classList.remove('fa-volume-mute');
        speakerIcon.classList.add('fa-volume-up');
    }
});
