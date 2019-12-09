import React from 'react'
import ReactDOM from 'react-dom'
import Hello from './components/Hello.jsx'
import myClass from './components/class_study.js'

console.log("ok")

// var myH1 = React.createElement('h1', null, '这是一个大大的H1')

// var myDiv = React.createElement('div', { title: 'this is a div', id: 'mydiv' }, '这是一个div')

// var titleNmae = "这是一个标题"
// var jsxMyDiv = <div>
    

//     这是使用JSX语法创建的div元素

//     <h1 title = {titleNmae}>测试标题</h1>

//     {
//         //这是一个注释
//     }
//     {/** 这是注释 */}

// </div>

// ReactDOM.render(jsxMyDiv, document.getElementById('app'))

// ReactDOM.render(myDiv, document.getElementById('app'))


// function Hello(props){
//     return <div>
//         这是我通过Hello组件定义的元素 -- name :{props.name} age : {props.age} addree : {props.addree}
//     </div>
// }

var name = "zs"
var age = 20

var person = {
    name:'ls',
    age:27,
    addree: '北京',
    gender: '男'
}

ReactDOM.render(<div>
<Hello {...person}></Hello>
</div>,document.getElementById("jsx"))