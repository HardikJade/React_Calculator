import { useState } from 'react/cjs/react.development';
import keyContext from './KeyContext';
const KeyState = (props)=>{
    const [keyState, setKeyState] = useState('')
    return(
        <keyContext.Provider value={{keyState,setKeyState}}>
            {props.children}
        </keyContext.Provider>
    )
}
export default KeyState;