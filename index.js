document.addEventListener( 'DOMContentLoaded' ,() =>{

const app = document.createElement('div')
app.innerHTML =` 
<div class="title">
 <h1>Bienvenido!</h1>   
<div class="h3">
    <h3>Escanea el codigo QR para dirigirte a mi portfolio</h3>
    <div class="image">
    <img src='./IMG/frame.png' alt="QR"></img>
    </div>
    <div class="p">
    <p>o si no apretando click aquí visitaras <a href="https://portafoliomilermirko.netlify.app/">MI PORTAFOLIO</a></p>
</div>
</div>
`
document.body.appendChild(app)
})

