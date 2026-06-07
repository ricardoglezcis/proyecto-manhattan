import * as THREE from 'three';

export default function avionetaAmarilla ({x, y, z}){
//////////////////////////////////////////////////////

var geometryA01 = new THREE.CylinderGeometry(7,7,50,32);
var materialA01 = new THREE.MeshLambertMaterial({color:0xFFD200});
var meshA01 = new THREE.Mesh(geometryA01,materialA01);
//scene.add(meshA01);
meshA01.rotation.set(0,0,1.5708); // Usando rotation.set para voltear la pieza
meshA01.position.set(0,20,0);

//////////////////////////////////////////////////////
// FRANJAS NEGRAS
//////////////////////////////////////////////////////

var geometryA02 = new THREE.CylinderGeometry(7.2,7.2,6,32);
var materialA02 = new THREE.MeshLambertMaterial({color:0x111111});

var meshA02 = new THREE.Mesh(geometryA02,materialA02);
//scene.add(meshA02);
meshA02.rotation.set(0,0,1.5708);
meshA02.position.set(15,20,0);

var meshA03 = new THREE.Mesh(geometryA02,materialA02);
//scene.add(meshA03);
meshA03.rotation.set(0,0,1.5708);
meshA03.position.set(0,20,0);

var meshA04 = new THREE.Mesh(geometryA02,materialA02);
//scene.add(meshA04);
meshA04.rotation.set(0,0,1.5708);
meshA04.position.set(-20,20,0);

//////////////////////////////////////////////////////
//  frente
//////////////////////////////////////////////////////

var geometryA05 = new THREE.SphereGeometry(6.7,32,32);
var materialA05 = new THREE.MeshLambertMaterial({color:0x111111});
var meshA05 = new THREE.Mesh(geometryA05,materialA05);
//scene.add(meshA05);
meshA05.position.set(25,20,0);

//////////////////////////////////////////////////////
//  CABINA
//////////////////////////////////////////////////////

var geometryA06 = new THREE.SphereGeometry(6,32,32);
var materialA06 = new THREE.MeshLambertMaterial({
    color:0xA1D8FF,
    transparent:true,
    opacity:0.8
});
var meshA06 = new THREE.Mesh(geometryA06,materialA06);
//scene.add(meshA06);
meshA06.scale.set(1.3,1.3,1);
meshA06.position.set(-10,26,0);

//////////////////////////////////////////////////////
// ALAS (SUPERIOR E INFERIOR)
//////////////////////////////////////////////////////

var geometryA07 = new THREE.BoxGeometry(16,2,70);
var materialA07 = new THREE.MeshLambertMaterial({color:0xFFD200});

var meshA07 = new THREE.Mesh(geometryA07,materialA07);
//scene.add(meshA07);
meshA07.position.set(6.5,27,0);

var geometryA107 = new THREE.BoxGeometry(18,2,50);
var materialA107 = new THREE.MeshLambertMaterial({color:0xFFD200});

var meshA108 = new THREE.Mesh(geometryA107,materialA107);
//scene.add(meshA108);
meshA108.position.set(6.5,12,0);

//////////////////////////////////////////////////////
// SOPORTESS ALAS
//////////////////////////////////////////////////////

var geometryA09 = new THREE.BoxGeometry(4,19,3);
var materialA09 = new THREE.MeshLambertMaterial({color:0xFFD200});

var meshA09 = new THREE.Mesh(geometryA09,materialA09);
//scene.add(meshA09);
meshA09.position.set(6.5,27,35);
meshA09.rotation.set(0,0,1.5708);

var meshA10 = new THREE.Mesh(geometryA09,materialA09);
//scene.add(meshA10);
meshA10.position.set(6.5,27,-35);
meshA10.rotation.set(0,0,1.5708);

var meshA11 = new THREE.Mesh(geometryA09,materialA09);
//scene.add(meshA11);
meshA11.position.set(6.5,12,25);
meshA11.rotation.set(0,0,1.5708);

var meshA12 = new THREE.Mesh(geometryA09,materialA09);
//scene.add(meshA12);
meshA12.position.set(6.5,12,-25);
meshA12.rotation.set(0,0,1.5708);

//////////////////////////////////////////////////////
//  COLA 
//////////////////////////////////////////////////////

// Estabilizador Horizontal
var geometryA13 = new THREE.BoxGeometry(6,20,15);
var materialA13 = new THREE.MeshLambertMaterial({color:0xFFD200}); 
var meshA13 = new THREE.Mesh(geometryA13,materialA13);
//scene.add(meshA13);
meshA13.position.set(-28,23,0);

var geometryA132 = new THREE.BoxGeometry(6,20,15);
var materialA132 = new THREE.MeshLambertMaterial({color:0x000000}); 
var meshA132 = new THREE.Mesh(geometryA132,materialA132);
//scene.add(meshA132);
meshA132.position.set(-34,23,0);


var geometryA11 = new THREE.BoxGeometry(15,2,50);
var materialA131 = new THREE.MeshLambertMaterial({color:0xFFD200}); 
var meshA131 = new THREE.Mesh(geometryA11,materialA131);
//scene.add(meshA131);
meshA131.position.set(-31,34,0);


// Estabilizador Vertical
var geometryA14 = new THREE.BoxGeometry(3,3,18);
var materialA14 = new THREE.MeshLambertMaterial({color:0xFFD200}); 
var meshA14 = new THREE.Mesh(geometryA14,materialA14);
//scene.add(meshA14);
meshA14.position.set(-31,34,25);
meshA14.rotation.set(0,1.45,0);

var meshA142 = new THREE.Mesh(geometryA14,materialA14);
//scene.add(meshA142);
meshA142.position.set(-31,34,-25);
meshA142.rotation.set(0,1.45,0);

//////////////////////////////////////////////////////
//  HELICE 
//////////////////////////////////////////////////////

var geometryA16 = new THREE.BoxGeometry(2,35,4);
var materialA16 = new THREE.MeshLambertMaterial({color:0xFFD200});

// 
var meshA16 = new THREE.Mesh(geometryA16,materialA16);
meshA16.position.set(32,20,0);

var meshA17 = new THREE.Mesh(geometryA16,materialA16);
meshA17.position.set(32,20,0);
meshA17.rotation.set(1.5708,0,0);  

// 2. Las agrupamos
var heliceGrupo = new THREE.Group();
heliceGrupo.add(meshA16, meshA17);
heliceGrupo.name = "miHelice"; // Rescatamos este nombre en el HTML

// 3. Movemos el GRUPO entero a la nariz del avión
heliceGrupo.position.set(33,20,100); 

//////////////////////////////////////////////////////
//  LLANTAS
//////////////////////////////////////////////////////

var geometryA18 = new THREE.CylinderGeometry(5,5,3,32);
var materialA18 = new THREE.MeshLambertMaterial({color:0x222222});

var meshA18 = new THREE.Mesh(geometryA18,materialA18);
//scene.add(meshA18);
meshA18.rotation.set(1.5708,0,0); 
meshA18.position.set(10,7,20);

var meshA19 = new THREE.Mesh(geometryA18,materialA18);
//scene.add(meshA19);
meshA19.rotation.set(1.5708,0,0);
meshA19.position.set(10,7,-20);

var meshA20 = new THREE.Mesh(geometryA18,materialA18);
//scene.add(meshA20);
meshA20.rotation.set(1.5708,0,0); 
meshA20.position.set(-20,7,11);

var meshA23 = new THREE.Mesh(geometryA18,materialA18);
//scene.add(meshA23);
meshA23.rotation.set(1.5708,0,0);
meshA23.position.set(-20,7,-11);


//////////////////////////////////////////////////////
// CILINDROS PARA LAS RUEDAS TRASERAS
//////////////////////////////////////////////////////

var geometryA21 = new THREE.CylinderGeometry(1,1,18,32);
var materialA21 = new THREE.MeshLambertMaterial({color:0xFFD200});

var meshA21 = new THREE.Mesh(geometryA21,materialA21);
//scene.add(meshA21);
meshA21.rotation.set(-0.7854,0,-0.7854); 
meshA21.position.set(-17,10,7);

var meshA22 = new THREE.Mesh(geometryA21,materialA21);
//scene.add(meshA22);
meshA22.rotation.set(0.7854,0,-0.7854); 
meshA22.position.set(-17,10,-7);

var heliceGrupo = new THREE.Group();
heliceGrupo.add(meshA16, meshA17);
heliceGrupo.name = "miHelice"; 

// GRUPO QUE CONTIENE TODO
var avioneta = new THREE.Group();

avioneta.add(
    meshA01, meshA02, meshA03, meshA04, meshA05, meshA06,
    meshA07, meshA108, meshA09, meshA10, meshA11, meshA12, 
    meshA13, meshA132, meshA131, meshA14, meshA142, 
    heliceGrupo, // Agregamos el grupo de la hélice aquí
    meshA18, meshA19, meshA20, meshA21, meshA22, meshA23
);


// Antes decía -1.5708, ahora ponlo positivo:
avioneta.scale.set(0.1, 0.1, 0.1);
avioneta.rotation.set(0, 1.5708, 0); 

return avioneta;
}


