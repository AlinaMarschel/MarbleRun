import * as THREE from 'three'
import Experience from "../Experience.js";


export default class World 
{

    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.sizes = this.experience.sizes
        this.resources = this.experience.resources

        // Wait for Resources
        this.resources.on('ready', () =>
        {
            console.log('resources are ready')
        })

        this.update()
    }

    update()
    {
        // if(this.coffeebeans) 
        // {
        //     this.coffeebeans.update()
        // }
    }

}