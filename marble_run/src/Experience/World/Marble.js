import * as THREE from 'three'
import { Mesh } from 'three';
import Experience from "../Experience.js";

export default class Marble {
    constructor() {
        this.experience = new Experience()
        this.scene = this.experience.scene

        // Marble Settings
        this.color = { color: 0xffff00 }
        this.radius = document.querySelector('#slider').value
        this.mass = 5
        this.velocity = 0.98
        this.startPositionX = 0
        this.startPositionY = 3
        
        this.marble = new THREE.Mesh()

        this.marbleArray = []
        this.createSphere()
        this.update()
    }

    createSphere() {
        let sphere = new THREE.Mesh(
            new THREE.SphereGeometry(this.radius, 32, 16),
            new THREE.MeshBasicMaterial(this.color)
        )

        sphere.position.x = this.startPositionX
        sphere.position.y = this.startPositionY
        
        this.scene.add(sphere)
        
    }

    update() {
        this.marbleArray.forEach((marble) => marble.update())
    }
}


