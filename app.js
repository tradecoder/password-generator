const value = document.getElementById('value');
value.textContent='YoUrPaSswoRd';
const generator = document.getElementById('generator');
const numbers = "1234567890".split('');
const alphab = [...Array(26)].map((_, y) => String.fromCharCode(y+65)); 
const alphas = [...Array(26)].map((_, y) => String.fromCharCode(y+97));
const symbols = ['~', '!', '#','*'];


const passwordElements = [...numbers, ...alphab, ...alphas, ...symbols];


generator.addEventListener('click', function(){
    let rawPass = [];
    
    for(let i=0; i<12; i++){
        let single = Math.floor(Math.random() * passwordElements.length);
        rawPass.push(passwordElements[single])
    }

    console.log(rawPass)
    value.textContent = rawPass.join('');
});
