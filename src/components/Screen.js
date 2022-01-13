import React,{useContext} from 'react'
import keyContext from '../context/KeyContext'
export const Screen = () => {
    const context = useContext(keyContext)
    return (<input type='text' readOnly value={context.keyState} className="screen"></input>)
}
