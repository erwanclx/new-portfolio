import React from 'react'

import './link.css'

export default function Link(props) {
    return (
        <a href={props.href} className={"link_btn " + props.type}>{props.text}</a>
    )
}