import Experience from "../Experience.js";
import Marble from './Marble.js';
import Box from './Box'

export default class World {
    constructor() {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources

        this.marbleArray = []
        this.floorArray = []

        this.resources.on('ready', () => {
            this.floorArray.push(new Box({ x: 40, y: -120, z: 0 }, 0))
            this.floorArray.push(new Box({ x: -20, y: -80, z: 0 }, -.2))
            this.floorArray.push(new Box({ x: 30, y: -20, z: 0 }, .4))
            this.onClick()
        })
    }

    onClick() {
        const button = document.querySelector('.create_marble')

        button.addEventListener('click', () => {
            let marble = new Marble()
            this.marbleArray.push(marble)
        })
    }

    update() {
        this.marbleArray.forEach(marble => {
            marble.update()
        })

        this.floorArray.forEach(box => {
            box.update()
        })
    }

    // calculateDistance(x1, y1, x2, y2) {
    //     let xDistance = x2 - x1
    //     let yDistance = y2 - y1

    //     let distance = Math.sqrt(Math.pow(xDistance, 2) - Math.pow(yDistance, 2))

    //     return distance
    // }



}