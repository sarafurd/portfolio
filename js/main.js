var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
var sidemeu = document.getElementById("sidemenu");

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }

    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

function openmenu() {
    sidemeu.style.right = "0";
}

function closemenu() {
    sidemeu.style.right = "-200px";
}

// const scriptURL = 'https://script.google.com/macros/s/AKfycbz-WU9XNT8Lvbezu9T_apdJZHVGZnqEaon96w2tqdfGc_BWON7PknqH2dRVJ6TOv6ws/exec'
// const form = document.forms['submit-to-google-sheet']

// form.addEventListener('submit', e => {
//     e.preventDefault()
//     fetch(scriptURL, { method: 'POST', body: new FormData(form) })
//         .then(response => console.log('Success!', response))
//         .catch(error => console.error('Error!', error.message))
// })