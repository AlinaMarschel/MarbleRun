import './style.css'
import Experience from './Experience/Experience.js'

const experience = new Experience(document.querySelector('canvas.webgl'))

        var slider = document.getElementById("slider");
        var selector = document.getElementById("selector");
        var SelectValue = document.getElementById("SelectValue");

        SelectValue.innerHTML = slider.value;


        slider.oninput = function(){
            selector.style.left = "Größe:" + this.value + "%";
        SelectValue.innerHTML = this.value;

        }
    