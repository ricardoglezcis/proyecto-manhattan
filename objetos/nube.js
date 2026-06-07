import * as THREE from 'three';

export default function NUBE ({ x, y, z}){


    //  NUBE
    var cloudGroup = new THREE.Group();

    // Material
    var cloudMaterial = new THREE.MeshLambertMaterial({
        color: 0xffffff,
    });

    // Geometría base 
    var sphereGeo = new THREE.SphereGeometry(10, 32, 32);

    // Esfera central
    var sphere1 = new THREE.Mesh(sphereGeo, cloudMaterial);
    sphere1.position.set(0, 0, 0);
    sphere1.scale.set(1.2, 1.2, 1.2); // Ligeramente más grande

    // Esfera derecha
    var sphere2 = new THREE.Mesh(sphereGeo, cloudMaterial);
    sphere2.position.set(12, -2, 2);
    sphere2.scale.set(0.8, 0.8, 0.8);

    // Esfera izquierda
    var sphere3 = new THREE.Mesh(sphereGeo, cloudMaterial);
    sphere3.position.set(-12, -2, -2);
    sphere3.scale.set(0.8, 0.8, 0.8);

    // Esfera superior derecha
    var sphere4 = new THREE.Mesh(sphereGeo, cloudMaterial);
    sphere4.position.set(6, 5, -4);
    sphere4.scale.set(0.9, 0.9, 0.9);

    // Esfera superior izquierda
    var sphere5 = new THREE.Mesh(sphereGeo, cloudMaterial);
    sphere5.position.set(-6, 5, 4);
    sphere5.scale.set(0.9, 0.9, 0.9);

    // 
    cloudGroup.add(sphere1, sphere2, sphere3, sphere4, sphere5);

    const NUBE01 = new THREE.Group();
 NUBE01.add(cloudGroup);
 NUBE01.position.set(x,y,z);

    return NUBE01;
}