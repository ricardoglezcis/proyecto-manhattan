import * as THREE from 'three';
export default function G01({x, y, z}){


//Nave

var geometry01 = new THREE.SphereGeometry(7,20,30);
var material01 = new THREE.MeshLambertMaterial({
color:0xA6976A, side: THREE.DoubleSide});
var mesh01 = new THREE.Mesh(geometry01,material01);
//scene.add(mesh01);
mesh01.position.set(0,10.3,0);
mesh01.scale.set(1,0.3,1);


var geometry02 = new THREE.SphereGeometry(3,20,20);
var material02 = new THREE.MeshLambertMaterial({
color:0x047D7D, side: THREE.DoubleSide});
var mesh02 = new THREE.Mesh(geometry02,material02);
//scene.add(mesh02);
mesh02.position.set(0,12,0);
mesh02.scale.set(1,1.2,1);

//rojos
var geometry03 = new THREE.SphereGeometry(0.5,20,20);
var material03 = new THREE.MeshLambertMaterial({
color:0xDE0202, side: THREE.DoubleSide});
var mesh03 = new THREE.Mesh(geometry03,material03);
//scene.add(mesh03);
mesh03.position.set(0,12,4);

var mesh04 = new THREE.Mesh(geometry03,material03);
//scene.add(mesh04);
mesh04.position.set(0,12,-4);

var mesh05 = new THREE.Mesh(geometry03,material03);
//scene.add(mesh05);
mesh05.position.set(4,12,0);

var mesh06 = new THREE.Mesh(geometry03,material03);
//scene.add(mesh06);
mesh06.position.set(-4,12,0);

//verde
var material04 = new THREE.MeshLambertMaterial({
color:0x16DE00, side: THREE.DoubleSide});
var mesh07 = new THREE.Mesh(geometry03,material04);
//scene.add(mesh07);
mesh07.position.set(3,12,3);

var mesh08 = new THREE.Mesh(geometry03,material04);
//scene.add(mesh08);
mesh08.position.set(3,12,-3);

var mesh09 = new THREE.Mesh(geometry03,material04);
//scene.add(mesh09);
mesh09.position.set(-3,12,-3);


var mesh9 = new THREE.Mesh(geometry03,material04);
//scene.add(mesh9);
mesh9.position.set(-3,12,3);


//DETALLES rueda café

var geometry04 = new THREE.TorusGeometry(4.8,0.5,15,20);
var material05 = new THREE.MeshLambertMaterial({
color:0x7D4104, side: THREE.DoubleSide});
var mesh10 = new THREE.Mesh(geometry04,material05);
//scene.add(mesh10);
mesh10.rotation.set(1.6,0,0);
mesh10.position.set(0,9,0);

//ojos
var geometry05 = new THREE.TorusGeometry(1,0.3,15,20);
var material06 = new THREE.MeshLambertMaterial({
color:0x7D4104, side: THREE.DoubleSide});
var mesh11 = new THREE.Mesh(geometry05,material06);
//scene.add(mesh11);
mesh11.rotation.set(0,0.7,0);
mesh11.position.set(2,11.5,5);


var mesh12 = new THREE.Mesh(geometry05,material06);
//scene.add(mesh12);
mesh12.rotation.set(0,-0.7,0);
mesh12.position.set(-2,11.5,5);




var esfera = new THREE.SphereGeometry(1,10,10);
var blanco = new THREE.MeshLambertMaterial({
color:0xffffff, side: THREE.DoubleSide});
var ojod = new THREE.Mesh(esfera,blanco);
//scene.add(ojod);
ojod.position.set(1.9,11.4,4.6);

var ojoi = new THREE.Mesh(esfera,blanco);
//scene.add(ojoi);
ojoi.position.set(-1.9,11.4,4.6);


var esfera = new THREE.SphereGeometry(1.2,10,10);
var material07 = new THREE.MeshLambertMaterial({
color:0x858046, side: THREE.DoubleSide});
var contorno = new THREE.Mesh(esfera,material07);
//scene.add(contorno);
contorno.position.set(1.6,11.4,4.2);

var contorno2 = new THREE.Mesh(esfera,material07);
//scene.add(contorno2);
contorno2.position.set(-1.6,11.4,4.2);


//pupilas rojas

var pupilai = new THREE.Mesh(geometry03,material03);
//scene.add(pupilai);
pupilai.position.set(2.1,11.4,5.1);
pupilai.scale.set(0.7,2,1);

var pupilad = new THREE.Mesh(geometry03,material03);
//scene.add(pupilad);
pupilad.position.set(-2.1,11.4,5.1);
pupilad.scale.set(0.7,2,1);


//alas

var geometry06 = new THREE.OctahedronGeometry(2,0); 
var material08 = new THREE.MeshLambertMaterial({
color:0x949494, side: THREE.DoubleSide});
var alai = new THREE.Mesh(geometry06,material08);
//scene.add(alai);
alai.position.set(6.8,11,0);
alai.scale.set(1,2,0.5);
alai.rotation.set(1.7,0.5,-1.97);

var alad = new THREE.Mesh(geometry06,material08);
//scene.add(alad);
alad.position.set(-6.8,11,0);
alad.scale.set(1,2,0.5);
alad.rotation.set(-1.7,0.5,-1.97);

//ala atras

var esferaa = new THREE.SphereGeometry(2,2,10);
var alaa = new THREE.Mesh(esferaa,material08);
//scene.add(alaa);
alaa.position.set(0,11,-7);
alaa.scale.set(1,1.4,0.5);
alaa.rotation.set(-.85,1.55,0);


var nave = new THREE.Group();
nave.add(mesh01,mesh02,mesh03,mesh04,mesh05,mesh06,mesh07,mesh08,mesh9,mesh09,
    mesh10,mesh11,mesh12,ojoi,ojod,contorno,contorno2,pupilad,pupilai,alaa,alai,alad
);
//scene.add(nave);

const ovni = new THREE.Group();
ovni.add(nave);
ovni.position.set(x,y,z);
return ovni;
}
