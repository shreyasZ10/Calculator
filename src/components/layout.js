import React, {useState} from 'react';
import './layout.css'
import logo from '../assets/img/logo.png'
import Output from './output'
import userEvent from '@testing-library/user-event';

const Layout = (porps) => {
    let [input, setInput] = useState('0')
    let [result, setResult] = useState('')
    const handleClick = (event) => {
        const value = event.target.value;
        if (value === '='){
            if (input !== ''){
                let res = ''
                try{
                    res = eval(input)
                } catch(err) {
                    setResult('Math Error')
                }
                if (res === undefined){
                    setResult('Math error')
                }
                else{
                    setResult(input+ '=')
                    setInput(res)
                }
            }
        } 
        else if (value === 'C'){
            setInput('0')
            setResult('')
        }
        else if (value === 'DEL'){
            let str = input
            str = str.substr(0, str.length-1)
            setInput(str)
        }
        else if ( input === '0') {
            setInput(value)
        }
        else{
            setInput(input += value)
        }
    }
    return(
        <div className='frame'>
            <div className='calculator'>
                <br></br>
                <Output user={input} answer={result}></Output>
                <img src={logo} alt='logo' width='100px' height= '75px' style={{display:'block', marginLeft:'auto', marginRight:'auto'}} />
                <br></br>
                <div className='keys'>
                <div class="btn-group btn-block" id="colours">
                <span class="btn"><input class='btn btn-warning' type='button'  value={'C'}  className='button clear' onClick={handleClick}></input></span>
                <span class="btn"><input class='btn btn-danger' type='button' value={'DEL'}  className='button clear' onClick={handleClick}></input></span>
                <span class="btn"><input class='btn btn-info' type='button' value={'%'}  className='button clear' onClick={handleClick}></input></span>
                <span class="btn"><input class='btn btn-info' type='button' value={'/'}  className='button clear' onClick={handleClick}></input></span>
                </div>    
                    <br></br>
                <div class="btn-group btn-block" id="colours">
                <span class="btn"><input class='btn btn-light' type='button' value={'7'} className='button clear' onClick={handleClick}></input></span>
                <span class="btn"><input class='btn btn-light' type='button' value={'8'} className='button clear' onClick={handleClick}></input></span>
                <span class="btn"><input  class='btn btn-light' type='button' value={'9'} className='button clear' onClick={handleClick}></input></span>
                <span class="btn"><input class='btn btn-info' type='button' value={'*'} className='button clear' onClick={handleClick}></input></span>
                 </div>   
                    <br></br>
                    <div class="btn-group btn-block" id="colours">
                <span class="btn"><input class='btn btn-light'  type='button' value={'4'} className='button clear' onClick={handleClick}></input></span>
                <span class="btn"><input class='btn btn-light' type='button' value={'5'} className='button clear' onClick={handleClick}></input></span>
                <span class="btn"><input class='btn btn-light' type='button' value={'6'} className='button clear' onClick={handleClick}></input></span>
                <span class="btn"><input class='btn btn-info' type='button' value={'-'} className='button clear' onClick={handleClick}></input></span>
                    </div>
                    <br></br>
                    <div class="btn-group btn-block" id="colours">
                    <span class="btn"><input type='button' class='btn btn-light' value={'1'} className='button clear' onClick={handleClick}></input></span>
                    <span class="btn"><input type='button' class='btn btn-light' value={'2'} className='button clear' onClick={handleClick}></input></span>
                    <span class="btn"><input type='button'  class='btn btn-light' value={'3'} className='button clear' onClick={handleClick}></input></span>
                    <span class="btn"><input class='btn btn-info' type='button' value={'+'} className='button clear' onClick={handleClick}></input></span>
                    </div>
                    <br></br>
                    <div class="btn-group btn-block" id="colours">
                    <span class="btn"><input type='button' class='btn btn-light' value={'0'} className='button clear' onClick={handleClick}></input></span>
                    <span class="btn"><input type='button' class='btn btn-light' value={'.'} className='button clear' onClick={handleClick}></input></span>
                    <span class="btn"><input type='button' class='btn btn-info' value={'='} className='button clear' onClick={handleClick}></input></span>
                    </div>
                    
                    
                </div>
            </div>
        </div>
    )
};

export default Layout;