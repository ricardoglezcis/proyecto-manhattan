import * as THREE from 'three';

export default function ALA({ x, y, z }) {

    const ALA1 = new THREE.Group();


    // SILUETA 
  
    const silueta = new THREE.Shape();
    
    // base
    silueta.moveTo(0, 3);
    
    // Curva
    silueta.bezierCurveTo(1, 10, 4, 16, 7, 22);
    
    //PUNTA 1 
    silueta.lineTo(7.5, 17); 
    
    // PUNTA 2
    silueta.lineTo(10.5, 17.5); 
    silueta.lineTo(8.5, 13);    
    
    // PUNTA 3
    silueta.lineTo(11, 12.5);  
    silueta.lineTo(8.5, 8.5);  
    
    // PUNTA 4 
    silueta.lineTo(10, 8);
    
    // Curva final 
    silueta.quadraticCurveTo(5, 2, 0, 3);


    //
    const opcionesExtrusion = {
        depth: 0.4,          
        bevelEnabled: true,   
        bevelSegments: 7,     
        steps: 1,
        bevelThickness: 1.2,  
        bevelSize: 0.8,       
        curveSegments: 32     
    };

    const geometry01 = new THREE.ExtrudeGeometry(silueta, opcionesExtrusion);
    
    geometry01.center();

    //  MATERIAL 
  
    const material01 = new THREE.MeshLambertMaterial({
        color: 0xEEEEEE, 
        side: THREE.DoubleSide
    });

    const mesh01 = new THREE.Mesh(geometry01, material01);

    ALA1.add(mesh01);

    ALA1.position.set(x, y, z);

    return ALA1;
}