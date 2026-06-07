import * as THREE from 'three';

export default function NUBE1({x, y, z}){


    var geometry01 = new THREE.SphereGeometry(2);
var material01 = new THREE.MeshLambertMaterial({
    color:0xFFFFFF, side: THREE.DoubleSide
})

var mesh01 = new THREE.Mesh(geometry01,material01);
//scene.add(mesh01);
mesh01.position.set(0,0,0);

var mesh02 = new THREE.Mesh(geometry01,material01);
//scene.add(mesh02);
mesh02.position.set(0,2,0);

var mesh03 = new THREE.Mesh(geometry01,material01);
//scene.add(mesh03);
mesh03.position.set(-2.5,-0.5,0);
mesh03.scale.set(1.5,0.7,1);

var mesh04 = new THREE.Mesh(geometry01,material01);
//scene.add(mesh04);
mesh04.position.set(-2.5,1,0);
mesh04.scale.set(0.7,0.7,0.7);

var mesh05 = new THREE.Mesh(geometry01,material01);
//scene.add(mesh05);
mesh05.position.set(2.5,0,0);
mesh05.scale.set(0.9,0.9,0.9);

var mesh06 = new THREE.Mesh(geometry01,material01);
//scene.add(mesh06);
mesh06.position.set(4.5,-0.5,0);
mesh06.scale.set(0.7,0.7,0.7);

 const NUBE1 = new THREE.Group();
     NUBE1.add(mesh01,mesh02,mesh03,mesh04,mesh05);
 
     NUBE1.position.set(x,y,z);
     
     return NUBE1;
     
     }        
