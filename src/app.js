import a from './a'
import b from './b'
import c from './c'

a()
b()
c()
import './common/style/main.css'
import './common/style/app.css'

import pic from './assets/img/1.jpeg'
console.log('pic11',pic)//这里的pic经过webpack的file-loader处理之后其实是一个url
// 在img标签中可以直接用于src=“pic”

import pic2 from './assets/img/2.jpg'
import 'font-awesome/css/font-awesome.css'

// import React from 'react'
// import ReactDOM from 'react-dom'

// ReactDOM.render(
//     <div>React hello</div>,
//     document.getElementById('root')
// )