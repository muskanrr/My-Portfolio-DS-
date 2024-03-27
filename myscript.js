window.onload = function() {
    console.log("window page ");
    var alert = document.getElementById('welcomeAlert');
    alert.classList.add('show');

    var alertElement = document.querySelector('.alert');
    setTimeout(function() {
        alertElement.remove();
    }, 1000); // 1000 milliseconds = 1 seconds
};


document.getElementById('contactButton').addEventListener('click', function() {
    var contactSection = document.getElementById('contact');
    var successAlert = `
        <div class="alert alert-success alert-dismissible fade show" role="alert">
              Get in Touch
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>`;
    contactSection.insertAdjacentHTML('beforebegin', successAlert);

    var alertElement = document.querySelector('.alert');
    setTimeout(function() {
        alertElement.remove();
    }, 1000); // 1000 milliseconds = 1 seconds
});


document.getElementById('portfolioButton').addEventListener('click', function() {
    var portfolioSection = document.getElementById('portfolio');
    var infoAlert = `
        <div class="alert alert-info alert-dismissible fade show" role="alert">
            Check out our amazing portfolio!
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>`;
    portfolioSection.insertAdjacentHTML('beforebegin', infoAlert);

    var alertElement = document.querySelector('.alert');
    setTimeout(function() {
        alertElement.remove();
    }, 2000); // 1000 milliseconds = 1 seconds
});

document.getElementById('aboutButton').addEventListener('click', function() {
   
    var aboutSection = document.getElementById('aboutAlert');
    var infoAlert = `<div class="alert alert-dark alert-dismissible fade show" role="alert">Know about me<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>`;

    aboutSection.insertAdjacentHTML('beforebegin', infoAlert);

    var alertElement = document.querySelector('.alert');
    setTimeout(function() {
        alertElement.remove();
    }, 3000); // 1000 milliseconds = 1 seconds
});