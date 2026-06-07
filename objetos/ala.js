import * as THREE from 'three';

export default function ALA({ x, y, z }) {

    const ala = new THREE.Group();

    // =====================================
    // MATERIALES
    // =====================================

    var blanco = new THREE.MeshLambertMaterial({
        color: 0xffffff
    });

    var gris = new THREE.MeshLambertMaterial({
        color: 0xd8d8d8
    });

    // =====================================
    // HUESO PRINCIPAL
    // =====================================

    var geoHueso = new THREE.CylinderGeometry(
        1.2,
        0.6,
        18,
        16
    );

    var hueso = new THREE.Mesh(
        geoHueso,
        gris
    );

    hueso.rotation.z = -1.2;
    hueso.position.set(4, 7, 0);

    // =====================================
    // BASE DEL ALA
    // =====================================

    var geoBase = new THREE.SphereGeometry(
        2.8,
        20,
        20
    );

    var base = new THREE.Mesh(
        geoBase,
        gris
    );

    base.scale.set(1.2, 1, 0.8);
    base.position.set(10, 10, 0);

    // =====================================
    // PLUMAS PRIMARIAS
    // =====================================

    var geoPluma = new THREE.SphereGeometry(
        1.5,
        16,
        16
    );

    var p1 = new THREE.Mesh(geoPluma, blanco);
    p1.scale.set(0.5, 5.5, 0.15);
    p1.rotation.z = 0.4;
    p1.position.set(-4, 0, 0);

    var p2 = new THREE.Mesh(geoPluma, blanco);
    p2.scale.set(0.55, 5.8, 0.15);
    p2.rotation.z = 0.2;
    p2.position.set(-2, 1, 0);

    var p3 = new THREE.Mesh(geoPluma, blanco);
    p3.scale.set(0.6, 6, 0.15);
    p3.rotation.z = 0;
    p3.position.set(0, 2, 0);

    var p4 = new THREE.Mesh(geoPluma, blanco);
    p4.scale.set(0.65, 5.8, 0.15);
    p4.rotation.z = -0.15;
    p4.position.set(2, 2.5, 0);

    var p5 = new THREE.Mesh(geoPluma, blanco);
    p5.scale.set(0.7, 5.3, 0.15);
    p5.rotation.z = -0.3;
    p5.position.set(4, 2, 0);

    var p6 = new THREE.Mesh(geoPluma, blanco);
    p6.scale.set(0.75, 4.7, 0.15);
    p6.rotation.z = -0.45;
    p6.position.set(6, 1, 0);

    // =====================================
    // PLUMAS SECUNDARIAS
    // =====================================

    var s1 = new THREE.Mesh(geoPluma, blanco);
    s1.scale.set(0.8, 3.8, 0.2);
    s1.rotation.z = 0.2;
    s1.position.set(1, 5, -0.2);

    var s2 = new THREE.Mesh(geoPluma, blanco);
    s2.scale.set(0.8, 3.6, 0.2);
    s2.rotation.z = 0;
    s2.position.set(3, 5.5, -0.2);

    var s3 = new THREE.Mesh(geoPluma, blanco);
    s3.scale.set(0.8, 3.4, 0.2);
    s3.rotation.z = -0.2;
    s3.position.set(5, 5.3, -0.2);

    var s4 = new THREE.Mesh(geoPluma, blanco);
    s4.scale.set(0.8, 3.2, 0.2);
    s4.rotation.z = -0.4;
    s4.position.set(7, 4.5, -0.2);

    // =====================================
    // PLUMÓN SUPERIOR
    // =====================================

    var geoPlumon = new THREE.SphereGeometry(
        1.3,
        16,
        16
    );

    var n1 = new THREE.Mesh(geoPlumon, blanco);
    n1.position.set(8, 9, 0);

    var n2 = new THREE.Mesh(geoPlumon, blanco);
    n2.position.set(10, 9.5, 0.5);

    var n3 = new THREE.Mesh(geoPlumon, blanco);
    n3.position.set(11, 8, -0.5);

    var n4 = new THREE.Mesh(geoPlumon, blanco);
    n4.position.set(9.5, 7.5, 0);

    // =====================================
    // ENSAMBLADO
    // =====================================

    ala.add(
        hueso,
        base,

        p1,
        p2,
        p3,
        p4,
        p5,
        p6,

        s1,
        s2,
        s3,
        s4,

        n1,
        n2,
        n3,
        n4
    );

    ala.position.set(x, y, z);

    return ala;
}