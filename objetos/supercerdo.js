import * as THREE from 'three';
export default function CerdoVolador({x, y, z}){



        //CUERPO CERDITOOO
        var matCuerpo = new THREE.MeshLambertMaterial({ 
            color: 0xF5B6C6 });
        var matNegro = new THREE.MeshLambertMaterial({ 
            color: 0x000000 });
        var matBlanco = new THREE.MeshLambertMaterial({ 
            color: 0xffffff });

        const cerdobueno = new THREE.Group();
        var cuerpo = new THREE.Mesh(new THREE.CapsuleGeometry(1, 2.2, 16, 32), matCuerpo);
        cuerpo.rotation.z = Math.PI/2;
        var cabeza = new THREE.Mesh(new THREE.SphereGeometry(0.85, 32, 32), matCuerpo); 
        cabeza.position.set(2.2, 0.2, 0);
        var hocico = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.35, 0.7, 32), matCuerpo); 
        hocico.position.set(3, 0.1, 0); hocico.rotation.z = Math.PI/2;
        var ojo1 = new THREE.Mesh(new THREE.SphereGeometry(0.12, 32, 32), matNegro); 
        ojo1.position.set(2.85, 0.5, 0.35);

        var ojo2 = ojo1.clone(); 
        ojo2.position.set(2.85, 0.5, -0.35);
        var oreja1 = new THREE.Mesh(new THREE.ConeGeometry(0.3, 0.7, 32), matCuerpo); 
        oreja1.position.set(2.1, 1, 0.4); 
        oreja1.rotation.set(0, 0, -0.6);

        var oreja2 = oreja1.clone(); oreja2.position.set(2.1, 1, -0.4); 
        oreja2.rotation.set(0, 0, -0.6);
        var pataG = new THREE.CylinderGeometry(0.28, 0.28, 1.5, 16);
        var pata1 = new THREE.Mesh(pataG, matCuerpo); 
        pata1.position.set(-0.8, -1, 0.6);
        var pata2 = new THREE.Mesh(pataG, matCuerpo); 
        pata2.position.set(-0.8, -1, -0.6);
        var pata3 = new THREE.Mesh(pataG, matCuerpo); 
        pata3.position.set(0.8, -1, 0.6);
        var pata4 = new THREE.Mesh(pataG, matCuerpo); 
        pata4.position.set(0.8, -1, -0.6);
        var alaG = new THREE.ConeGeometry(1, 3, 16);
        var ala1 = new THREE.Mesh(alaG, matBlanco); 
        ala1.position.set(-0.2, 0.5, 1.1); 
        ala1.rotation.set(0.5, 0, Math.PI/2);
        var ala2 = ala1.clone(); ala2.position.set(-0.2, 0.5, -1.1); 
        ala2.rotation.set(-0.5, 0, Math.PI/2);
        var cola = new THREE.Mesh(new THREE.TorusGeometry(0.5, 0.08, 16, 10), matCuerpo); 
        cola.position.set(-2.2, 0.1, 0); 
        cola.rotation.set(0, Math.PI/2, 0);

        cerdobueno.add(cuerpo, cabeza, hocico, ojo1, ojo2, oreja1, oreja2, pata1, pata2, pata3, pata4, ala1, ala2, cola);

const cerdo = new THREE.Group();
cerdo.add(cerdobueno);
cerdo.position.set(x,y,z);
return cerdo;
}