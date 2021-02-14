import React from 'react'

export default function Alert({type,text}) {
    return (
        <div className={`alert alert-${type}`} style={{color: 'white'}}>
            {text}
        </div>
    )
}
