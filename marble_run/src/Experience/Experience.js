import Sizes from '.Utils/Sizes.js'

export default class Experience
{
    constructor(canvas)
    {
        // Options
        this.canvas = canvas

        //Setup
        this.sizes = new Sizes()
        this.time = new Time()
        this.scene = new THREE.Scene()
        this.resources = new Resources(sources)
        this.camera = new Camera()
        this.renderer = new Renderer()
        this.world = new World()


        // Sizes resize Event
        this.sizes.on('resize', () =>
        {
            this.resize()
        })

        // Time tick Event
        this.time.on('tick', () =>
        {
            	this.update()
        })


        resize()
        {
        this.camera.resize()
        this.renderer.resize()
        }

        update()
        {
            this.world.update()
            this.camera.update()
            this.renderer.update()
        }

    }
}