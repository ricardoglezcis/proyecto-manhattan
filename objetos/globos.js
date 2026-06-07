import * as THREE from 'three';
export default function globos ({x, y, z}){

const grupoGlobos = new THREE.Group();

//GLOBO 1
var geometryG1 = new THREE.SphereGeometry(2,32,32);
var materialG1 = new THREE.MeshLambertMaterial({color:0xff0000, side:THREE.DoubleSide});
var meshG1 = new THREE.Mesh(geometryG1,materialG1);
meshG1.position.set(0, 24, -1);
grupoGlobos.add(meshG1);

var hiloG1 = new THREE.CylinderGeometry(0.05,0.05,6,8);
var materialH1 = new THREE.MeshLambertMaterial({color:0xffffff});
var meshH1 = new THREE.Mesh(hiloG1,materialH1);
meshH1.position.set(0, 20, -2); 
grupoGlobos.add(meshH1);


//GLOBO 2
var geometryG2 = new THREE.SphereGeometry(2,32,32);
var materialG2 = new THREE.MeshLambertMaterial({color:0xFF9D00, side:THREE.DoubleSide});
var meshG2 = new THREE.Mesh(geometryG2,materialG2);
meshG2.position.set(-3, 21, 0.5);
grupoGlobos.add(meshG2);

var hiloG2 = new THREE.CylinderGeometry(0.05,0.05,6,8);
var materialH2 = new THREE.MeshLambertMaterial({color:0xffffff});
var meshH2 = new THREE.Mesh(hiloG2,materialH2);
meshH2.position.set(-3, 16, 0.5);
grupoGlobos.add(meshH2);


//GLOBO 3
var geometryG3 = new THREE.SphereGeometry(2,32,32);
var materialG3 = new THREE.MeshLambertMaterial({color:0x0000ff, side:THREE.DoubleSide});
var meshG3 = new THREE.Mesh(geometryG3,materialG3);
meshG3.position.set(3, 21, 0.5);
grupoGlobos.add(meshG3);

var hiloG3 = new THREE.CylinderGeometry(0.05,0.05,6,8);
var materialH3 = new THREE.MeshLambertMaterial({color:0xffffff});
var meshH3 = new THREE.Mesh(hiloG3,materialH3);
meshH3.position.set(3, 16, 0.5);
grupoGlobos.add(meshH3);


//GLOBO 4
var geometryG4 = new THREE.SphereGeometry(2,32,32);
var materialG4 = new THREE.MeshLambertMaterial({color:0xffff00, side:THREE.DoubleSide});
var meshG4 = new THREE.Mesh(geometryG4,materialG4);
meshG4.position.set(0, 20.5,1);
grupoGlobos.add(meshG4);

var hiloG4 = new THREE.CylinderGeometry(0.05,0.05,6,8);
var materialH4 = new THREE.MeshLambertMaterial({color:0xffffff});
var meshH4 = new THREE.Mesh(hiloG4,materialH4);
meshH4.position.set(0, 17,1);
grupoGlobos.add(meshH4);


//GLOBO 5
var geometryG5 = new THREE.SphereGeometry(2,32,32);
var materialG5 = new THREE.MeshLambertMaterial({color:0xff00ff, side:THREE.DoubleSide});
var meshG5 = new THREE.Mesh(geometryG5,materialG5);
meshG5.position.set(-1.8, 17.5, 2.2);
grupoGlobos.add(meshG5);

var hiloG5 = new THREE.CylinderGeometry(0.05,0.05,6,8);
var materialH5 = new THREE.MeshLambertMaterial({color:0xffffff});
var meshH5 = new THREE.Mesh(hiloG5,materialH5);
meshH5.position.set(-1.8, 14, 2.2);
grupoGlobos.add(meshH5);


//GLOBO 6
var geometryG6 = new THREE.SphereGeometry(2,32,32);
var materialG6 = new THREE.MeshLambertMaterial({color:0x00ffff, side:THREE.DoubleSide});
var meshG6 = new THREE.Mesh(geometryG6,materialG6);
meshG6.position.set(1.8, 17.5, 2.2);
grupoGlobos.add(meshG6);

var hiloG6 = new THREE.CylinderGeometry(0.05,0.05,6,8);
var materialH6 = new THREE.MeshLambertMaterial({color:0xffffff});
var meshH6 = new THREE.Mesh(hiloG6,materialH6);
meshH6.position.set(1.8, 14, 2.2);
grupoGlobos.add(meshH6);

grupoGlobos.position.set(x,y,z);

return grupoGlobos;
}