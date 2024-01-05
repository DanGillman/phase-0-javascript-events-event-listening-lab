function addingEventListener() {
    const button = document.querySelector('#button'); // Select the button element by its ID
  
    button.addEventListener('click', function() { // Bind a 'click' event listener
      return true; // Function that returns true when the button is clicked
    });
  }