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
        })
    }

    update() {
        if (this.marble)
            this.marble.update()
    }
}