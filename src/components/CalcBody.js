import React,{useEffect,useContext} from 'react'
import keyContext from '../context/KeyContext'
import '../css/Calculator.css'
import { Input } from './Input'
import { Screen } from './Screen'
export const CalcBody = () => {
    const {setKeyState} = useContext(keyContext)
    useEffect(() => {
        window.addEventListener('keydown',(e)=>{
            if(e.key === '7'){
                document.querySelector('.seven-class').click()
                return;
            }    
            else if(e.key === '8'){
                document.querySelector('.eight-class').click()
                return;
            }    
            else if(e.key === '9'){
                document.querySelector('.nine-class').click()
                return;
            }    
            else if(e.key === '0'){
                document.querySelector('.zero-class').click()
                return;
            }    
            else if(e.key === '4'){
                document.querySelector('.four-class').click()
                return;
            }    
            else if(e.key === '5'){
                document.querySelector('.five-class').click()
                return;
            }    
            else if(e.key === '6'){
                document.querySelector('.six-class').click()
                return;
            }    
            else if(e.key === '1'){
                document.querySelector('.one-class').click()
                return;
            }    
            else if(e.key === '2'){
                document.querySelector('.two-class').click()
                return;
            }    
            else if(e.key === '3'){
                document.querySelector('.three-class').click()
                return;
            }    
            else if(e.key === '.'){
                document.querySelector('.dot-class').click()
                return;
            }    
            else if(e.key === 'Backspace'){
                let val = document.querySelector(".screen").value
                if(val){
                    val = val.substring(0, val.length - 1);
                    setKeyState(val);
                }
                return;
            } 
            else if(e.key === '/'){
                document.querySelector('.divide-class').click()
                return;
            }    
            else if(e.key === '*'){
                document.querySelector('.multiply-class').click()
                return;
            }    
            else if(e.key === '-'){
                document.querySelector('.minus-class').click()
                return;
            }    
            else if(e.key === '+'){
                document.querySelector('.plus-class').click()
                return;
            }    
            else if(e.key === 'Enter'){
                document.querySelector('.equal-class').click()
                return;
            }      
            else if(e.key === 'Escape'){
                setKeyState("")
                return;
            }      
        })
    }, [])
    return (
    <>
        <div className="container">
            <Screen/>
            <Input/>
        </div>
    </>)
}
