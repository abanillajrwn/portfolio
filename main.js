const discrip = document.querySelector('.proj-discrpt');
const projImg = document.querySelector('.proj-img');
const link = document.querySelector('.title');
const expContent = document.querySelector('.exp-content');


projImg.addEventListener('mouseleave', () =>{
    discrip.style.display = "block";
});

//project one
document.getElementById('content-one').addEventListener('mouseover', () => {
    document.getElementById('go-proj-one').style.fontSize = '15px';
    document.getElementById('go-proj-one').style.color = 'rgb(66, 176, 219)';

})
projImg.addEventListener('mouseover', () =>{
    discrip.style.display = "none";

});
projImg.addEventListener('mouseleave', () =>{
    discrip.style.display = "block";
});

document.getElementById('content-one').addEventListener('mouseleave', () => {
    document.getElementById('go-proj-one').style.fontSize = '10px';
    document.getElementById('go-proj-one').style.color = 'hsl(225, 100%, 95%)';
    
})

document.getElementById('content-one').addEventListener("click", function(event) {
    event.preventDefault(); // Prevents the default behavior of the link
    window.open("https://github.com/abanillajrwn/mikmon-hotspot-template", "_blank"); // Opens the link in a new tab
});

//project two
document.getElementById('content-two').addEventListener('mouseover', () => {
    document.getElementById('go-proj-two').style.fontSize = '15px';
    document.getElementById('go-proj-two').style.color = 'rgb(66, 176, 219)';

})
document.getElementById('content-two').addEventListener('mouseleave', () => {
    document.getElementById('go-proj-two').style.fontSize = '10px';
    document.getElementById('go-proj-two').style.color = 'hsl(225, 100%, 95%)';
    
})
document.getElementById('content-two').addEventListener("click", function(event) {
    event.preventDefault(); // Prevents the default behavior of the link
    window.open("https://github.com/abanillajrwn/grading-system-proj", "_blank"); // Opens the link in a new tab
});

document.querySelector('.proj-two-img').addEventListener('mouseover', () => {
    document.querySelector('.proj-two-discrpt').style.display = 'none';
})
document.querySelector('.proj-two-img').addEventListener('mouseout', () => {
    document.querySelector('.proj-two-discrpt').style.display = 'block';
})

//archive

document.querySelector('.archive').addEventListener('mouseover', () =>{
    document.querySelector('#arrow-right').style.left = '15px';
    document.querySelector('#arrow-right').style.color = 'rgb(66, 176, 219)';
    document.querySelector('#go-home').style.color = 'rgb(66, 176, 219)';
})
document.querySelector('.archive').addEventListener('mouseout', () =>{
    document.querySelector('#arrow-right').style.left = '8px';
    document.querySelector('#arrow-right').style.color = '#ccd6f6';
    document.querySelector('#go-home').style.color = '#ccd6f6';
})
