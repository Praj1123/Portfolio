import emailjs from '@emailjs/browser';

emailjs.init({
    publicKey: 'ulMcOi-pq3Obp2MSG',
    // Do not allow headless browsers
    blockHeadless: true,
    blockList: {
        // Block the suspended emails
        list: ['foo@emailjs.com', 'bar@emailjs.com'],
        // The variable contains the email address
        watchVariable: 'userEmail',
    },
    limitRate: {
        id: 'app',
        throttle: 10000,
    },
});

export let sendEmail = (formData) => {
    return emailjs.send('service_wuyco2r', 'template_soqq8qu', formData).then(
        (response) => {
            console.log('SUCCESS!', response.status, response.text);
            return { status: 'success' };
        },
        (error) => {
            console.log('FAILED...', error);
            return { status: 'error' };
        },
    );
}



const allElements = document.querySelectorAll('*'); // Get all elements in the page

allElements.forEach((element) => {
  const color = window.getComputedStyle(element).getPropertyValue('color');
  if (color === 'rgb(255, 255, 255)' || color === '#ffffff' || color === 'white') {
    element.style.color = 'black'; // Set color to black
  }
});
console.log(allElements)

document.querySelectorAll('*').forEach(element => element.style.color = window.getComputedStyle(element).getPropertyValue('color') === 'white' ? 'black' : element.style.color);