import * as THREE from 'three'
import Experience from "../Experience";

export default class Marble 
{
    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene

        let color = this.color
        let size = this.size
        let weight = this.weight
        let velocity = this.velocity

    }

    createSphere(color, size, weight, velocity)
    {
        
    }

    addSphere()
    {
        this.scene.add()
    }
}