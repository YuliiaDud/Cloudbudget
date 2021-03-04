document.querySelector('.button_mobile').onclick = function () {
    this.classList.toggle('active');
    document.querySelector('.mobile-menu').classList.toggle('active');
}

let overviewBtn = document.getElementById("overviewBtn");

overviewBtn.addEventListener('click', function () {
  let readBelow = document.getElementById("readBelow");
  let moreText = document.getElementById("more");

  if (readBelow.style.display === "none") {
    readBelow.style.display = "inline";
    overviewBtn.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    readBelow.style.display = "none";
    overviewBtn.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}
)

let featuresBtn = document.getElementsByClassName('more');
let text = document.getElementsByClassName('feature-text');
for (let i = 0; i < featuresBtn.length; i++) {
    const btn = featuresBtn[i];
    btn.onmouseover = function () {
        if (text[i].style.display == "none") {
            text[i].style.display = "block";
            btn.innerHTML = "Read less";
        } else {
            text[i].style.display = "none"
            btn.innerHTML = "Read more";
        }
        
    }
    
}
let inputs = document.getElementsByTagName('input');
let dialog = document.querySelector('dialog');
document.querySelector('#show').onclick = function() {
    dialog.show();
    for (const input of inputs) {
        input.value = "";
    }
    return false;
};
document.querySelector('#close').onclick = function() {
    dialog.close();
    return false;
};
