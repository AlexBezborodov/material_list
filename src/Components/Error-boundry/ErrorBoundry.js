import React from 'react'


import '../../App.css'

const ErrorBoundry = ({errorText}) => {
    return (
        <div className='error '>{errorText}</div>
    )
}

export default ErrorBoundry
