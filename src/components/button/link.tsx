import React from 'react'
import Magnetic from '../../animations/magnetic'

import './link.css'

export default function Link(props) {
    return (
        <Magnetic>
            <a href={props.href} className={"link_btn " + props.type}>{props.text}</a>
        </Magnetic>
    )
}