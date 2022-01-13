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
    const dict = {
        '+':'plus',
        '-':'minus',
        'x':'multiply',
        '/':'divide',
        '7':'seven',
        '8':'eight',
        '9':'nine',
        '6':'six',
        '5':'five',
        '4':'four',
        '3':'three',
        '2':'two',
        '1':'one',
        '0':'zero',
        'C':'C',
        '00':'dzero',
        '.':'dot',
        '=':'equal'
    }
    return (
        <div className="key_body" onClick={key_press} className={`${dict[props.data]}-class key`}>{props.data}</div>
    )
}
Key.prototype = {
    data :  PropTypes.string
}
Key.defaultProps = {
    data : "X"
}
