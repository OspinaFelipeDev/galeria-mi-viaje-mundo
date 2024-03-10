'use strict';

var datos = {
	fotos: {
		america: [
			{
				id: 1,
				nombre: 'Plaza de toros: Las ventas',
				descripcion:
					'Las Ventas es el nombre que se le dio a la plaza de toros de Madrid porque así se llamaba la zona en la que se sitúa. Actualmente tiene una capacidad para 23.798 espectadores, aunque en taquillas hay disponibles 23.624 entradas. Es la plaza de toros más grande de España',
				ruta: './img/madrid/11.jpg',
			},
			{
				id: 2,
				nombre: 'Wanda Metropolitano',
				descripcion:
					'El Estadio Metropolitano, conocido actualmente como Estadio Cívitas Metropolitano por motivos de patrocinio, es un recinto deportivo propiedad del Club Atlético de Madrid, situado en el barrio de Rosas, distrito de San Blas-Canillejas, en Madrid, España.',
				ruta: './img/madrid/12.jpg',
			},
			{
				id: 3,
				nombre: 'Plaza Mayor de Madrid',
				descripcion:
					'La plaza Mayor está situada en el centro de Madrid, en el barrio de Sol, junto a la calle Mayor y a 300 metros de la Puerta del Sol.',
				ruta: './img/madrid/13.jpg',
			},
			{
				id: 4,
				nombre: 'Plaza Mayor de Madrid',
				descripcion:
					'La plaza Mayor está situada en el centro de Madrid, en el barrio de Sol, junto a la calle Mayor y a 300 metros de la Puerta del Sol.',
				ruta: './img/madrid/14.jpg',
			},
			{
				id: 5,
				nombre: 'Estadio Santiago Bernabeu',
				descripcion:
					'El Estadio Santiago Bernabéu es un recinto deportivo propiedad del Real Madrid Club de Fútbol, situado en pleno paseo de la Castellana, en el distrito de Chamartín de Madrid, España. Se inauguró el 14 de diciembre de 1947 y su aforo actualmente es de 81 044 espectadores. El estadio está catalogado por la UEFA con la máxima distinción, «estadio de élite».',
				ruta: './img/madrid/15.jpg',
			},
			{
				id: 6,
				nombre: 'Estadio Santiago Bernabeu',
				descripcion:
					'El Estadio Santiago Bernabéu es un recinto deportivo propiedad del Real Madrid Club de Fútbol, situado en pleno paseo de la Castellana, en el distrito de Chamartín de Madrid, España. Se inauguró el 14 de diciembre de 1947 y su aforo actualmente es de 81 044 espectadores. El estadio está catalogado por la UEFA con la máxima distinción, «estadio de élite».',
				ruta: './img/madrid/16.jpg',
			},
			{
				id: 7,
				nombre: 'Parque El Retiro',
				descripcion:
					'El parque del Retiro o parque del Buen Retiro, popularmente conocido como El Retiro, es un jardín histórico y parque público situado en Madrid (España). Considerado como una de las principales atracciones turísticas, posee figuras arquitectónicas y paisajísticas desde el siglo xvii al xxi, entre los que destacan el Monumento a Alfonso XII, el Palacio de Cristal, el Estanque Grande, el Parterre, la puerta de Felipe IV, el Real Observatorio Astronómico y la fuente de la Alcachofa; e incluso anteriores, como la ermita de San Pelayo y San Isidoro, de origen románico.',
				ruta: './img/madrid/17.jpg',
			},
			{
				id: 8,
				nombre: 'Estadio Santiago Bernabeu',
				descripcion:
					'El Estadio Santiago Bernabéu es un recinto deportivo propiedad del Real Madrid Club de Fútbol, situado en pleno paseo de la Castellana, en el distrito de Chamartín de Madrid, España. Se inauguró el 14 de diciembre de 1947 y su aforo actualmente es de 81 044 espectadores. El estadio está catalogado por la UEFA con la máxima distinción, «estadio de élite».',
				ruta: './img/madrid/18.jpg',
			},
			{
				id: 9,
				nombre: 'Palacio Real de Madrid',
				descripcion:
					'El Palacio Real de Madrid es el más grande de Europa Occidental y uno de los más grandes del mundo. Sus más de 135.000 metros cuadrados y 3.418 habitaciones han sido testigos de siglos de la historia de España. Es una de las pocas residencias oficiales de Jefes de Estado que está abierta al público. Casi 2 millones de visitantes vienen cada año a descubrir sus rincones, sus obras de arte y sus tesoros únicos en el mundo.',
				ruta: './img/madrid/19.jpg',
			},
			{
				id: 10,
				nombre: 'Templo de Debod',
				descripcion:
					'Este impresionante templo egipcio con 2200 años de antigüedad llegó a Madrid como un regalo de Egipto por la colaboración del gobierno en la preservación de varios templos en Nubia.',
				ruta: './img/madrid/20.jpg',
			},
		],
		europa: [
			{
				id: 11,
				nombre: 'Sagrada Familia',
				descripcion:
					'Es la obra maestra de Gaudí y el máximo exponente de la arquitectura modernista catalana.',
				ruta: './img/barcelona/1.jpg',
			},
			{
				id: 12,
				nombre: 'Barceloneta',
				descripcion:
					'La playa de la Barceloneta tiene una longitud de 422 metros y es una de las playas más antiguas y con más tradición de la ciudad.',
				ruta: './img/barcelona/2.jpg',
			},
			{
				id: 13,
				nombre: 'Arco del triunfo',
				descripcion:
					'El Arco de Triunfo (del catalán: Arc de Triomf) es un monumento situado en la confluencia entre el paseo de Lluís Companys.',
				ruta: './img/barcelona/13.jpg',
			},
			{
				id: 14,
				nombre: 'Puerto Barcelona',
				descripcion:
					'El Port de Barcelona es el primer puerto de España para tráficos Internacionales.',
				ruta: './img/barcelona/4.jpg',
			},
			{
				id: 15,
				nombre: 'La Pedrera - Casa Milà',
				descripcion:
					'La Casa Milà, llamada popularmente La Pedrera («cantera» en catalán), es un edificio modernista​ obra del arquitecto Antoni Gaudí',
				ruta: './img/barcelona/5.jpg',
			},
			{
				id: 16,
				nombre: 'Playa Sant Miquel',
				descripcion:
					'La playa de Sant Miquel, una de las más concurridas de Barcelona, está situada junto a la plaza del mar, y tiene una longitud de unos 420 metros.',
				ruta: './img/barcelona/6.jpg',
			},
			{
				id: 17,
				nombre: 'Park Guell-Gaudi',
				descripcion:
					'Es un parque público con jardines y elementos arquitectónicos situado en la parte superior de la ciudad de Barcelona (España), en las estribaciones de la sierra de Collserola.',
				ruta: './img/barcelona/12.jpg',
			},
			{
				id: 18,
				nombre: 'Paella',
				descripcion:
					'La paella es una comida de plato único con base de arroz originaria de la región de Valencia, España, en la costa mediterránea',
				ruta: './img/barcelona/8.jpg',
			},
			{
				id: 19,
				nombre: 'Park Güell',
				descripcion:
					'Es un parque público con jardines y elementos arquitectónicos situado en la parte superior de la ciudad de Barcelona (España), en las estribaciones de la sierra de Collserola.',
				ruta: './img/barcelona/11.jpg',
			},
			{
				id: 20,
				nombre: 'Barcelona Sants',
				descripcion:
					'La Estación de Sans​​​​​​​​ o Barcelona-Sans es la principal estación de ferrocarril de la ciudad de Barcelona.',
				ruta: './img/barcelona/10.jpg',
			},
		],

		africa: [
			{
				id: 21,
				nombre: 'Castillo Ljubiana',
				descripcion:
					'El Castillo de Liubliana (en esloveno: Ljubljanski grad) es un castillo medieval sobre la llamada Colina del castillo, en Liubliana, Eslovenia.',
				ruta: './img/ljubiana/1.jpg',
			},
			{
				id: 22,
				nombre: 'Puente de los dragones',
				descripcion:
					'El Puente de los Dragones fue uno de los primeros puentes de hormigón armado en Europa y el primero en la ciudad de Liubliana',
				ruta: './img/ljubiana/2.jpg',
			},
			{
				id: 23,
				nombre: 'Puente de los dragones',
				descripcion:
					'El Puente de los Dragones fue uno de los primeros puentes de hormigón armado en Europa y el primero en la ciudad de Liubliana',
				ruta: './img/ljubiana/3.jpg',
			},
			{
				id: 24,
				nombre: 'Monumento Vodnik',
				descripcion:
					'Situado en la plaza Vodnik, justo en el medio del mercado del casco antiguo de Ljubljana. Está dedicado a un poeta. También tiene un verso de Vodnik en la parte posterior de la base del pedestal.',
				ruta: './img/ljubiana/4.jpg',
			},
			{
				id: 25,
				nombre: 'Iglesia en castillo Ljubiana',
				descripcion:
					'La catedral de Liubliana tiene un interior barroco con ricos decorados e impresionantes frescos ilusionistas en el techo.',
				ruta: './img/ljubiana/5.jpg',
			},
			{
				id: 26,
				nombre: 'Rio Ljubljanica',
				descripcion:
					'El Ljubljanica es un río esloveno que tiene su fuente cerca de Vrhnika. Atraviesa la ciudad capital de Eslovenia.',
				ruta: './img/ljubiana/6.jpg',
			},
			{
				id: 27,
				nombre: 'Castillo Ljubiana',
				descripcion:
					'El Castillo de Liubliana (en esloveno: Ljubljanski grad) es un castillo medieval sobre la llamada Colina del castillo, en Liubliana, Eslovenia.',
				ruta: './img/ljubiana/7.jpg',
			},
			{
				id: 28,
				nombre: 'Iglesia catolica Ljubiana',
				descripcion:
					'La catedral de Liubliana tiene un interior barroco con ricos decorados e impresionantes frescos ilusionistas en el techo.',
				ruta: './img/ljubiana/8.jpg',
			},
			{
				id: 29,
				nombre: 'Oficina correo Ljubiana',
				descripcion:
					'Terminado en 1896, el ocre coloreó el edificio capsulado por una bóveda windowed con un reloj rematado por un águila con las alas extendidas.',
				ruta: './img/ljubiana/9.jpg',
			},
			{
				id: 30,
				nombre: 'Estadio Stožice',
				descripcion:
					'Cuenta con capacidad máxima de 23 000, convirtiéndolo en el más grande del país. Tanto el club NK Olimpija Ljubljana como la selección nacional de fútbol de Eslovenia juegan sus partidos de local allí.',
				ruta: './img/ljubiana/10.jpg',
			},
		],
		asia: [
			{
				id: 31,
				nombre: 'Hoyo soplador',
				descripcion:
					'Fenómeno natural en el que un hoyo en la playa dispara agua del océano cuando hay marea fuerte.',
				ruta: './img/san-andres/1.jpeg',
			},
			{
				id: 32,
				nombre: 'Acuario',
				descripcion:
					'En este pequeño islote prepárate para disfrutar de la vista de peces de colores alrededor de tus pies sin necesidad de adentrarte en el mar profundo y de los hermosos tonos del paisaje. Toda una maravilla para los sentidos.',
				ruta: './img/san-andres/2.jpeg',
			},
			{
				id: 33,
				nombre: 'Jhony Kay',
				descripcion:
					'En medio del mar de San Andrés, después de las playas de Spratt Bight, se encuentra Johnny Cay, un pequeño islote rodeado de playas y palmeras donde grupos musicales entonan melodías antillanas.',
				ruta: './img/san-andres/3.jpg',
			},
			{
				id: 34,
				nombre: 'Playa Spratt Bight',
				descripcion:
					'Ubicada en la costa noreste y con 1,5 kilómetros de longitud, es una de las playas más extensas de la isla, más concurridas y bonitas. Arena blanca, el mar de los 7 colores y vistas a Johnny Cay a lo lejos.',
				ruta: './img/san-andres/4.jpeg',
			},
			{
				id: 35,
				nombre: 'La piscinita',
				descripcion:
					'Lugar popular para bucear entre acantilados que es famoso por sus aguas claras y serenas con peces tropicales.',
				ruta: './img/san-andres/5.jpg',
			},
			{
				id: 36,
				nombre: 'Playa Cocoplum',
				descripcion:
					'Alejada del centro, a unos 6 km al sur, la playa Cocoplum es una de las más bonitas de la isla. Tiene unos 700 metros de extensión, y quizás sea la playa más similar a lo que uno espera en una isla del caribe.',
				ruta: './img/san-andres/6.jpeg',
			},
			{
				id: 37,
				nombre: 'Playa Rocky Cay',
				descripcion:
					'La playa Rocky Cay es ideal para adentrarnos en el mar con el agua en la cintura. Aquí está el club de playa de los hoteles Decameron y hay algunos bares donde tomar algo o alquilar una reposera.',
				ruta: './img/san-andres/7.jpeg',
			},
			{
				id: 38,
				nombre: 'Mar de 7 colores',
				descripcion:
					'El mar de 7 colores se encuentra dentro de la Reserva de Seaflower declarada así por la UNESCO en el año 2000.',
				ruta: './img/san-andres/8.jpg',
			},
			{
				id: 39,
				nombre: 'Poseidon',
				descripcion:
					'Es la primera escultura instalada debajo del mar en Colombia. Se encuentra en el mar de San Andrés a 8m de profundidad',
				ruta: './img/san-andres/9.jpg',
			},
			{
				id: 40,
				nombre: 'Barco abandonado',
				descripcion:
					'Fue construido en 1892 y era un barco de carga y pasajeros que navegaba entre Colombia y Panamá.',
				ruta: './img/san-andres/10.jpg',
			},
		],
		oceania: [
			{
				id: 41,
				nombre: 'Bordeux',
				descripcion:
				'Centro de la famosa región vitivinícola, es una ciudad puerto en el río Garona en el suroeste de Francia.',
				ruta: './img/francia-italia/1.jpg',
			},
			{
				id: 42,
				nombre: 'Padua',
				descripcion:
				'Padua es una ciudad al norte de Italia y en la región del Véneto. Es conocida por los frescos de Giotto en la capilla Scrovegni.',
				ruta: './img/francia-italia/2.jpg',
			},
			{
				id: 43,
				nombre: 'Lille',
				descripcion:
				'Es un centro cultural y tiene un animado ambiente universitario.',
				ruta: './img/francia-italia/3.jpg',
			},
			{
				id: 44,
				nombre: 'Niza',
				descripcion:
				'Niza, capital del departamento Alpes Marítimos en la Riviera Francesa, se ubica en las costas pedregosas de Baie des Anges.',
				ruta: './img/francia-italia/4.jpg',
			},
			{
				id: 45,
				nombre: 'Terminal de Niza',
				descripcion:
				'Saliendo del aeropuerto, la Terminal 2 es la primera parada y la Terminal 1 la segunda, tras lo cual sigue hacia el centro de la ciudad.',
				ruta: './img/francia-italia/5.jpeg',
			},
			{
				id: 46,
				nombre: 'Canales de Venecia',
				descripcion:
				'El Gran Canal es el mayor canal de la ciudad de Venecia, la mayor zona húmeda de este país gracias a los múltiples canales de distinta longitud y anchura que lo riegan, en Italia.',
				ruta: './img/francia-italia/6.jpg',
			},
			{
				id: 47,
				nombre: 'Conques',
				descripcion:
				'Conques era una comuna francesa situada en el departamento de Aveyron, de la región de Occitania, que el 1 de enero de 2016 pasó a ser una comuna delegada de la comuna nueva de Conques-en-Rouergue​ al fusionarse con las comunas de Grand-Vabre, Noailhac y Saint-Cyprien-sur-Dourdou.',
				ruta: './img/francia-italia/7.jpg',
			},
			{
				id: 48,
				nombre: 'Najac, pueblo bonito al sur de Francia',
				descripcion:
				'Najac es una comuna francesa del departamento del Aveyron en la región de Occitania. La comuna se encuentra situada en un meandro en la garganta del Río Aveyron, en el oeste del departamento.',
				ruta: './img/francia-italia/8.jpg',
			},
			{
				id: 49,
				nombre: 'Catedral de Milán',
				descripcion:
				'La catedral de Milán (en italiano, Duomo di Milano) es una catedral gótica emplazada en la ciudad homónima.',
				ruta: './img/francia-italia/9.jpg',
			},
			{
				id: 50,
				nombre: 'Bolonia',
				descripcion:
					'Bolonia es la animada capital histórica de la región Emilia-Romaña, en el norte de Italia.',
				ruta: './img/francia-italia/10.jpg',
			},
		],
		antartida: [
			{
				id: 51,
				nombre: 'Lago Bled',
				descripcion:
					'El Lago de Bled es un lago glaciar de los Alpes Julianos, situado al noroeste de Eslovenia. Está situado en la ciudad de Bled.',
				ruta: './img/lago-bled/1.jpg',
			},
			{
				id: 52,
				nombre: 'Lago Bled',
				descripcion:
					'El Lago de Bled es un lago glaciar de los Alpes Julianos, situado al noroeste de Eslovenia. Está situado en la ciudad de Bled.',
				ruta: './img/lago-bled/2.jpg',
			},
			{
				id: 53,
				nombre: 'Lago Bled',
				descripcion:
					'El Lago de Bled es un lago glaciar de los Alpes Julianos, situado al noroeste de Eslovenia. Está situado en la ciudad de Bled.',
				ruta: './img/lago-bled/3.jpg',
			},
			{
				id: 54,
				nombre: 'Lago Bled',
				descripcion:
					'El Lago de Bled es un lago glaciar de los Alpes Julianos, situado al noroeste de Eslovenia. Está situado en la ciudad de Bled.',
				ruta: './img/lago-bled/4.jpg',
			},
			{
				id: 55,
				nombre: 'Lago Bled',
				descripcion:
					'El Lago de Bled es un lago glaciar de los Alpes Julianos, situado al noroeste de Eslovenia. Está situado en la ciudad de Bled.',
				ruta: './img/lago-bled/5.jpg',
			},
			{
				id: 56,
				nombre: 'Lago Bled',
				descripcion:
					'El Lago de Bled es un lago glaciar de los Alpes Julianos, situado al noroeste de Eslovenia. Está situado en la ciudad de Bled.',
				ruta: './img/lago-bled/6.jpg',
			},
			{
				id: 57,
				nombre: 'Patos Lago Bled',
				descripcion:
					'El Lago de Bled es un lago glaciar de los Alpes Julianos, situado al noroeste de Eslovenia. Está situado en la ciudad de Bled.',
				ruta: './img/lago-bled/7.jpg',
			},
			{
				id: 58,
				nombre: 'Lago Bled',
				descripcion:
					'El Lago de Bled es un lago glaciar de los Alpes Julianos, situado al noroeste de Eslovenia. Está situado en la ciudad de Bled.',
				ruta: './img/lago-bled/8.jpg',
			},
			{
				id: 59,
				nombre: 'Lago Bled',
				descripcion:
					'El Lago de Bled es un lago glaciar de los Alpes Julianos, situado al noroeste de Eslovenia. Está situado en la ciudad de Bled.',
				ruta: './img/lago-bled/9.jpg',
			},
		],
	},
};

const { fotos } = datos;

var dataCategorias = {
	categorias: [
		{ id: 'america', nombre: 'Madrid', numeroFotos: fotos['america'].length, imagenPortada: './img/madrid.jpg' },
		{ id: 'europa', nombre: 'Barcelona', numeroFotos: fotos['europa'].length, imagenPortada: './img/barcelona1.jpg' },
		{ id: 'africa', nombre: 'Ljubiana', numeroFotos: fotos['africa'].length, imagenPortada: './img/castillo.jpg' },
		{ id: 'asia', nombre: 'San Andres', numeroFotos: fotos['asia'].length, imagenPortada: './img/porta-san.jpg' },
		{ id: 'oceania', nombre: 'Francia e Italia', numeroFotos: fotos['oceania'].length, imagenPortada: './img/francia.jpg' },
		{ id: 'antartida', nombre: 'Lago de Bled', numeroFotos: fotos['antartida'].length, imagenPortada: './img/bled.jpg',},
	],
};

const { categorias } = dataCategorias;
const contenedorCategorias$1 = document.getElementById('categorias');

categorias.forEach((categoria) => {
    const nuevaCategoria = document.createElement('a');
    const plantilla = `
    <img class="categoria__img" src="${categoria.imagenPortada}" alt="" />
						<div class="categoria__datos">
							<p class="categoria__nombre">${categoria.nombre}</p>
							<p class="categoria__numero-fotos">${categoria.numeroFotos} Fotos</p>
						</div>
    `;

    nuevaCategoria.innerHTML = plantilla;
    nuevaCategoria.classList.add('categoria');
    nuevaCategoria.href = '#';
    nuevaCategoria.dataset.categoria = categoria.id;

    contenedorCategorias$1.append(nuevaCategoria);
});

const galeria$4 = document.getElementById('galeria');
const cargarImagen = (id, nombre, ruta, descripcion) => {
galeria$4.querySelector('.galeria__imagen').src = ruta;
galeria$4.querySelector('.galeria__imagen').dataset.idImagen = id;
galeria$4.querySelector('.galeria__titulo').innerText = nombre;
galeria$4.querySelector('.galeria__descripcion-imagen-activa').innerText = descripcion;


const categoriaActual = galeria$4.dataset.categoria;
const fotos = datos.fotos[categoriaActual];

let indexImagenActual;
fotos.forEach((foto, index) => {
    if (foto.id === id) {
        indexImagenActual = index;
    }
});


// Marcamos la imagen del carrusel como activa
if (galeria$4.querySelectorAll('.galeria__carousel-slide').length > 0) {
    galeria$4.querySelector('.galeria__carousel-slide--active').classList.remove('galeria__carousel-slide--active');

    galeria$4.querySelectorAll('.galeria__carousel-slide')[indexImagenActual].classList.add('galeria__carousel-slide--active');
}
};

const cargarAnteriorSiguiente = (direccion) => {
    const categoriaActual = galeria$4.dataset.categoria;
    const fotos = datos.fotos[categoriaActual];
    const idImagenActual = parseInt(galeria$4.querySelector('.galeria__imagen').dataset.idImagen);

    let indexImagenActual;
    fotos.forEach((foto, index) => {
        if(foto.id === idImagenActual){
        indexImagenActual = index;
        }
    });

    if (direccion === 'siguiente') {
    if(fotos[indexImagenActual + 1]) {
        const { id, nombre, ruta, descripcion } = fotos[indexImagenActual + 1];
        cargarImagen(id, nombre, ruta, descripcion);
    }
    } else if (direccion === 'anterior') {
        if(fotos[indexImagenActual - 1]) {
            const { id, nombre, ruta, descripcion } = fotos[indexImagenActual - 1];
            cargarImagen(id, nombre, ruta, descripcion);
        } 
    }
};

const contenedorCategorias = document.getElementById('categorias');
const galeria$3 = document.getElementById('galeria');

contenedorCategorias.addEventListener('click', (e) => {
   e.preventDefault();

   if (e.target.closest('a')) {
    galeria$3.classList.add('galeria--active');
    document.body.style.overflow = 'hidden';

    const categoriaActiva = e.target.closest('a').dataset.categoria;
    galeria$3.dataset.categoria = categoriaActiva;

    const fotos = datos.fotos[categoriaActiva];
    const carousel = galeria$3.querySelector('.galeria__carousel-slides');

    const { id, nombre, ruta, descripcion } = fotos[0];
    cargarImagen(id, nombre, ruta, descripcion);

    carousel.innerHTML = '';

    fotos.forEach((foto) => {
        const slide = `
        <a href="#" class="galeria__carousel-slide">
			<img class="galeria__carousel-image" src="${foto.ruta}" data-id="${foto.id}" alt="" />
		</a>
        `;
        galeria$3.querySelector('.galeria__carousel-slides').innerHTML += slide;
    });
    galeria$3.querySelector('.galeria__carousel-slide').classList.add('galeria__carousel-slide--active');
}
});

const galeria$2 = document.getElementById('galeria');
const cerrarGaleria = () => {
    galeria$2.classList.remove('galeria--active');
    document.body.style.overflow = '';
};

const slideClick = (e) => {
let ruta, nombre, descripcion;


const id = parseInt(e.target.dataset.id);
const galeria = document.getElementById('galeria');
const categoriaActiva = galeria.dataset.categoria;

datos.fotos[categoriaActiva].forEach((foto) => {
    if(foto.id === id) {
        ruta = foto.ruta;
        nombre = foto.nombre;
        descripcion = foto.descripcion;
    }
});

cargarImagen(id, nombre, ruta, descripcion);
};

const galeria$1 = document.getElementById('galeria');
const carousel = (direccion) => {
    const opciones = {
    root: document.querySelector('.galeria__carousel'),
    rootMargin: '0px',
    threshold: 0.9,
};

const observer = new IntersectionObserver((entradas) => {
    const slidesVisibles = entradas.filter((entrada) => {
        if (entrada.isIntersecting === true) {
            return entrada;
        }
    });

if(direccion === 'atras'){
    const primerSlideVisible = slidesVisibles[0];
    const indexPrimerSlideVisible = entradas.indexOf(primerSlideVisible);


    if (indexPrimerSlideVisible >= 1) {
        entradas[indexPrimerSlideVisible -1].target.scrollIntoView({
            behavior: 'smooth',
            inline: 'start',
        });
    }
} else if (direccion === 'adelante'){
    const ultimaSlidesVisible = slidesVisibles[slidesVisibles.length - 1];
    const indexUltimoSlideVisible = entradas.indexOf(ultimaSlidesVisible);

    if(entradas.length - 1 > indexUltimoSlideVisible) {
        entradas[indexUltimoSlideVisible + 1].target.scrollIntoView({
            behavior: 'smooth',
            inline: 'start',
        });
    }
}

    const slides = galeria$1.querySelectorAll('.galeria__carousel-slide');
    slides.forEach((slide) => {
    observer.unobserve(slide);
    });
}, opciones);

const slides = galeria$1.querySelectorAll('.galeria__carousel-slide');
slides.forEach((slide) => {
    observer.observe(slide);
});
};

const galeria = document.getElementById('galeria');
galeria.addEventListener('click', (e) => {
    const boton = e.target.closest('button');


    // Cerrar Galeria
    if (boton?.dataset?.accion === 'cerrar-galeria') {
        cerrarGaleria();
    }

// Carousel slide click
    if(e.target.dataset.id) {
    slideClick(e);
}
// Siguiente Imagen
if (boton?.dataset?.accion === 'siguiente-imagen') {
    cargarAnteriorSiguiente('siguiente');
}

//  Anterior Imagen
if (boton?.dataset?.accion === 'anterior-imagen') {
    cargarAnteriorSiguiente('anterior');
}

// Carrusel adelante
if (boton?.dataset?.accion === 'siguiente-slide') {
    carousel('adelante');
}

//  corrusel atras
if (boton?.dataset?.accion === 'anterior-slide') {
    carousel('atras');
}
});
