import * as THREE from 'three'
import Experience from "../Experience.js"
import Sizes from "../Utils/Sizes.js"
import { OBB } from 'three/examples/jsm/math/OBB'

export default class Box {
    constructor(position, rotation) {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.marbleArray = this.experience.world.marbleArray

        this.sizes = new Sizes()

        this.position = position
        this.rotation = rotation
        this.color = { color: 0xff00ff }

        this.size = new THREE.Vector3(150, 2, 10)
        console.log(this.size)

        this.box = this.createBox()
        this.createBoundingBox()
    }

    createBox() {
        let box = new THREE.Mesh(
            new THREE.BoxGeometry(this.size.x, this.size.y, this.size.z),
            new THREE.MeshBasicMaterial(this.color)
        )

        box.position.set(this.position.x, this.position.y, this.position.z)
        box.rotation.z = this.rotation


        this.scene.add(box)

        return box
    }

    createBoundingBox() {
        this.box.geometry.userData.obb = new OBB()
        this.box.geometry.userData.obb.halfSize.copy(this.size).multiplyScalar(0.5)

        this.box.userData.obb = new OBB()

        //Update OBB (bounding box) position and rotation on next tick to give time for calculations
        window.requestAnimationFrame(() => {
            this.box.userData.obb.copy(this.box.geometry.userData.obb)
            this.box.userData.obb.applyMatrix4(this.box.matrixWorld)
        })
    }

    update() {
        //check all marbles if colliding with this box
        this.marbleArray.forEach(marble => {
            if (this.box.userData.obb.intersectsSphere(marble.boundingBox)) {
                //If intersects
                marble.isCollidingWith = this.box
            } else if (marble.isCollidingWith === this.box) {
                //Clear
                marble.isCollidingWith = null
            }
        })
    }
}