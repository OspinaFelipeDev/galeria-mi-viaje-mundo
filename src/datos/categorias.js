import data from './fotos';
const { fotos } = data;

export default {
	categorias: [
		{ id: 'america', nombre: 'Madrid', numeroFotos: fotos['america'].length, imagenPortada: './img/madrid.jpg' },
		{ id: 'europa', nombre: 'Barcelona', numeroFotos: fotos['europa'].length, imagenPortada: './img/barcelona1.jpg' },
		{ id: 'africa', nombre: 'Ljubiana', numeroFotos: fotos['africa'].length, imagenPortada: './img/castillo.jpg' },
		{ id: 'asia', nombre: 'San Andres', numeroFotos: fotos['asia'].length, imagenPortada: './img/porta-san.jpg' },
		{ id: 'oceania', nombre: 'Francia e Italia', numeroFotos: fotos['oceania'].length, imagenPortada: './img/francia.jpg' },
		{ id: 'antartida', nombre: 'Lago de Bled', numeroFotos: fotos['antartida'].length, imagenPortada: './img/bled.jpg',},
	],
};
