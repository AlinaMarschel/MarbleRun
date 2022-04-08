import Experience from "../Experience.js";
import Marble from './Marble.js';

export default class World {
    constructor() {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources

        this.marbleArray = []

        // Brauchst du dann erstmal nicht
        // this.resources.on('ready', () => {
        // })

        this.onClick()
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
    }

    calculateDistance(x1, y1, x2, y2 )
    {
        let xDistance = x2 - x1
        let yDistance = y2 - y1

        let distance = Math.sqrt(Math.pow(xDistance, 2) - Math.pow(yDistance, 2))

        return distance
    }
}