import * as THREE from 'three';

export default function PATO({x, y, z}){
// Espacio para colocar los objetos
    

//BUHO
var geometry01 = new THREE.SphereGeometry(0.6);
var material01 = new THREE.MeshLambertMaterial({
    color:0x66C05D, side: THREE.DoubleSide
})

var mesh01 = new THREE.Mesh(geometry01,material01);
//scene.add(mesh01);
mesh01.position.set(0,1.7,0);
mesh01.scale.set(1,1.3,1);


//cuello
var geometry02 = new THREE.CylinderGeometry(0.4,0.4,2,20);
var material02 = new THREE.MeshLambertMaterial({
    color:0xF8F9FA, side: THREE.DoubleSide
})
var mesh02 = new THREE.Mesh(geometry02,material02);
//scene.add(mesh02);
mesh02.position.set(0,0.5,0);

//cuerpo
 var geometry03 = new THREE.SphereGeometry(0.7);
var material03 = new THREE.MeshLambertMaterial({
    color:0xE6D2C1, side: THREE.DoubleSide
})

var mesh03 = new THREE.Mesh(geometry03,material03);
//scene.add(mesh03);
mesh03.position.set(0,0,0);
mesh03.scale.set(1,1,1.5);
mesh03.rotation.set(1.570,0,0); 

//cola
var geometry04 = new THREE.SphereGeometry(0.5);
var material04 = new THREE.MeshLambertMaterial({
    color:0x54342A, side: THREE.DoubleSide
})

var mesh04 = new THREE.Mesh(geometry04,material04);
//scene.add(mesh04);
mesh04.position.set(0,-1.3,-0.8);
mesh04.scale.set(0.8,1.5,0.1);
mesh04.rotation.set(0.5,0,0); 

var mesh05 = new THREE.Mesh(geometry04,material04);
//scene.add(mesh05);
mesh05.position.set(-0.5,-1.3,-0.8);
mesh05.scale.set(0.8,1.5,0.1);
mesh05.rotation.set(0.5,0,-0.5); 

var mesh06 = new THREE.Mesh(geometry04,material04);
//scene.add(mesh06);
mesh06.position.set(0.5,-1.3,-0.8);
mesh06.scale.set(0.8,1.5,0.1);
mesh06.rotation.set(0.5,0,0.5); 


//alas
var geometry07 = new THREE.SphereGeometry(0.7);
var material07 = new THREE.MeshLambertMaterial({
    color:0xE6D2C1, side: THREE.DoubleSide
})

var mesh07 = new THREE.Mesh(geometry07,material07);
//scene.add(mesh07);
mesh07.position.set(1.5,0.5,0);
mesh07.scale.set(2.5,0.9,0.1);
mesh07.rotation.set(0,0,0); 

var mesh08 = new THREE.Mesh(geometry07,material07);
//scene.add(mesh08);
mesh08.position.set(-1.5,0.5,0);
mesh08.scale.set(2.5,0.9,0.1);
mesh08.rotation.set(0,0,0); 

//plumas der
var geometry09 = new THREE.SphereGeometry(0.5);
var material09 = new THREE.MeshLambertMaterial({
    color:0x54342A, side: THREE.DoubleSide
})

var mesh10 = new THREE.Mesh(geometry09,material09);
//scene.add(mesh10);
mesh10.position.set(1,-0.2,0);
mesh10.scale.set(0.4,0.8,0.1);
 
var mesh11 = new THREE.Mesh(geometry09,material09);
//scene.add(mesh11);
mesh11.position.set(1.4,-0.2,0);
mesh11.scale.set(0.4,0.8,0.1);

var mesh12 = new THREE.Mesh(geometry09,material09);
//scene.add(mesh12);
mesh12.position.set(1.8,-0.2,0);
mesh12.scale.set(0.4,0.8,0.1);

var mesh13 = new THREE.Mesh(geometry09,material09);
//scene.add(mesh13);
mesh13.position.set(2.2,-0.2,0);
mesh13.scale.set(0.4,0.8,0.1);
mesh13.rotation.set(0,0,0.2); 

var mesh14 = new THREE.Mesh(geometry09,material09);
//scene.add(mesh14);
mesh14.position.set(2.6,-0.2,0);
mesh14.scale.set(0.4,0.8,0.1);
mesh14.rotation.set(0,0,0.4); 

var mesh30 = new THREE.Mesh(geometry09,material09);
//scene.add(mesh30);
mesh30.position.set(2.95,0,0);
mesh30.scale.set(0.4,0.8,0.1);
mesh30.rotation.set(0,0,0.6); 

var mesh31 = new THREE.Mesh(geometry09,material09);
//scene.add(mesh31);
mesh31.position.set(3.2,0.4,0);
mesh31.scale.set(0.4,0.8,0.1);
mesh31.rotation.set(0,0,0.9);

//plumas izq
var mesh15 = new THREE.Mesh(geometry09,material09);
//scene.add(mesh15);
mesh15.position.set(-1,-0.2,0);
mesh15.scale.set(0.4,0.8,0.1);
 
var mesh16 = new THREE.Mesh(geometry09,material09);
//scene.add(mesh16);
mesh16.position.set(-1.4,-0.2,0);
mesh16.scale.set(0.4,0.8,0.1);

var mesh17 = new THREE.Mesh(geometry09,material09);
//scene.add(mesh17);
mesh17.position.set(-1.8,-0.2,0);
mesh17.scale.set(0.4,0.8,0.1);

var mesh18 = new THREE.Mesh(geometry09,material09);
//scene.add(mesh18);
mesh18.position.set(-2.2,-0.2,0);
mesh18.scale.set(0.4,0.8,0.1);
mesh18.rotation.set(0,0,-0.2); 

var mesh19 = new THREE.Mesh(geometry09,material09);
//scene.add(mesh19);
mesh19.position.set(-2.6,-0.2,0);
mesh19.scale.set(0.4,0.8,0.1);
mesh19.rotation.set(0,0,-0.4); 

var mesh20 = new THREE.Mesh(geometry09,material09);
//scene.add(mesh20);
mesh20.position.set(-2.95,0,0);
mesh20.scale.set(0.4,0.8,0.1);
mesh20.rotation.set(0,0,-0.6); 

var mesh21 = new THREE.Mesh(geometry09,material09);
//scene.add(mesh21);
mesh21.position.set(-3.2,0.4,0);
mesh21.scale.set(0.4,0.8,0.1);
mesh21.rotation.set(0,0,-0.9);


//cara
var geometry22 = new THREE.SphereGeometry(0.15);
var material22 = new THREE.MeshLambertMaterial({
    color:0x000000, side: THREE.DoubleSide
})

var mesh22 = new THREE.Mesh(geometry22,material22);
//scene.add(mesh22);
mesh22.position.set(0.3,2.2,-0.3);


var mesh23 = new THREE.Mesh(geometry22,material22);
//scene.add(mesh23);
mesh23.position.set(-0.3,2.2,-0.3);


//patas
var geometry24 = new THREE.CylinderGeometry(0.15,0.15,0.6,20);
var material24 = new THREE.MeshLambertMaterial({
    color:0xF68D2E, side: THREE.DoubleSide
})
var mesh24 = new THREE.Mesh(geometry24,material24);
//scene.add(mesh24);
mesh24.position.set(0.2,-1.15,0);

var mesh25 = new THREE.Mesh(geometry24,material24);
//scene.add(mesh25);
mesh25.position.set(-0.2,-1.15,0);

var geometry26 = new THREE.SphereGeometry(0.2);
var material26 = new THREE.MeshLambertMaterial({
    color:0xF68D2E, side: THREE.DoubleSide
})
var mesh26 = new THREE.Mesh(geometry26,material26);
//scene.add(mesh26);
mesh26.position.set(0.2,-1.5,0.25);
mesh26.scale.set(0.9,0.4,2);
mesh26.rotation.set(0.5,0,0);

var mesh27 = new THREE.Mesh(geometry26,material26);
//scene.add(mesh27);
mesh27.position.set(-0.2,-1.5,0.25);
mesh27.scale.set(0.9,0.4,2);
mesh27.rotation.set(0.5,0,0);

//PICO
   var geometry28 = new THREE.SphereGeometry(0.2);
var material28 = new THREE.MeshLambertMaterial({
    color:0xF68D2E, side: THREE.DoubleSide
})
var mesh28 = new THREE.Mesh(geometry28,material28);
//scene.add(mesh28);
mesh28.position.set(0,2.6,0);
mesh28.scale.set(1,1.5,0.8); 

var mesh29 = new THREE.Mesh(geometry28,material28);
//scene.add(mesh29);
mesh29.position.set(0,2.4,0.2);
mesh29.scale.set(1,1.5,0.6);
mesh29.rotation.set(0.5,0,0); 

const PATO = new THREE.Group();
     PATO.add(mesh01,mesh02,mesh03,mesh04,mesh05,mesh06,mesh07,mesh08,
     mesh10, mesh11,mesh12,mesh13,mesh14,mesh15,mesh16,mesh17,mesh18,mesh19,
     mesh20,mesh21, mesh22,mesh23,mesh24,mesh25,mesh26,mesh27,
    mesh28,mesh29,mesh30,mesh31);

    //scene.add(PATO);
    PATO.rotation.set(1.570,0,0); 

const PATOO = new THREE.Group();
     PATOO.add(PATO);

      PATOO.position.set(x,y,z);
    
    return PATOO;
    
    }   

