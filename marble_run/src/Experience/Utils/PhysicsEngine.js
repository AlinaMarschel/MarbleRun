import { Vector3 } from "three";
import EventEmitter from "./EventEmitter.js";

export default class PhysicsEngine extends EventEmitter
{
    constructor() 
    {
        super()

        //Setup 
        this.gravity = new Vector3(0, -9.82, 0)
        

    }
}