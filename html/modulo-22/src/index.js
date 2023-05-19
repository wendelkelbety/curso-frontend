import './style.scss'
import img from './expresso.jpg'

function titleComponent(){
    const elemeth1 = document.createElement('h1')
    elemeth1.innerHTML = 'Hello Wolrd 2'
    elemeth1.classList.add('title')

    return elemeth1
}

function imageComponent(){
    const elementimg = new Image()
    elementimg.src = img

    return elementimg
}

document.body.appendChild(titleComponent())
document.body.appendChild(imageComponent())