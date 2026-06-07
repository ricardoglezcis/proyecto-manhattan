import * as THREE from 'three';

export default function ARBOL({ x, y, z }) {

    const ARBOL1 = new THREE.Group();

    // ==========================================
    // TRONCO
    // ==========================================
    var geometry01 = new THREE.CylinderGeometry(2,3.5,40,12);

    var material01 = new THREE.MeshLambertMaterial({
        color:0x6B4423,
        side:THREE.DoubleSide
    });

    var mesh01 = new THREE.Mesh(
        geometry01,
        material01
    );

    mesh01.position.set(0,20,0);

    // ==========================================
    // 
    // ==========================================
    var geometry02 = new THREE.SphereGeometry(6,24,24);

    var material02 = new THREE.MeshLambertMaterial({
        color:0x2E8B57,
        side:THREE.DoubleSide
    });

    var material03 = new THREE.MeshLambertMaterial({
        color:0x1F5F3B,
        side:THREE.DoubleSide
    });

    var material04 = new THREE.MeshLambertMaterial({
        color:0x3FA34D,
        side:THREE.DoubleSide
    });

    // BASE
    var mesh02 = new THREE.Mesh(geometry02,material02);
    mesh02.position.set(-8,38,0);
    mesh02.scale.set(1,0.9,1);

    var mesh03 = new THREE.Mesh(geometry02,material03);
    mesh03.position.set(8,38,0);
    mesh03.scale.set(1,0.9,1);

    var mesh04 = new THREE.Mesh(geometry02,material04);
    mesh04.position.set(0,38,8);
    mesh04.scale.set(1,0.9,1);

    var mesh05 = new THREE.Mesh(geometry02,material02);
    mesh05.position.set(0,38,-8);
    mesh05.scale.set(1,0.9,1);

    // CENTRO
    var mesh06 = new THREE.Mesh(geometry02,material03);
    mesh06.position.set(0,42,0);
    mesh06.scale.set(1.6,1.4,1.6);

    // INTERMEDIOS
    var mesh07 = new THREE.Mesh(geometry02,material02);
    mesh07.position.set(-5,46,4);
    mesh07.scale.set(0.9,0.9,0.9);

    var mesh08 = new THREE.Mesh(geometry02,material04);
    mesh08.position.set(5,46,-4);
    mesh08.scale.set(0.9,0.9,0.9);

    var mesh09 = new THREE.Mesh(geometry02,material03);
    mesh09.position.set(-4,49,-3);
    mesh09.scale.set(0.8,0.8,0.8);

    var mesh10 = new THREE.Mesh(geometry02,material02);
    mesh10.position.set(4,49,3);
    mesh10.scale.set(0.8,0.8,0.8);

    // PARTE ALTA
    var mesh11 = new THREE.Mesh(geometry02,material04);
    mesh11.position.set(0,53,0);
    mesh11.scale.set(0.9,0.9,0.9);

    var mesh12 = new THREE.Mesh(geometry02,material02);
    mesh12.position.set(-2,56,1);
    mesh12.scale.set(0.6,0.6,0.6);

    var mesh13 = new THREE.Mesh(geometry02,material03);
    mesh13.position.set(2,56,-1);
    mesh13.scale.set(0.6,0.6,0.6);

    var mesh14 = new THREE.Mesh(geometry02,material04);
    mesh14.position.set(0,59,0);
    mesh14.scale.set(0.5,0.5,0.5);

    // ==========================================
    // 
    // ==========================================
    ARBOL1.add(
        mesh01,
        mesh02,
        mesh03,
        mesh04,
        mesh05,
        mesh06,
        mesh07,
        mesh08,
        mesh09,
        mesh10,
        mesh11,
        mesh12,
        mesh13,
        mesh14
    );

    ARBOL1.position.set(x,y,z);

    return ARBOL1;
}