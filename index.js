document.addEventListener( 'DOMContentLoaded' ,() =>{

const app = document.createElement('div')
app.innerHTML =` 
<div>
 <title>Bienvenido!</title>   
<div>
    <h1>Escanea el codigo QR para dirigirte a mi portfolio</h1>
    <img src='./IMG/frame.png' alt="QR"></img>
    <p>o si no visita <a href="https://portafoliomilermirko.netlify.app/">MI PORTAFOLIO</a></p>
</div>
</div>
`
document.body.appendChild(app)
})

