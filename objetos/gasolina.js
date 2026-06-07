
 import * as THREE from 'three';
import {RoundedBoxGeometry} from "../js/RoundedBoxGeometry.js"

export default function GASOLINA({x,y,z}){ 
   
//punta
var geometry3 = new THREE.CylinderGeometry(1.5,2.5,2,25);
var material3 = new THREE.MeshLambertMaterial({
    color:0x000000, side: THREE.DoubleSide
})
var mesh3 = new THREE.Mesh(geometry3,material3);
//scene.add(mesh3);
mesh3.position.set(-5,17,3);



//caja
var geometry4 = new THREE.BoxGeometry(16,19,16,7,12,20);
var material4 = new THREE.MeshLambertMaterial({
    color:0xD93718, side: THREE.DoubleSide
})

var mesh4 = new THREE.Mesh(geometry4,material4);
//scene.add(mesh4);
mesh4.position.set(0,5.6,0);


var geometry5 = new THREE.BoxGeometry(8,3,12,7,12,20);
var material5 = new THREE.MeshLambertMaterial({
    color:0xD93718, side: THREE.DoubleSide
})

var mesh5 = new THREE.Mesh(geometry5,material5);
//scene.add(mesh5);
mesh5.position.set(-4,15,2);


//agarradera
var geometry6 = new THREE.TorusGeometry(6,1.5,9,18,3.4);
var material6 = new THREE.MeshLambertMaterial({
    color:0xAB270E, side: THREE.DoubleSide
})
var mesh6 = new THREE.Mesh(geometry6,material6);
//scene.add(mesh6);
mesh6.position.set(0,15,-2)

//sobresale
var geometry7 = new THREE.BoxGeometry(13,16,3,7,12,20);
var material7 = new THREE.MeshLambertMaterial({
    color:0xAB270E, side: THREE.DoubleSide
})

var mesh7 = new THREE.Mesh(geometry7,material7);
//scene.add(mesh7);
mesh7.position.set(0,5.6,7);

const GASOLINA02 = new THREE.Group();
      GASOLINA02 .add(mesh3,mesh4,mesh5,mesh6,mesh7);

      GASOLINA02 .position.set(x,y,z);
      return GASOLINA02 ;
}



  



