import React from 'react';
import './HideableText.css'

export default class HideableText extends React.Component {
    constructor (props) {
        super(props);
    }

    render (){
        return (
            <hideable className="hideable">
            <div>
                    <a className="funkybuttonHideable">
                <button>Toggle</button>
                MAKE MY DRINKS!</a>
            </div>
            </hideable>
        );
    }

}