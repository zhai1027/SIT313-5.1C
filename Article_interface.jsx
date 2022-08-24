import React from 'react';
import './interface.css';

function A(){
    return(
        <div className='position_change'>
            <div>
                <p> Title &nbsp;
                <input style={{width:1760}} placeholder="Enter a descriptive title" required="required"></input> 
                </p>
            </div>

            <div>
                <p>Abstract</p>   
                <textarea className='position_change_new' placeholder="Enter a 1-paragraph abstract" required="required"></textarea> 
            </div>

            <div>
                <p>Article Text</p>   
                <textarea className='position_change_new2' placeholder="Enter a 1-paragraph abstract" required="required"></textarea> 
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

export default A;