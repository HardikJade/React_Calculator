import React ,{useContext} from 'react'
import PropTypes from 'prop-types';
import keyContext from '../context/KeyContext';
export const Key = (props) => {
    const {keyState,setKeyState} = useContext(keyContext)
    const key_press = (event)=>{
        if(event.target.innerText === 'C'){setKeyState('')}
        else if(event.target.innerText === '='){
            const regex = /(?:(?:^|[-+_*/])(?:\s*-?\d+(\.\d+)?(?:[eE][+-]?\d+)?\s*))+$/;
            let item = keyState;
            item = item.replace('x','*')
            if(regex.test(item))
                item = eval(item);
                item = parseFloat(item);
                item = item.toFixed(5);
                item = item.toString();
                setKeyState(item);
        }
        else{setKeyState(keyState  + event.target.innerText)}
    }
    return (<div className="key_body" onClick={key_press} className={`${(props.data === '+' || props.data==='=')? (props.data === '=' ? "equal" : 'plus') : props.data}-class key`}>{props.data}</div>)
}
Key.prototype = {
    data :  PropTypes.string
}
Key.defaultProps = {
    data : "X"
}
