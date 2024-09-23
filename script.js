const initKey = "aUfuszg9ypvjy3WN4"
emailjs.init(initKey); // init the emailJS

const sendBTN = document.querySelector('.send'); // get the elements
const result = document.querySelector('.result');

sendBTN.addEventListener('click', sendEmail) // add click event

function sendEmail() {
    // get the form data
    const to = document.getElementById('to').value;
    const subject = document.getElementById('subject').value;
    const msg = document.getElementById('msg').value;

    // send
    const server = "service_nrrr89e"
    const templateId = "template_y491wio"
    emailjs.send(server, templateId, {
        to_email: to,
        subject: subject,
        message: msg
    }).then(() => {
        result.innerHTML = "Seu email foi enviado com sucesso!";
        result.style.opacity = 1;
    }, (error) => {
        result.innerHTML = "O seu email teve um problema durante o processo de envia-lo!";
        result.style.opacity = 1;
        console.log(error);
    });
};