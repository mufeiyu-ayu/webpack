import './css/1.css'
import './css/1.scss'
import axios from 'axios'
/* axios.get('/api/getStudent').then(
    (res) => {
        console.log(res.data)
    },
    (err) => {
        console.log(err)
    }
) */
import img1 from './images/1.png'
let dr = document.createElement('div')
dr.className = 'container'
let imgIcon = new Image()
imgIcon.src = img1
dr.appendChild(imgIcon)
document.body.appendChild(dr)
