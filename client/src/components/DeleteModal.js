import React from 'react';
import ReactDOM from 'react-dom';
import history from '../history';
import './Modal.css';

const Modal = props => {
    return ReactDOM.createPortal(
        <div onClick={() => history.push('/')} className="modal">
            <div onClick={(e) => e.stopPropagation()} className="modal__window">
                <div className="modal__content">
                    {props.content}
                </div>
                <div className="actions">
                    {props.actions}
                </div>
            </div>
        </div>,
        document.querySelector('#modal')
    );
};  

export default Modal;