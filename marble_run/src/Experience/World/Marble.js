import * as THREE from 'three'
import Experience from "../Experience.js";

export default class Marble {
    constructor() {
        this.experience = new Experience()
        this.scene = this.experience.scene

        // Marble Settings
        this.color = { color: 0xffff00 }
        this.radius = 1
        this.mass = 5
        this.velocity = 0.98
        this.startPositionX = 0
        this.startPositionY = 3

        this.sphere = new THREE.Mesh()

        this.marbleArray = []
        this.onClick()
        this.update()
    }

    createSphere() {
        let sphere = new THREE.Mesh(
            new THREE.SphereGeometry(this.radius, 32, 16),
            new THREE.MeshBasicMaterial(this.color)
        )

        sphere.position.x = this.startPositionX
        sphere.position.y = this.startPositionY

        this.marbleArray.push(sphere)
        this.scene.add(sphere)
    }

    onClick() {
        const button = document.querySelector('.create_marble')

        button.addEventListener('click', () => {
            this.createSphere()
        })
    }

    update() {
        for (let item of this.marbleArray) {
            if (item.position.y > -10)
                item.position.y -= this.velocity
        }
    }
}


