import React from 'react'


import '../../App.css'

const ErrorBoundry = ({errorText}) => {
    return (
        <div className='error '><span>{errorText}</span></div>
    )
}

export default ErrorBoundry
