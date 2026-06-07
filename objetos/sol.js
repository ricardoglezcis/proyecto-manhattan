import * as THREE from 'three';
import {RoundedBoxGeometry} from "../js/RoundedBoxGeometry.js"

export default function SOL({X,Y,Z}){
   

   
//punta
var geometry3 = new THREE.SphereGeometry(10);
var material3 = new THREE.MeshLambertMaterial({
    color:0xFCD700, side: THREE.DoubleSide
})
var mesh3 = new THREE.Mesh(geometry3,material3);
//scene.add(mesh3);
mesh3.position.set(0,15,0);

//PICOS
    var geometry4 = new THREE.ConeGeometry(5,18,10,10);
var material4 = new THREE.MeshLambertMaterial({
    color:0xFC7600, side: THREE.DoubleSide
})
var mesh4 = new THREE.Mesh(geometry4,material4);
//scene.add(mesh4);
mesh4.position.set(0.5,28,0);

var mesh5 = new THREE.Mesh(geometry4,material4);
//scene.add(mesh5);
mesh5.position.set(0,0,0);
mesh5.rotation.set(3.14,0,0);

var mesh6 = new THREE.Mesh(geometry4,material4);
//scene.add(mesh6);
mesh6.position.set(-15,15.5,0);
mesh6.rotation.set(0,0,1.57);

var mesh7 = new THREE.Mesh(geometry4,material4);
//scene.add(mesh7);
mesh7.position.set(15,15.5,0);
mesh7.rotation.set(0,0,-1.57);

 var geometry8 = new THREE.ConeGeometry(4,10,10,10);
var material8 = new THREE.MeshLambertMaterial({
    color:0xFC7600, side: THREE.DoubleSide
})

var mesh8 = new THREE.Mesh(geometry8,material8);
//scene.add(mesh8);
mesh8.position.set(-10,6,0);
mesh8.rotation.set(0,0,2.26);

var mesh9 = new THREE.Mesh(geometry8,material8);
//scene.add(mesh9);
mesh9.position.set(10,6,0);
mesh9.rotation.set(0,0,-2.26);

var mesh10 = new THREE.Mesh(geometry8,material8);
//scene.add(mesh10);
mesh10.position.set(-9,26,0);
mesh10.rotation.set(0,0,-5.6);

var mesh11 = new THREE.Mesh(geometry8,material8);
//scene.add(mesh11);
mesh11.position.set(9,26,0);
mesh11.rotation.set(0,0,5.6);

const SOL01 = new THREE.Group();
      SOL01.add(mesh3,mesh4,mesh5,mesh6,mesh7,mesh8,mesh9,mesh10,mesh11);

      SOL01.position.set(x,y,z);
      return SOL01;
}










