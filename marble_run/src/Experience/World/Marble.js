import * as THREE from 'three'
import Experience from "../Experience";

export default class Marble 
{
    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene

        // let color = this.color
        // let radius = this.radius
        // let weight = this.weight
        // let velocity = this.velocity

        this.color = {color: 0xffff00}
        this.radius = 1
        this.mass = 5
        this.velocity = 2
        this.startPositionX = 1
        this.startPositionZ = 3

        this.sphere = new THREE.Mesh()

    }


    createSphere()
    {
        this.sphere = new THREE.Mesh(
            new THREE.SphereGeometry( this.radius, 32, 16 ),
            new THREE.MeshBasicMaterial(this.color)
        )

        this.sphere.position.x = this.startPositionX
        this.sphere.position.z = this.startPositionZ

        this.onClick()
    }

    onClick()
    {
        const button = document.querySelector('.create_marble')

        button.addEventListener('click', () => {
            this.scene.add(this.sphere)
            console.log(this.sphere)
        })
    }
}