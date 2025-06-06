// FORMULARIO: Validación + mensaje personalizado
document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.getElementById("formulario-contacto");
    const mensajeRespuesta = document.getElementById("mensaje-respuesta");
  
    formulario.addEventListener("submit", function (e) {
      e.preventDefault(); 
  
      const nombre = document.getElementById("nombre").value.trim();
      const email = document.getElementById("email").value.trim();
      const asunto = document.getElementById("asunto").value.trim();
      const mensaje = document.getElementById("mensaje").value.trim();
  
      if (!nombre || !email || !asunto || !mensaje) {
        alert("Por favor, completá todos los campos.");
        return;
      }
  
      if (!validarEmail(email)) {
        alert("Ingresá un email válido.");
        return;
      }
  
      const mensajeFinal = `Gracias ${nombre} por contactarte por ${asunto}. Te responderemos pronto.`;
      mensajeRespuesta.textContent = mensajeFinal;
      mensajeRespuesta.style.marginTop = "1rem";
      mensajeRespuesta.style.color = "#d77b5e";
      mensajeRespuesta.style.fontWeight = "bold";
  
      // formulario.submit();
    });
  
    function validarEmail(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
  });
  
  const descuentoInput = document.getElementById("descuento");
  const precioOriginal = 8000;
  const precioFinal = document.getElementById("precio-final");
  
  descuentoInput.addEventListener("input", () => {
    const porcentaje = parseFloat(descuentoInput.value);
  
    if (isNaN(porcentaje) || porcentaje < 0 || porcentaje > 100) {
      precioFinal.textContent = precioOriginal.toFixed(2);
      return;
    }
  
    const nuevoPrecio = precioOriginal * (1 - porcentaje / 100);
    precioFinal.textContent = nuevoPrecio.toFixed(2);
  });
const header = document.getElementById("main-header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
