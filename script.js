// Function to play or pause audio and animate the progress bar
function playAudio(audioSrc, progressBarId) {
  const audioPlayer = document.getElementById('audio-player');
  const progressBar = document.getElementById(progressBarId);

  // If the same audio is already playing, pause it
  if (audioPlayer.src.includes(audioSrc) && !audioPlayer.paused) {
    audioPlayer.pause();
    clearInterval(audioPlayer.progressInterval); // Stop updating the progress bar
  } else {
    // If a new audio is selected or the audio was paused, set the source and play
    if (!audioPlayer.src.includes(audioSrc)) {
      audioPlayer.src = audioSrc; // Set the audio source
    }
    audioPlayer.play(); // Resume or start playing

    // Reset and animate the progress bar
    progressBar.style.width = '0'; // Reset progress bar width
    clearInterval(audioPlayer.progressInterval); // Clear any existing interval
    audioPlayer.progressInterval = setInterval(() => {
      const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100; // Calculate progress percentage
      progressBar.style.width = progress + '%'; // Update progress bar width
      if (audioPlayer.ended) {
        clearInterval(audioPlayer.progressInterval); // Stop updating when audio ends
      }
    }, 100); // Update every 100ms
  }
}
