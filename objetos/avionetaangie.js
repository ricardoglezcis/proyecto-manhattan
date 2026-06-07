import * as THREE from 'three';
import {RoundedBoxGeometry} from "../js/RoundedBoxGeometry.js"

export default function naveaangie({x,y,z}){
   
// Espacio para colocar los objetos
   

    //CUERPO
    var geometry1 = new THREE.SphereGeometry(5);
var material1 = new THREE.MeshLambertMaterial({
    color:0xBAB6B6, side: THREE.DoubleSide
})

var mesh1 = new THREE.Mesh(geometry1,material1);
//scene.add(mesh1);
mesh1.position.set(0,0,0);
mesh1.scale.set(1.5,1.4,6);
//punta
var geometry3 = new THREE.CylinderGeometry(4.3,5.5,4.5,25);
var material3 = new THREE.MeshLambertMaterial({
    color:0x595959, side: THREE.DoubleSide
})
var mesh3 = new THREE.Mesh(geometry3,material3);
//scene.add(mesh3);
mesh3.position.set(0,0,23);
mesh3.rotation.set(1.6,0,0);

var geometry4 = new THREE.CylinderGeometry(1.5,4.3,5.2,25);
var material4 = new THREE.MeshLambertMaterial({
    color:0x595959, side: THREE.DoubleSide
})
var mesh4 = new THREE.Mesh(geometry4,material4);
//scene.add(mesh4);
mesh4.position.set(0,-0.2,27.8);
mesh4.rotation.set(1.6,0,0);
//rectangulocolita
var geometry5 = new THREE.BoxGeometry(1.5,6,16,7,12,20);
var material5 = new THREE.MeshLambertMaterial({
    color:0x363535, side: THREE.DoubleSide
})

var mesh5 = new THREE.Mesh(geometry5,material5);
//scene.add(mesh5);
mesh5.position.set(0,7,-29.8);
mesh5.rotation.set(-1.5,0,0);

var geometry6 = new THREE.CylinderGeometry(6,3,25,25);
var material6 = new THREE.MeshLambertMaterial({
    color:0xBAB6B6, side: THREE.DoubleSide
})
var mesh6 = new THREE.Mesh(geometry6,material6);
//scene.add(mesh6);
mesh6.position.set(0,0.2,-21);
mesh6.rotation.set(1.6,0,0);

var geometry7 = new THREE.BoxGeometry(1.4,6,16,7,12,20);
var material7 = new THREE.MeshLambertMaterial({
    color:0xBAB6B6, side: THREE.DoubleSide
})

var mesh7 = new THREE.Mesh(geometry7,material7);
//scene.add(mesh7);
mesh7.position.set(0,6.4,-26.4);
mesh7.rotation.set(-1.9,0,0);

//alas
var geometry8 = new THREE.SphereGeometry(4);
var material8 = new THREE.MeshLambertMaterial({
    color:0x363535, side: THREE.DoubleSide
})

var mesh12 = new THREE.Mesh(geometry8,material8);
//scene.add(mesh12);
mesh12.position.set(0,1,-24);
mesh12.rotation.set(0,1.5,1.5);
mesh12.scale.set(0.2,1,5);
//vidrio
var geometry9 = new THREE.SphereGeometry(4);
var material9 = new THREE.MeshLambertMaterial({
    color:0xDCF7F7, side: THREE.DoubleSide,transparent :true, opacity:0.5
})

var mesh9 = new THREE.Mesh(geometry9,material9);
//scene.add(mesh9);
mesh9.position.set(0,5,0);
mesh9.scale.set(1.2,1.4,2);

//alas principales
var geometry10 = new THREE.SphereGeometry(4);
var material10 = new THREE.MeshLambertMaterial({
    color:0x363535, side: THREE.DoubleSide
})

var mesh10 = new THREE.Mesh(geometry10,material10);
//scene.add(mesh10);
mesh10.position.set(-16,0,0);
mesh10.rotation.set(0,1.5,1.5);
mesh10.scale.set(0.2,1,5);

var mesh11 = new THREE.Mesh(geometry10,material10);
//scene.add(mesh11);
mesh11.position.set(16,0,0);
mesh11.rotation.set(0,1.5,1.5);
mesh11.scale.set(0.2,1,5);

//BAJOALAS
var geometry13= new THREE.SphereGeometry(2.3);
var material13 = new THREE.MeshLambertMaterial({
    color:0x787573, side: THREE.DoubleSide
})

var mesh13= new THREE.Mesh(geometry13,material13);
//scene.add(mesh13);
mesh13.position.set(14,-1,4.5);
mesh13.scale.set(1.5,1,4);

var mesh14= new THREE.Mesh(geometry13,material13);
//scene.add(mesh14);
mesh14.position.set(-14,-1,4.5);
mesh14.scale.set(1.5,1,4);

//TURBINA
var geometry15= new THREE.SphereGeometry(0.8);
var material15 = new THREE.MeshLambertMaterial({
    color:0x000000, side: THREE.DoubleSide
})

var mesh15= new THREE.Mesh(geometry15,material15);
//scene.add(mesh15);
mesh15.position.set(14,-0.5,12.6);
mesh15.scale.set(0.8,0.5,4);
mesh15.rotation.set(1.5,0,0);

var mesh16= new THREE.Mesh(geometry15,material15);
//scene.add(mesh16);
mesh16.position.set(14,-0.8,12.5);
mesh16.scale.set(0.8,0.5,4);
mesh16.rotation.set(1.5,1.5,0);

var geometry17 = new THREE.CylinderGeometry(0.4,1.65,2,25);
var material17 = new THREE.MeshLambertMaterial({
    color:0x000000, side: THREE.DoubleSide
})
var mesh17 = new THREE.Mesh(geometry17,material17);
//scene.add(mesh17);
mesh17.position.set(14,-1,13.5);
mesh17.rotation.set(1.6,0,0);

//TURBINA2
var geometry18= new THREE.SphereGeometry(0.8);
var material18 = new THREE.MeshLambertMaterial({
    color:0x000000, side: THREE.DoubleSide
})

var mesh18= new THREE.Mesh(geometry18,material18);
//scene.add(mesh18);
mesh18.position.set(-14,-0.5,12.6);
mesh18.scale.set(0.8,0.5,4);
mesh18.rotation.set(1.5,0,0);

var mesh19= new THREE.Mesh(geometry18,material18);
//scene.add(mesh19);
mesh19.position.set(-14,-0.8,12.5);
mesh19.scale.set(0.8,0.5,4);
mesh19.rotation.set(1.5,1.5,0);

var geometry20 = new THREE.CylinderGeometry(0.4,1.65,2,25);
var material20 = new THREE.MeshLambertMaterial({
    color:0x000000, side: THREE.DoubleSide
})
var mesh20 = new THREE.Mesh(geometry20,material20);
//scene.add(mesh20);
mesh20.position.set(-14,-1,13.5);
mesh20.rotation.set(1.6,0,0);

//TURBINA3PRINCIPAL
var geometry21= new THREE.SphereGeometry(2);
var material21 = new THREE.MeshLambertMaterial({
    color:0x000000, side: THREE.DoubleSide
})

var mesh21= new THREE.Mesh(geometry21,material21);
//scene.add(mesh21);
mesh21.position.set(0,-0.5,28);
mesh21.scale.set(0.8,0.3,4);
mesh21.rotation.set(1.5,0,0);

var mesh22= new THREE.Mesh(geometry21,material21);
//scene.add(mesh22);
mesh22.position.set(0,-0.5,28);
mesh22.scale.set(0.8,0.3,4);
mesh22.rotation.set(1.5,1.5,0);

//LLANTITA
var geometry23 = new THREE.CylinderGeometry(0.4,0.4,3,25);
var material23 = new THREE.MeshLambertMaterial({
    color:0x000000, side: THREE.DoubleSide
})
var mesh23 = new THREE.Mesh(geometry23,material23);
//scene.add(mesh23);
mesh23.position.set(0,-6,-20);
mesh23.rotation.set(0,0,0);

var geometry24= new THREE.SphereGeometry(1);
var material24 = new THREE.MeshLambertMaterial({
    color:0x000000, side: THREE.DoubleSide
})

var mesh24= new THREE.Mesh(geometry24,material24);
//scene.add(mesh24);
mesh24.position.set(0,-7,-20);

const naveaangie = new THREE.Group();
      naveaangie.add(mesh1,mesh3,mesh4,mesh5,mesh6,mesh7,mesh9,mesh10,mesh11,mesh12,mesh13,mesh14,
        mesh15,mesh16,mesh17,mesh18,mesh19,mesh20,mesh21,mesh22,mesh23);
      naveaangie.position.set(x, y, z);
      return naveaangie;
}
