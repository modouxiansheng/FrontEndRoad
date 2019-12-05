import React from 'react'
import ReactDOM from 'react-dom'


console.log("ok")

var myH1 = React.createElement('h1', null, '这是一个大大的H1')

var myDiv = React.createElement('div', { title: 'this is a div', id: 'mydiv' }, '这是一个div', myH1)

ReactDOM.render(myDiv, document.getElementById('app'))
