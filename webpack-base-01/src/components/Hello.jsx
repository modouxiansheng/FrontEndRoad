import React from 'react'

function Hello(props){
    return <div>
        这是我通过Hello组件定义的元素 -- name :{props.name} age : {props.age} addree : {props.addree}
    </div>
}

// 把创建的组件暴露出去
export default Hello