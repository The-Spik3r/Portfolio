window.addEventListener('load', () =>{
    var loading = document.getElementById('loading');
    loading.style.display = 'none';     
    loading.style.display = 'block'; 
    setTimeout(function() {
      loading.style.display = 'none';
    }, 2000);
});
const texto = "You can select the option you want to know.";
let index = 0;
const speed = 50;

function escribir() {
  if (index < texto.length) {
    document.getElementById("texto-maquina").innerHTML += texto.charAt(index);
    index++;
    setTimeout(escribir, speed);
  }
}

escribir();

  