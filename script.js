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


// Get the audio element, volume slider, and speaker icon
const audio = document.getElementById('myAudio');
const volumeSlider = document.getElementById('volume-slider');
const speakerIcon = document.getElementById('speaker-icon');

// Set initial volume (optional)
audio.volume = volumeSlider.value;

// Add event listener to the volume slider
volumeSlider.addEventListener('input', function () {
    audio.volume = volumeSlider.value; // Update audio volume based on slider value

    // If the volume is very low, switch to muted speaker icon
    if (audio.volume <= 0.05) {
        speakerIcon.classList.remove('fa-volume-up');
        speakerIcon.classList.add('fa-volume-mute');
    } else {
        // If the volume is above 0.05, show the normal speaker icon
        speakerIcon.classList.remove('fa-volume-mute');
        speakerIcon.classList.add('fa-volume-up');
    }
});

// Function to toggle mute and change the icon
function toggleMute() {
    const audio = document.getElementById('myAudio');
    const speakerIcon = document.getElementById('speaker-icon');

    audio.muted = !audio.muted;

    if (audio.muted) {
        speakerIcon.classList.remove('fa-volume-up');
        speakerIcon.classList.add('fa-volume-mute');
    } else {
        speakerIcon.classList.remove('fa-volume-mute');
        speakerIcon.classList.add('fa-volume-up');
    }
}






