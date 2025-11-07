import React from 'react'
import styled from 'styled-components'

const Loader = () => {
    return (
        <Div>
            <div className="loader"></div>
        </Div>
    )
}

const Div = styled.div`
height: 80vh;
display: flex;
align-items: center;
justify-content: center;
.loader{height: 100px;
width: 100px;
border-radius: 50%;
border: 5px solid #c9bebe;
border-top-color: #8490ff;
animation: rotate 1s infinite;
}

@keyframes rotate {
    100%{
        rotate: 360deg;
    }
}
`
export default Loader