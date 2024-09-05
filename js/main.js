'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const showDialogButton = document.getElementById('show-dialog');
  const dialog = document.getElementById('register-dialog');
  const closeDialogButton = document.getElementById('close-dialog');

  // Open the dialog when the button is clicked
  showDialogButton.addEventListener('click', () => {
      dialog.showModal();
  });

  // Close the dialog when the close button is clicked
  closeDialogButton.addEventListener('click', () => {
      dialog.close();
  });
});


document.getElementById("show-dialog").addEventListener("click", function() {
  document.getElementById("register-dialog").showModal();
});

document.getElementById("close-dialog").addEventListener("click", function() {
  document.getElementById("register-dialog").close();
});
