import React from 'react'
import styled from 'styled-components'

const PlayButton = ({
    content,
    color = "success",
    action
}) => {
    return (
        <PlayBtn 
            className={color}
            onClick={action}
        >
            {content}
        </PlayBtn>
    )
}

export default PlayButton

const PlayBtn = styled.button`
    width: 90%;
    max-width: 100px;
    aspect-ratio: 1/1;
    border-radius: 50%;
    border: 0;
    background-color: rgb(255, 56, 86);
    letter-spacing: 1.5px;
    font-size: 15px;
    transition: all .3s ease;
    box-shadow: rgb(201, 46, 70) 0px 7px 0px 0px;
    color: hsl(0, 0%, 100%);
    cursor: pointer;
    outline: none;
    
    
    &.success {
        background-color: #2ECC71;
        box-shadow: #239B56 0px 7px 0px 0px;
    }
    &.error {
        background-color: #FF3856;
        box-shadow: #C92E46 0px 7px 0px 0px;
    }
    &.info {
        background-color: #3498DB;
        box-shadow: #2E86C1 0px 7px 0px 0px;
    }
    &:active {
        &.success {
            background-color: #2ECC71;
            box-shadow: #239B56 0px 0px 0px 0px;
        }
        &.error {
            background-color: #FF3856;
            box-shadow: #C92E46 0px 0px 0px 0px;
        }
        &.info {
            background-color: #3498DB;
            box-shadow: #2E86C1 0px 0px 0px 0px;
        }
        transform: translateY(5px);
        transition: 200ms;
    }
`