import './style.scss'
import img from './expresso.jpg'

function rootStyle(){
    const elemetroot = document.getElementById('root')
    elemetroot.classList.add('container')
}

function titleComponent(){
    const elemeth1 = document.createElement('h1')
    elemeth1.innerHTML = 'Um café delicioso para um Programador.'
    elemeth1.classList.add('title')

    return elemeth1
}

function imageComponent(){
    const elementimg = new Image()
    elementimg.src = img

    return elementimg
}

rootStyle()
document.getElementById('root').appendChild(titleComponent())
document.getElementById('root').appendChild(imageComponent())