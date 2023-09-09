
function State(){
   
    this.container = null;
    this.btnClose = null;
}

const state = new State();

export const init = () => {
    state.container = document.querySelector("#modal-contact");
    state.btnClose = document.querySelector("#modal-contact-close");

    state.btnClose.addEventListener('click', handleBtnCloseClick);
    state.container.addEventListener('click', handleClickOutsideChange);
}

export const showModal = () => {
    state.container.classList.add("active");
}

export const closeModal = () => {
    state.container.classList.remove("active");
}

const handleBtnCloseClick = (event) => {
    event.preventDefault();
    closeModal();
}

function handleClickOutsideChange(event) {
    event.preventDefault();
    if (event.target === this) {
        closeModal();
    }
}

