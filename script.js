
    var passwordInput = document.querySelector('.password-input');
    var passwordButton = document.querySelector('.password-button');
    var contentContainer = document.querySelector('.content-container');

    var password = atob('c3Vic2NyaWJldG9hZGRlZGZhc3Q=');

    passwordButton.addEventListener('click', function() {
      if (passwordInput.value === password) {
        contentContainer.style.display = 'block';
        document.querySelector('.password-container').style.display = 'none';
      } else {
        alert('Incorrect password. Please try again.');
      }
    });

    function handlePhotoClick(event) {
      var overlay = document.querySelector('.overlay');
      var enlargedImage = document.querySelector('.enlarged-image');
      var caption = document.querySelector('.caption');
      
      overlay.style.display = 'flex';
      enlargedImage.src = event.target.src;
      caption.textContent = '';
    }
    
    function handleOverlayClick() {
      var overlay = document.querySelector('.overlay');
      overlay.style.display = 'none';
    }
    
    var photos = document.querySelectorAll('.photo');
    photos.forEach(function(photo) {
      photo.addEventListener('click', handlePhotoClick);
    });
    
    var overlay = document.querySelector('.overlay');
    overlay.addEventListener('click', handleOverlayClick);
