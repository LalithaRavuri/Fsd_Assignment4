import React from 'react'
import ReactDOM from 'react-dom'
import CommentBox from './commentbox'
import Button from './button'

const Student =()=>{
    return (
        <div>
            <Button>
            <CommentBox/>
            </Button>
        </div>

    )
};

ReactDOM.render(
   <>
    <Student/>
   </>,
    document.getElementById('root')
)