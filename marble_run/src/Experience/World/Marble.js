import * as THREE from 'three'
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
        this.startPositionX = document.querySelector('#positionX').value
        this.startPositionY = document.querySelector('#positionY').value
        
        this.marble = this.createSphere()

        this.marbleArray = []
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

        return sphere
    }

    update() {
        this.marble.position.y -= this.velocity
    }
}


