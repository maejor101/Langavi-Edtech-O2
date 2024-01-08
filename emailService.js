

const publicKey = 'lykP1PnEoJWU26pSy';
const serviceID = "service_2suib3n";
const templateID = 'template_w1z69qn';

emailjs.init(publicKey);

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    emailjs.sendForm(serviceID, templateID, this)
      .then(function(response) {
        console.log('Email sent successfully', response);
        alert('Email sent successfully');

      }, function(error) {
        console.error('Error sending email', error);
        alert('Error sending email');

      });
  });


