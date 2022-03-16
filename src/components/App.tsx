import React, { useState  } from "react";


let bool = false
function add(){
    while(bool){
        console.log('aaa')
        return 
    }
}
requestAnimationFrame(add) //执行一帧动画
bool = true
console.log('bb')

function useNameInput(){
    const [value, setValue] = useState('')
    return {
        value,
        onChange(e){
            setValue(e.target.value)
        }
    }
}

interface ItemPropsValue {
    title: string;
}
const Item = (props: ItemPropsValue) => {
    return <span className="text-gray-100 iconfont icon-browse">{props.title}</span>
}
function App() {
    const arr: any[] = [1, 2, 3, 4, 5]
    const name = useNameInput()
    console.log(name.value)
    return <div className="app">
        <span>aaaa</span>
        <input type="text"  {...name}/>
    </div>
}

export default App