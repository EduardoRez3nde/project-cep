import * as modalController from "../controllers/modal-controller.js";

export const init = () => {

    const contactLink = document.querySelector(".contact-link");
    contactLink.addEventListener('click', handleContactLinkClick);
    console.log("page controller");
}

const handleContactLinkClick = (event) => {
    event.preventDefault();
    modalController.showModal();
}