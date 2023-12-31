import '../styles/contact.css';


const createContactPage = () => {
    const contactPage = document.createElement('div');
    contactPage.classList.add('page');
    contactPage.classList.add('contact');
    const CTA = document.createElement('div');
    CTA.textContent = "Feel free to reach out to us through the following channels";
    CTA.classList.add('CTA');

    contactPage.appendChild(CTA);
    document.body.appendChild(contactPage);
    addInfo(contactPage);
}

const addInfo = (contactPage) => {
    const info = document.createElement('div');
    info.classList.add('info');


    //Phone
    const phone = document.createElement('div');
    phone.textContent="Phone:"
    phone.classList.add('title');
    const phoneText = document.createElement('div');
    phoneText.textContent="For reservations or general inquiries, call us at +91 02226157259. Our friendly staff is ready to assist you during our business hours.";
    phoneText.classList.add('text');
    phone.appendChild(phoneText);
    info.appendChild(phone);


    //Address
    const address = document.createElement('div');
    address.textContent="Address:"
    address.classList.add('title');
    const addressText = document.createElement('div');
    addressText.innerHTML=`Street: Old Airport, Santacruz (e)<br>
    City: Mumbai<br>
    State: Maharashtra<br>
    Zip code: 400029`;
    addressText.classList.add('text');
    address.appendChild(addressText);
    info.appendChild(address);

    //email
    const email = document.createElement('div');
    email.textContent="Email:"
    email.classList.add('title');
    const emailText = document.createElement('div');
    emailText.textContent=`Have a question or suggestion? Drop us an email at konkanonplate@gmail.com. We appreciate your thoughts and are committed to providing you with the best dining experience.`;
    emailText.classList.add('text');
    email.appendChild(emailText);
    info.appendChild(email);

    //socials
    const icons = document.createElement('div');
    icons.classList.add('icons');
    icons.innerHTML = `<i class="fa-brands fa-instagram"></i>
                       <i class="fa-brands fa-facebook"></i>
                       <i class="fa-brands fa-twitter"></i>
                       <a href="https://github.com/Oreniscool"><i class="fa-brands fa-github"></i></a>`;
    info.appendChild(icons);

    contactPage.appendChild(info);
}

export {createContactPage};