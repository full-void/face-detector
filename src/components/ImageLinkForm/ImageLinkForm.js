import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
    return (
        <div>
            <p className='f3 white'>
                {'This Magic Brain will detect faces in your pictures. Git it a try.'}
            </p>
            <div className='center mt4'>
                <div className='form center pa4'>
                    <input className='f4 hover-bg-dark-blue hover-white w-70 center' type='text'
                           onChange={onInputChange}/>
                    <button
                        className='shadow-hover w-30 ml2 f4 link ph3 pv2 dib white material-amber-800'
                        onClick={onButtonSubmit}
                    >Detect
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ImageLinkForm;