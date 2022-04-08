import * as THREE from 'three'
import Experience from "../Experience.js"
import Sizes from "../Utils/Sizes.js"

export default class Box{

    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene

        this.sizes = new Sizes()

        this.positionX = 0
        this.positionY = -40
        this.width = this.sizes.width
        this.height = 2
        this.color = { color: 0xff00ff }

        this.createBox()
        console.log("Sizes height: " + this.sizes.height)
    }

    createBox()
    {
        let box = new THREE.Mesh(
            new THREE.BoxGeometry(this.width, this.height, 2),
            new THREE.MeshBasicMaterial(this.color)
        )

        box.position.x = this.positionX
        box.position.y = this.positionY

        this.scene.add(box)

        return box
    }


}