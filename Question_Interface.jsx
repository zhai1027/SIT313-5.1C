import React from 'react';
import './interface.css';

function Q(){
    return(
        <div className='position_change'>
            <div>
                <p> Title &nbsp;
                <input style={{width:1760}} placeholder="Start your question with how, what, why, etc."           
                required="required"></input> 
                </p>
            </div>

            <div>
                <p>Describe your problem</p>
                <textarea className='position_change_new' placeholder="" required="required"></textarea> 
            </div>

            <div>
                <p> Tags &nbsp;
                <input style={{width:1760}} placeholder="Please add up 3 tags to describe what your question is about" required="required"></input> 
                </p>
            </div>

            <div>
                <button class="button_Post" type="button">Post</button>
            </div>
        </div>
    )
}

export default Q;