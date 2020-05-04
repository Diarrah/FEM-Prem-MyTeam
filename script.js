// About Me Page Flip:
let crossButtons = document.querySelectorAll('.btn-flip');

crossButtons.forEach(button => button.addEventListener('click', toggle));

function toggle(){
    this.parentElement.classList.toggle('turnCard');
    this.children[0].classList.toggle('turnBtn');  
};
