import React from 'react'
import {Key} from './Key'
export const Input = () => {
    let top_key = ['C','/','x'];
    const num_key = ['7','8','9','4','5','6','1','2','3','0','00','.'];
    const side_key = ['-','+','='];
    return (
        <>
            <div className="input_body">
                <div className="top_body">
                    {top_key.map((elem)=>{return <Key key={elem} data={elem} />})}
                </div>
                <div className="bottom_body">
                    <div className="num_body">
                        {num_key.map((elem)=>{return <Key key={elem} data={elem} />})}
                    </div>
                    <div className="side_body">
                        {side_key.map((elem)=>{return <Key key={elem} data={elem} />})}
                    </div>
                </div>
            </div>
        </>
    )
}
