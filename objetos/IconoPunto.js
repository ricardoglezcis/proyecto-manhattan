
import * as THREE from 'three';
import {RoundedBoxGeometry} from "../js/RoundedBoxGeometry.js"

export default function IconoPunto ({x,y,z}){ 


// Material
var materialNegro = new THREE.MeshLambertMaterial({
    color: 0xEfb810, 
    side: THREE.DoubleSide
});

// ENGRANE 

// ARO PRINCIPAL DEL ENGRANE
var geometryAro = new THREE.TorusGeometry(1.8, 0.5, 16, 64);
var aroEngrane = new THREE.Mesh(geometryAro, materialNegro);
aroEngrane.position.set(0, 0, 0);
aroEngrane.rotation.set(0, 0, 0);

// DIENTES DEL ENGRANE
var geometryDiente = new THREE.BoxGeometry(0.8, 1.0, 0.8);

var diente1 = new THREE.Mesh(geometryDiente, materialNegro);
diente1.position.set(0, 2.1, 0);

var diente2 = diente1.clone();
diente2.position.set(1.48, 1.48, 0);
diente2.rotation.set(0, 0, -Math.PI / 4);

var diente3 = diente1.clone();
diente3.position.set(2.1, 0, 0);
diente3.rotation.set(0, 0, -Math.PI / 2);

var diente4 = diente1.clone();
diente4.position.set(1.48, -1.48, 0);
diente4.rotation.set(0, 0, -Math.PI * 0.75);

var diente5 = diente1.clone();
diente5.position.set(0, -2.1, 0);

var diente6 = diente1.clone();
diente6.position.set(-1.48, -1.48, 0);
diente6.rotation.set(0, 0, Math.PI / 4);

var diente7 = diente1.clone();
diente7.position.set(-2.1, 0, 0);
diente7.rotation.set(0, 0, Math.PI / 2);

var diente8 = diente1.clone();
diente8.position.set(-1.48, 1.48, 0);
diente8.rotation.set(0, 0, Math.PI * 0.75);

// LLAVE INGLESA 

// MANGO CENTRAL
var geometryMango = new THREE.BoxGeometry(0.8, 3, 0.8);
var mangoLlave = new THREE.Mesh(geometryMango, materialNegro);
mangoLlave.position.set(0, 0, 0.2); 
mangoLlave.rotation.set(0, 0, -Math.PI / 4); // Inclinado 45 grados

// CABEZA INFERIOR 
var geometryAnilloInf = new THREE.TorusGeometry(0.8, 0.35, 16, 64);
var anilloInf = new THREE.Mesh(geometryAnilloInf, materialNegro);
anilloInf.position.set(-2, -2, 0.2);
anilloInf.rotation.set(0, 0, 0);

// CABEZA SUPERIOR
const cabezaSuperior = new THREE.Group();
cabezaSuperior.position.set(2.0, 2.0, 0.2); 
cabezaSuperior.rotation.set(0, 0, -Math.PI / 4); 

//Base plana de la cabeza
var geometryBaseU = new THREE.BoxGeometry(2.0, 1.0, 0.8);
var baseU = new THREE.Mesh(geometryBaseU, materialNegro);
baseU.position.set(0, 0, 0);

// Punta izquierda
var geometryPunta = new THREE.BoxGeometry(0.6, 1.5, 0.8);
var puntaIzq = new THREE.Mesh(geometryPunta, materialNegro);
puntaIzq.position.set(-0.7, 1.25, 0);



// Punta derecha 
var puntaDer = puntaIzq.clone();
puntaDer.position.set(0.7, 1.25, 0);

cabezaSuperior.add(baseU, puntaIzq, puntaDer);

const iconoReparacion = new THREE.Group();
iconoReparacion.add(
    aroEngrane, diente1, diente2, diente3, diente4, diente5, diente6, diente7, diente8,
    mangoLlave, anilloInf, cabezaSuperior);

const Icono = new THREE.Group();
      Icono.add(iconoReparacion);

      Icono.position.set(x,y,z);
      return Icono ;
}