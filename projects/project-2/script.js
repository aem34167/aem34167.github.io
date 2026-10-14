    // Perform this after the window has loaded
    window.onload = () => {
      // First, tell JavaScript to remember which DOM element (in this case, a button) to reference (by id)
      const toggleNavBtn = document.getElementById('toggle-nav-btn');
      toggleNavBtn.innerHTML = '&#9776;';

      // Tell button to do something on click
      toggleNavBtn.addEventListener('click', () => {
        // toggle the body's class attribute
        document.body.classList.toggle('nav-open');
        toggleNavBtn.innerHTML = document.body.classList.contains('nav-open')
          ? '&#x2715'
          : '&#9776;';
      });
    };