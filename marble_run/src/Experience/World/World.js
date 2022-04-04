import * as THREE from 'three'
import Experience from "../Experience";


export default class World 
{
    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene

        const sphere = new THREE.Mesh(
            new THREE.SphereGeometry( 1, 32, 16 ),
            new THREE.MeshBasicMaterial({color: 0xffff00})
        )

        // const sphereSecond = new THREE.Mesh(
        //     new THREE.SphereGeometry( 1, 32, 16 ),
        //     new THREE.MeshBasicMaterial({color: 0xffff00})
        // )

        const box = new THREE.Mesh(
            new THREE.BoxGeometry(10,1,1),
            new THREE.MeshBasicMaterial({color: 0xff25ab})
        )

        box.position.z = 2
        box.rotation.y = -.15

        this.scene.add(sphere,box)

    }
}