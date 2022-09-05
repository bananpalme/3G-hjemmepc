console.log('hejsa')
let hvalDiv = document.querySelector('#hvaler')
let proDiv = document.querySelector('#cspro')
proDiv.style.top = 0
hvalDiv.style.opacity = 0

document.querySelector('#hvaler h2').addEventListener('click', () => {
    if(hvalDiv.style.top == '90vh'){
        hvalDiv.style.top = 0;
    }else{
        hvalDiv.style.top = '90vh'
    }
})
document.querySelector('#cspro h2').addEventListener('click', () => {
    if(proDiv.style.top == '80vh'){
        proDiv.style.top = 0
        hvalDiv.style.opacity = 0;
    }else{
        hvalDiv.style.opacity = 1;
        proDiv.style.top = '80vh'
    }
})

document.querySelector('#submitH').addEventListener('click', () => {
    fetch('http://localhost:4040/api/hvaler')
        .then(res => res.json())
            .then(json => document.querySelector('#hvaler .json').innerHTML = JSON.stringify(json))
})
document.querySelector('#submitC').addEventListener('click', () => {
    fetch('http://localhost:4040/api/cspro')
        .then(res => res.json())
            .then(json => document.querySelector('#cspro .json').innerHTML = JSON.stringify(json))
})