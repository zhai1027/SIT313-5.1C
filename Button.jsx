import React, {useState} from 'react';
import './interface.css';
import Q from './Question_Interface';
import A from './Article_interface';
import SB from './Second_bar';
/*
There are some thing that I need to mention:
  {setbutton? <Q/>: <A/>} conditional operator is not suitable under Button(), becasue it will ways return false even user didn't click the option
  Base on that, conditional operator is not a good solution for this task.
  But, if you really want to solve this problem, the suggestion is to make Q and A as null first, after clicking the button, Q and A will contain a value.
  However, line 14 and 15 is constant, you can not assign null for Q and A at the first, change const to var is not a solution.
*/
function Button(){
    const [button_Q, setbutton_Q] = useState();
    const [button_A, setbutton_A] = useState();
    return(
        <div>
            <div className='position_change'>
                <p>Select Post Type:                             
                    <input style={{marginLeft:50}}
                        name={"button"}
                        type={"radio"}
                        value={"Q"}
                        onClick={() => setbutton_Q(true) + setbutton_A(false)}/>
                              
                        <label>Questions</label>

                    <input style={{marginLeft:50}}
                        name={"button"}
                        type={"radio"}
                        value={"A"}
                        onClick={() => setbutton_A(true) + setbutton_Q(false)}/>    
                        <label>Article</label>          
                </p>              
            </div>

            <div>
                <SB/>
            </div>

            <div>
                {button_Q === true && <Q/>}
                {button_A === true && <A/>}      
            </div>            
        </div>
    )
}
export default Button;