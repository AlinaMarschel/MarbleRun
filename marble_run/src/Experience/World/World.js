import Experience from "../Experience.js";
import Marble from './Marble.js';

export default class World {
    constructor() {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources

        this.resources.on('ready', () => {
            this.marble = new Marble()
            this.marble.createSphere()
            this.marble.marbleArray
        })

        this.marble = new Marble()
        this.marbleArray = []
        this.onClick()
    }


    onClick() {
        const button = document.querySelector('.create_marble')

        button.addEventListener('click', () => {
            let marble = new Marble()
            this.marbleArray.push(marble)
            console.log(this.marbleArray)
        })

        // button.addEventListener('click', () => {
        //     let marble = new Marble()
        //     this.marbleArray.push(marble)
        //     console.log('Hi')
        //     console.log(this.marbleArray)
        // })
    }

    update() {
        if(this.marble)
            this.marble.update()
            this.marbleArray.forEach((marble) => marble.update())
    }


}