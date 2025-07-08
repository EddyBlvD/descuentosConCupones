const button = document.getElementById("aplicarCuponBtn");
const imgchange = document.getElementById("discount-image-off");
const inputCupon = document.getElementById("inputCupon");
const mensaje = document.getElementById("mensaje");
const imagen = document.getElementById("imgCupon");
const precio = document.getElementById("precioReal");
const precioDescuento = document.getElementById("precioDescuento");

const precioOriginal = 13999;

//Cupones disponibles
const cupones = {
	PROMO20: { descuento: 0.2, imagen: "./sources/20-por-ciento.png" },
	PROMO35: { descuento: 0.35, imagen: "./sources/35-por-ciento.png" },
	PROMO50: { descuento: 0.5, imagen: "./sources/50-por-ciento.png" },
};

button.addEventListener("click", () => {
	const valorIngresado = inputCupon.value.trim().toUpperCase();

	if (cupones.hasOwnProperty(valorIngresado)) {
		const { descuento, imagen: rutaImagen } = cupones[valorIngresado];
		const nuevoPrecio = precioOriginal * (1 - descuento);

		//Mostrar imagen y mensaje si el cupón es válido
		imagen.src = rutaImagen;
		imgchange.classList.add("discount-image-on");
		imgchange.classList.remove("discount-image-off");
		mensaje.textContent = "Cupon aplicado!";
		mensaje.style.color = "green";

		//Actualizar precios
		precioReal.innerHTML = `<del>$${precioOriginal.toFixed(2)} MXN</del>`;
		precioDescuento.textContent = `$${nuevoPrecio.toFixed(2)} MXN`;
	} else {
		// Cupón inválido
		mensaje.textContent = "Cupón inválido.";
		mensaje.style.color = "red";

		imgchange.classList.remove("discount-image-on");
		imgchange.classList.add("discount-image-off");
		imagen.src = ""; // Ruta vacía para no mostar imagen

		//Restaurar precio original
		precioReal.textContent = `$${precioOriginal.toFixed(2)} MXN`;
		precioDescuento.textContent = "";
	}
});
