import * as THREE from 'three';
export default function G02({x, y, z}){

var geometry01 = new THREE.SphereGeometry(7,20,30);
var material01 = new THREE.MeshLambertMaterial({
color:0x1E4A0E, side: THREE.DoubleSide});
var mesh01 = new THREE.Mesh(geometry01,material01);
//scene.add(mesh01);
mesh01.position.set(0,10.3,0);
mesh01.scale.set(1.5,1,1);


var geometry02 = new THREE.BoxGeometry(4,8,8,4,12,20);
var mesh02 = new THREE.Mesh(geometry02,material01);
//scene.add(mesh02);
mesh02.position.set(-15,11,0);

var geometry03 = new THREE.BoxGeometry(3,6,6,4,2,2);
var material02 = new THREE.MeshLambertMaterial({
color:0x000000, side: THREE.DoubleSide, wireframe: true
});
var mesh03 = new THREE.Mesh(geometry03,material02);
//scene.add(mesh03);
mesh03.position.set(-11.5,11,0);

var geometry04 = new THREE.BoxGeometry(2.9,5.8,5.8,4,2,2);
var mesh04 = new THREE.Mesh(geometry04,material01);
//scene.add(mesh04);
mesh04.position.set(-11.5,11,0);


var geometry05 = new THREE.BoxGeometry(.8,8.2,8.2,4,2,2);
var material03 = new THREE.MeshLambertMaterial({
color:0x000000, side: THREE.DoubleSide
});
var mesh05 = new THREE.Mesh(geometry05,material03);
//scene.add(mesh05);
mesh05.position.set(-13.5,11,0);

var mesh06 = new THREE.Mesh(geometry05,material03);
//scene.add(mesh06);
mesh06.position.set(-16.5,11,0);


var geometry06 = new THREE.TorusGeometry(3,0.8,10,30);
var material04 = new THREE.MeshLambertMaterial({
color:0xD10202, side: THREE.DoubleSide});
var mesh07 = new THREE.Mesh(geometry06,material04);
//scene.add(mesh07);
mesh07.position.set(-9.3,10.5,0);
mesh07.rotation.set(0,1.57,0);


var geometry07 = new THREE.SphereGeometry(3,20,30);
var mesh08 = new THREE.Mesh(geometry07,material04);
//scene.add(mesh08);
mesh08.position.set(8.25,10.5,0);


var geometry08 = new THREE.TorusGeometry(5.5,2,10,30);
var mesh09 = new THREE.Mesh(geometry08,material03);
//scene.add(mesh09);
mesh09.position.set(0,10.3,0);
mesh09.rotation.set(0,1.57,0);


var geometry09 = new THREE.TorusGeometry(6,0.3,10,30);
var mesh10 = new THREE.Mesh(geometry09,material03);
//scene.add(mesh10);
mesh10.position.set(5,10.3,0);
mesh10.rotation.set(0,1.57,0);


var mesh11 = new THREE.Mesh(geometry09,material03);
//scene.add(mesh11);
mesh11.position.set(-5,10.3,0);
mesh11.rotation.set(0,1.57,0);



var geometry10 = new THREE.TorusGeometry(5.7,0.3,10,30);
var mesh12 = new THREE.Mesh(geometry10,material03);
//scene.add(mesh12);
mesh12.position.set(6,10.3,0);
mesh12.rotation.set(0,1.57,0);

var mesh13 = new THREE.Mesh(geometry10,material03);
//scene.add(mesh13);
mesh13.position.set(-6,10.3,0);
mesh13.rotation.set(0,1.57,0);



var geometry11 = new THREE.SphereGeometry(1,20,30);
var material05 = new THREE.MeshLambertMaterial({
color:0x969595, side: THREE.DoubleSide});
var mesh14 = new THREE.Mesh(geometry11,material05);
//scene.add(mesh14);
mesh14.position.set(0,17.3,0);

var mesh15 = new THREE.Mesh(geometry11,material05);
//scene.add(mesh15);
mesh15.position.set(0,15.3,5);

var mesh16 = new THREE.Mesh(geometry11,material05);
//scene.add(mesh16);
mesh16.position.set(0,11.3,7);

var mesh17 = new THREE.Mesh(geometry11,material05);
//scene.add(mesh17);
mesh17.position.set(0,5,5);

var mesh18 = new THREE.Mesh(geometry11,material05);
//scene.add(mesh18);
mesh18.position.set(0,3.2,0);

var mesh19 = new THREE.Mesh(geometry11,material05);
//scene.add(mesh19);
mesh19.position.set(0,5,-5);

var mesh20 = new THREE.Mesh(geometry11,material05);
//scene.add(mesh20);
mesh20.position.set(0,11.3,-7);

var mesh21 = new THREE.Mesh(geometry11,material05);
//scene.add(mesh21);
mesh21.position.set(0,15.3,-5);


var bomba = new THREE.Group();
bomba.add(mesh01,mesh02,mesh03,mesh04,mesh05,mesh06,mesh07,mesh08,mesh09,
    mesh10,mesh11,mesh12,mesh13,mesh14,mesh15,mesh16,mesh17,mesh18,mesh19,
    mesh20,mesh21
);
//scene.add(bomba);


const boom = new THREE.Group();
boom.add(bomba);
boom.position.set(x,y,z);
return boom;
}