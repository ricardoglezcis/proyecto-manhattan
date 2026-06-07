import * as THREE from "three";
export default function ESC11 ({x,y,z}){

// Espacio para colocar los objetos

//CUERPO
var geometry1 = new THREE.BoxGeometry(8.5,13,12,4,12,20);
var material1 = new THREE.MeshLambertMaterial({
    color:0xE5FAFF, side: THREE.DoubleSide
})
var mesh1 = new THREE.Mesh(geometry1,material1);
//scene.add(mesh1);
mesh1.position.set(0,11,0)

//PLANO FRONTAL
var geometry2 = new THREE.PlaneGeometry (7,3,8,8);
var material2 = new THREE.MeshBasicMaterial({
    color:0x000000, side: THREE.DoubleSide
})
var mesh2 = new THREE.Mesh(geometry2,material2);
//scene.add(mesh2);
mesh2.position.set(0,15,6.1)

//PLANO L
var geometry3 = new THREE.PlaneGeometry (10,3,8,8);
var material3 = new THREE.MeshBasicMaterial({
    color:0x000000, side: THREE.DoubleSide
})
var mesh3 = new THREE.Mesh(geometry3,material3);
//scene.add(mesh3);
mesh3.position.set(-4.5,15,0);
mesh3.rotation.y = 1.57;

//PLANO R
var geometry4 = new THREE.PlaneGeometry (10,3,8,8);
var material4 = new THREE.MeshBasicMaterial({
    color:0x000000, side: THREE.DoubleSide
})
var mesh4 = new THREE.Mesh(geometry4,material4);
//scene.add(mesh4);
mesh4.position.set(4.5,15,0);
mesh4.rotation.y -= 1.57;

//CUERPO ATRAS
var geometry5 = new THREE.BoxGeometry(8.5,11,3,4,12,20);
var material5 = new THREE.MeshLambertMaterial({
    color:0xCA6FED, side: THREE.DoubleSide
})
var mesh5 = new THREE.Mesh(geometry5,material5);
//scene.add(mesh5);
mesh5.position.set(0,11,-7.5)

//ALA R
var geometry6 = new THREE.BoxGeometry(25,1,5,4,12,20);
var material6 = new THREE.MeshLambertMaterial({
    color:0xE5FAFF, side: THREE.DoubleSide
})
var mesh6 = new THREE.Mesh(geometry6,material6);
//scene.add(mesh6);
mesh6.position.set(16,18,0)

//ALA L
var geometry7 = new THREE.BoxGeometry(25,1,5,4,12,20);
var material7 = new THREE.MeshLambertMaterial({
    color:0xE5FAFF, side: THREE.DoubleSide
})
var mesh7 = new THREE.Mesh(geometry7,material7);
//scene.add(mesh7);
mesh7.position.set(-16,18,0)



//TECHO
var geometry8 = new THREE.CylinderGeometry(5,6,3,4);
var material8 = new THREE.MeshLambertMaterial({
    color:0xBD40ED, side: THREE.DoubleSide
})
var mesh8 = new THREE.Mesh(geometry8,material8);
//scene.add(mesh8);
mesh8.position.set(0,18,0)
mesh8.rotation.y = 0.785;



//FRENTE
var geometry9 = new THREE.CylinderGeometry(3.5,6,7,4);
var material9 = new THREE.MeshLambertMaterial({
    color:0xBD40ED, side: THREE.DoubleSide
})
var mesh9 = new THREE.Mesh(geometry9,material9);
//scene.add(mesh9);
mesh9.position.set(0,8.75,9.5)
mesh9.rotation.x = 1.57;
mesh9.rotation.y = 0.785;


//PUNTA
var geometry10 = new THREE.ConeGeometry(2.5,3.5,8,7);
var material10 = new THREE.MeshLambertMaterial({
    color:0xE5FAFF, side: THREE.DoubleSide
})
var mesh10 = new THREE.Mesh(geometry10,material10);
//scene.add(mesh10);
mesh10.position.set(0,8.75,15)
mesh10.rotation.x = 1.57;

//HELICE
var geometry11 = new THREE.BoxGeometry(1,10,.25,4,12,20);
var material11 = new THREE.MeshLambertMaterial({
    color:0xE5FAFF, side: THREE.DoubleSide
})
var mesh11 = new THREE.Mesh(geometry11,material11);
//scene.add(mesh11);
mesh11.position.set(0,9,15)



//ATRAS
var geometry12 = new THREE.CylinderGeometry(1.5,6,12,4);
var material12 = new THREE.MeshLambertMaterial({
    color:0xBD40ED, side: THREE.DoubleSide
})
var mesh12 = new THREE.Mesh(geometry12,material12);
//scene.add(mesh12);
mesh12.position.set(0,10.75,-14.5)
mesh12.rotation.x -= 1.57;
mesh12.rotation.y = 0.785;

//ATRAS2
var geometry13 = new THREE.BoxGeometry(2.15,2.15,20,4,12,20);
var material13 = new THREE.MeshLambertMaterial({
    color:0xBD40ED, side: THREE.DoubleSide
})
var mesh13 = new THREE.Mesh(geometry13,material13);
//scene.add(mesh13);
mesh13.position.set(0,10.75,-30.5)

//COLA
var geometry14 = new THREE.BoxGeometry(0.5,8,7,4,12,20);
var material14 = new THREE.MeshLambertMaterial({
    color:0xBD40ED, side: THREE.DoubleSide
})
var mesh14 = new THREE.Mesh(geometry14,material14);
//scene.add(mesh14);
mesh14.position.set(0,12.75,-40)

//COLA ARRIBA
var geometry15 = new THREE.BoxGeometry(5,0.5,7,4,12,20);
var material15 = new THREE.MeshLambertMaterial({
    color:0xBD40ED, side: THREE.DoubleSide
})
var mesh15 = new THREE.Mesh(geometry15,material15);
//scene.add(mesh15);
mesh15.position.set(0,17,-40)

//B LLANTA L
var geometry16 = new THREE.BoxGeometry(1,6,1,4,12,20);
var material16 = new THREE.MeshLambertMaterial({
    color:0xE5FAFF, side: THREE.DoubleSide
})
var mesh16 = new THREE.Mesh(geometry16,material16);
//scene.add(mesh16);
mesh16.position.set(-4,3,-5)
mesh16.rotation.x = 0.785;
mesh16.rotation.z -= 0.3925;

//B LLANTA R
var geometry17 = new THREE.BoxGeometry(1,6,1,4,12,20);
var material17 = new THREE.MeshLambertMaterial({
    color:0xE5FAFF, side: THREE.DoubleSide
})
var mesh17 = new THREE.Mesh(geometry17,material17);
//scene.add(mesh17);
mesh17.position.set(4,3,-5)
mesh17.rotation.x = 0.785;
mesh17.rotation.z = 0.3925;

//B LLANTA FRONTAL
var geometry18 = new THREE.BoxGeometry(1,6,1,4,12,20);
var material18 = new THREE.MeshLambertMaterial({
    color:0xE5FAFF, side: THREE.DoubleSide
})
var mesh18 = new THREE.Mesh(geometry18,material18);
//scene.add(mesh18);
mesh18.position.set(0,3,6)
mesh18.rotation.x -= 0.785;

//LLANTA L
var geometry19 = new THREE.TorusGeometry(0.25,1,10,12);
var material19 = new THREE.MeshLambertMaterial({
    color:0x000000, side: THREE.DoubleSide
})
var mesh19 = new THREE.Mesh(geometry19,material19);
//scene.add(mesh19);
mesh19.position.set(-5,1.5,-6.5)
mesh19.rotation.y = 1.57;

//LLANTA R
var geometry20 = new THREE.TorusGeometry(0.25,1,10,12);
var material20 = new THREE.MeshLambertMaterial({
    color:0x000000, side: THREE.DoubleSide
})
var mesh20 = new THREE.Mesh(geometry20,material20);
//scene.add(mesh20);
mesh20.position.set(5,1.5,-6.5)
mesh20.rotation.y = 1.57;

//LLANTA FRONTAL
var geometry21 = new THREE.TorusGeometry(0.25,1,10,12);
var material21 = new THREE.MeshLambertMaterial({
    color:0x000000, side: THREE.DoubleSide
})
var mesh21 = new THREE.Mesh(geometry21,material21);
//scene.add(mesh21);
mesh21.position.set(0,1.5,7.45)
mesh21.rotation.y = 1.57;

const ESC11 = new THREE.Group();
ESC11.add (mesh1,mesh2,mesh3,mesh4,mesh5,mesh6,mesh7,mesh8,mesh9,mesh10,mesh11,mesh12,mesh13,mesh14,mesh15,mesh16,mesh17,mesh18,mesh19,mesh20,mesh21)
ESC11.position.set(x,y,z);
return ESC11;
}