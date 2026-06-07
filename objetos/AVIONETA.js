import * as THREE from 'three';
import {RoundedBoxGeometry} from "../js/RoundedBoxGeometry.js"

export default function NAVEDAVID({x, y, z}){

// Espacio para colocar los objetos
    
      
var geometry01 = new THREE.SphereGeometry(2);
var material01 = new THREE.MeshLambertMaterial({
    color:0xD6A048, side: THREE.DoubleSide
})

var mesh01 = new THREE.Mesh(geometry01,material01);
//scene.add(mesh01);
mesh01.position.set(0,0,0);
mesh01.scale.set(1,1,4);

var geometry02 = new RoundedBoxGeometry (20,0.5,4,10,10);
var material02 = new THREE.MeshLambertMaterial({
color: 0xC41E3A, side: THREE.DoubleSide
});

var mesh02 = new THREE.Mesh(geometry02,material02);
//scene.add(mesh02);
mesh02.position.set(0,-1,0);

var mesh03 = new THREE.Mesh(geometry02,material02);
//scene.add(mesh03);
mesh03.position.set(0,4,0);

var geometry04 = new THREE.ConeGeometry(1.3,7,30,10);
var material04 = new THREE.MeshLambertMaterial({
    color:0xD6A048, side: THREE.DoubleSide
})
var mesh04 = new THREE.Mesh(geometry04,material04);
//scene.add(mesh04);
mesh04.position.set(0,0,-9.5);
mesh04.rotation.set(-1.570,0,0);
mesh04.scale.set(1,1,1);

var geometry05 = new THREE.ConeGeometry(2,6,30,10);
var material05 = new THREE.MeshLambertMaterial({
    color:0xD6A048, side: THREE.DoubleSide
})
var mesh05 = new THREE.Mesh(geometry05,material05);
//scene.add(mesh05);
mesh05.position.set(0,0,-10);
mesh05.rotation.set(1.9,0,0);
mesh05.scale.set(0.2,1,1);

var geometry06 = new THREE.CylinderGeometry(1,1,0.6,20);
var material06 = new THREE.MeshLambertMaterial({
    color:0x5A5E63, side: THREE.DoubleSide
})
var mesh06 = new THREE.Mesh(geometry06,material06);
//scene.add(mesh06);
mesh06.position.set(0,0,7.7);
mesh06.rotation.set(1.570,0,0);

var geometry07 = new RoundedBoxGeometry (0.5,3,0.5,10,0.7);
var material07 = new THREE.MeshLambertMaterial({
color: 0x5A5E63, side: THREE.DoubleSide
});

var mesh07 = new THREE.Mesh(geometry07,material07);
//scene.add(mesh07);
mesh07.position.set(0,0,7.7);

var mesh08 = new THREE.Mesh(geometry07,material07);
//scene.add(mesh08);
mesh08.position.set(0,0,7.7);
mesh08.rotation.set(0,0,1.570);

var mesh09 = new THREE.Mesh(geometry07,material07);
//scene.add(mesh09);
mesh09.position.set(0,0,7.7);
mesh09.rotation.set(0,0,0.78);

var mesh10 = new THREE.Mesh(geometry07,material07);
//scene.add(mesh10);
mesh10.position.set(0,0,7.7);
mesh10.rotation.set(0,0,-0.78);

var geometry11 = new THREE.CylinderGeometry(0.3,0.3,1,20);
var material11 = new THREE.MeshLambertMaterial({
    color:0x5A5E63, side: THREE.DoubleSide
})
var mesh11 = new THREE.Mesh(geometry11,material11);
//scene.add(mesh11);
mesh11.position.set(0,0,8.3);
mesh11.rotation.set(1.570,0,0);

var geometry12 = new RoundedBoxGeometry (0.5,5,0.5,10,0.7);
var material12 = new THREE.MeshLambertMaterial({
color: 0x90481A, side: THREE.DoubleSide
});

var mesh12 = new THREE.Mesh(geometry12,material12);
//scene.add(mesh12);
mesh12.position.set(0,0,8.5);

var mesh13 = new THREE.Mesh(geometry12,material12);
//scene.add(mesh13);
mesh13.position.set(0,0,8.5);
mesh13.rotation.set(0,0,1.570);

var geometry14 = new THREE.CylinderGeometry(0.1,0.1,5,20);
var material14 = new THREE.MeshLambertMaterial({
    color:0xD6A048, side: THREE.DoubleSide
})
var mesh14 = new THREE.Mesh(geometry14,material14);
//scene.add(mesh14);
mesh14.position.set(7,1.5,1);
mesh14.rotation.set(0.1,0,0);

var mesh15 = new THREE.Mesh(geometry14,material14);
//scene.add(mesh15);
mesh15.position.set(7,1.5,0);
mesh15.rotation.set(-0.1,0,0);

var mesh16 = new THREE.Mesh(geometry14,material14);
//scene.add(mesh16);
mesh16.position.set(7,1.5,-1);
mesh16.rotation.set(0.1,0,0);

var mesh17 = new THREE.Mesh(geometry14,material14);
//scene.add(mesh17);
mesh17.position.set(-7,1.5,1);
mesh17.rotation.set(0.1,0,0);

var mesh18 = new THREE.Mesh(geometry14,material14);
//scene.add(mesh18);
mesh18.position.set(-7,1.5,0);
mesh18.rotation.set(-0.1,0,0);

var mesh19 = new THREE.Mesh(geometry14,material14);
//scene.add(mesh19);
mesh19.position.set(-7,1.5,-1);
mesh19.rotation.set(0.1,0,0);

var geometry20 = new THREE.CylinderGeometry(0.3,0.3,2,20);
var material20 = new THREE.MeshLambertMaterial({
    color:0xD6A048, side: THREE.DoubleSide
})
var mesh20 = new THREE.Mesh(geometry20,material20);
//scene.add(mesh20);
mesh20.position.set(1,-1.5,3);
mesh20.scale.set(0.5,1,1);

var mesh21 = new THREE.Mesh(geometry20,material20);
//scene.add(mesh21);
mesh21.position.set(-1,-1.5,3);
mesh21.scale.set(0.5,1,1);

var geometry22 = new THREE.CylinderGeometry(0.6,0.6,0.5,20);
var material22 = new THREE.MeshLambertMaterial({
    color:0x331619, side: THREE.DoubleSide
})
var mesh22 = new THREE.Mesh(geometry22,material22);
//scene.add(mesh22);
mesh22.position.set(1.4,-2.5,3);
mesh22.rotation.set(0,0,1.570);

var mesh23 = new THREE.Mesh(geometry22,material22);
//scene.add(mesh23);
mesh23.position.set(-1.4,-2.5,3);
mesh23.rotation.set(0,0,1.570);

var geometry24 = new THREE.ConeGeometry(2,4,30,10);
var material24 = new THREE.MeshLambertMaterial({
    color:0x1D4B96, side: THREE.DoubleSide
})
var mesh24 = new THREE.Mesh(geometry24,material24);
//scene.add(mesh24);
mesh24.position.set(0,0.2,-10.6);
mesh24.rotation.set(1.9,0,0);
mesh24.scale.set(0.2,1,1);

var geometry25 = new RoundedBoxGeometry (2,0.6,4.1,10,10);
var material25 = new THREE.MeshLambertMaterial({
color: 0xD6A048, side: THREE.DoubleSide
});

var mesh25 = new THREE.Mesh(geometry25,material25);
//scene.add(mesh25);
mesh25.position.set(-8.5,-1,0);

var mesh26 = new THREE.Mesh(geometry25,material25);
//scene.add(mesh26);
mesh26.position.set(-8.5,4,0);

var mesh27 = new THREE.Mesh(geometry25,material25);
//scene.add(mesh27);
mesh27.position.set(8.5,-1,0);

var mesh28 = new THREE.Mesh(geometry25,material25);
//scene.add(mesh28);
mesh28.position.set(8.5,4,0);

var geometry29 = new THREE.SphereGeometry(2);
var material29 = new THREE.MeshLambertMaterial({
    color:0xFFFFFF, side: THREE.DoubleSide
})

var mesh29 = new THREE.Mesh(geometry29,material29);
//scene.add(mesh29);
mesh29.position.set(0,2,0);
mesh29.scale.set(0.5,0.5,1);

var geometry30 = new THREE.CylinderGeometry(0.3,0.3,2,20);
var material30 = new THREE.MeshLambertMaterial({
    color:0x2B2B2B, side: THREE.DoubleSide
})
var mesh30 = new THREE.Mesh(geometry30,material30);
//scene.add(mesh30);
mesh30.position.set(1,-2.5,3);
mesh30.scale.set(0.51,0.2,1.1);

var mesh31 = new THREE.Mesh(geometry30,material30);
//scene.add(mesh31);
mesh31.position.set(-1,-2.5,3);
mesh31.scale.set(0.51,0.2,1.1);

var geometry32 = new THREE.CylinderGeometry(0.4,0.4,0.51,20);
var material32 = new THREE.MeshLambertMaterial({
    color:0xD6A048, side: THREE.DoubleSide
})
var mesh32 = new THREE.Mesh(geometry32,material32);
//scene.add(mesh32);
mesh32.position.set(1.4,-2.5,3);
mesh32.rotation.set(0,0,1.570);

var mesh33 = new THREE.Mesh(geometry32,material32);
//scene.add(mesh33);
mesh33.position.set(-1.4,-2.5,3);
mesh33.rotation.set(0,0,1.570);

var geometry34 = new THREE.TorusGeometry(1.5,0.2,20,20);
var material34 = new THREE.MeshLambertMaterial({
    color:0xC41E3A, side: THREE.DoubleSide
})
var mesh34 = new THREE.Mesh(geometry34,material34);
//scene.add(mesh34);
mesh34.position.set(0,0,-5);
mesh34.rotation.set(-0.09,0,0);

var geometry35 = new THREE.TorusGeometry(1.5,0.25,20,20);
var material35 = new THREE.MeshLambertMaterial({
    color:0xC41E3A, side: THREE.DoubleSide
})
var mesh35 = new THREE.Mesh(geometry35,material35);
//scene.add(mesh35);
mesh35.position.set(0,0,5);
mesh35.rotation.set(0.09,0,0);

const NAVEDAVID = new THREE.Group();
    NAVEDAVID.add(mesh01,mesh02,mesh03,mesh04,mesh05,mesh06,mesh07,mesh08,mesh09,
     mesh10, mesh11,mesh12,mesh13,mesh14,mesh15,mesh16,mesh17,mesh18,mesh19,
     mesh20,mesh21, mesh22,mesh23,mesh24,mesh25,mesh26,mesh27,
    mesh28,mesh29,mesh30,mesh31,mesh32,mesh33,mesh34,mesh35);

    NAVEDAVID.position.set(x,y,z);
    
    return NAVEDAVID;
    
    }   