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


// Get audio elements
const audio = document.getElementById('myAudio');
const volumeSlider = document.getElementById('volume-slider');
const speakerIcon = document.getElementById('speaker-icon');

// Initial volume
audio.volume = volumeSlider.value;

// Volume slider
volumeSlider.addEventListener('input', function () {
    audio.volume = this.value;

    if (audio.volume <= 0.05) {
        audio.muted = true;
        speakerIcon.classList.remove('fa-volume-up');
        speakerIcon.classList.add('fa-volume-mute');
    } else {
        audio.muted = false;
        speakerIcon.classList.remove('fa-volume-mute');
        speakerIcon.classList.add('fa-volume-up');
    }
});

// Speaker button
speakerIcon.addEventListener('click', function () {
    audio.muted = !audio.muted;

    if (audio.muted) {
        speakerIcon.classList.remove('fa-volume-up');
        speakerIcon.classList.add('fa-volume-mute');
    } else {
        speakerIcon.classList.remove('fa-volume-mute');
        speakerIcon.classList.add('fa-volume-up');
    }
});
