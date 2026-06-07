import * as THREE from 'three';

export default function ESCUDO({ x, y, z }) {

    const ESCUDO1 = new THREE.Group();


    // SILUETA DEL MARCO 
   
    const siluetaMarco = new THREE.Shape();
    
    // Inicio arriba centro
    siluetaMarco.moveTo(0, 10);
    // Curva superior derecha
    siluetaMarco.quadraticCurveTo(4, 11, 8, 9);
    // Curva lateral derecha hacia la punta inferior
    siluetaMarco.quadraticCurveTo(8.5, 2, 0, -10);
    // Curva lateral izquierda desde la punta
    siluetaMarco.quadraticCurveTo(-8.5, 2, -8, 9);
    // Curva superior izquierda de regreso al centro
    siluetaMarco.quadraticCurveTo(-4, 11, 0, 10);

    const opcionesMarco = {
        depth: 0.6,          
        bevelEnabled: true,   
        bevelSegments: 6,     
        steps: 1,
        bevelThickness: 0.5,  
        bevelSize: 0.4,       
        curveSegments: 32     
    };

    const geometry01 = new THREE.ExtrudeGeometry(siluetaMarco, opcionesMarco);
    geometry01.center();

    const material01 = new THREE.MeshLambertMaterial({
        color: 0xDCE1E5, // Plateado
        side: THREE.DoubleSide
    });

    const mesh01 = new THREE.Mesh(geometry01, material01);
    ESCUDO1.add(mesh01);

    //  SILUETA DEL CENTRO 

    const siluetaCentro = new THREE.Shape();
    
    // Un poco más pequeño para que entre justo en el marco
    siluetaCentro.moveTo(0, 8.8);
    siluetaCentro.quadraticCurveTo(3.4, 9.6, 6.8, 7.8);
    siluetaCentro.quadraticCurveTo(7.2, 1.8, 0, -8.8);
    siluetaCentro.quadraticCurveTo(-7.2, 1.8, -6.8, 7.8);
    siluetaCentro.quadraticCurveTo(-3.4, 9.6, 0, 8.8);

    const opcionesCentro = {
        depth: 0.4,          
        bevelEnabled: true,   
        bevelSegments: 6,     
        steps: 1,
        bevelThickness: 0.4,  
        bevelSize: 0.3,       
        curveSegments: 32     
    };

    const geometry02 = new THREE.ExtrudeGeometry(siluetaCentro, opcionesCentro);
    geometry02.center();

    const material02 = new THREE.MeshLambertMaterial({
        color: 0x1CA9E6, 
        side: THREE.DoubleSide
    });

    const mesh02 = new THREE.Mesh(geometry02, material02);

    mesh02.position.z = 0.4; 
    
    ESCUDO1.add(mesh02);


    ESCUDO1.position.set(x, y, z);

    return ESCUDO1;
}