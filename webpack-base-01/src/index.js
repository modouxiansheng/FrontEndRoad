import React from 'react'
import ReactDOM from 'react-dom'


console.log("ok")

// var myH1 = React.createElement('h1', null, '这是一个大大的H1')

var myDiv = React.createElement('div', { title: 'this is a div', id: 'mydiv' }, '这是一个div')

var titleNmae = "这是一个标题"
var jsxMyDiv = <div>
    

    这是使用JSX语法创建的div元素

    <h1 title = {titleNmae}>测试标题</h1>

    {
        //这是一个注释
    }
    {/** 这是注释 */}

</div>

ReactDOM.render(jsxMyDiv, document.getElementById('app'))

// ReactDOM.render(myDiv, document.getElementById('app'))


