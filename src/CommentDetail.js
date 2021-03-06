import React from 'react'
import faker from 'faker';


export default function CommentDetail(props) {
    return (
        <div className="comment">
            <a href="/" className="avatar" >
                <img alt="avatar" src={faker.image.image()}/>
            </a>
        <div className="content">
            <a href="/" className="author">
                {props.name}
            </a>
            <div className="metadata">
                <span className="date">{props.date}</span>
            </div>
            <div className="text">{props.message}</div>
        </div>
        </div>
    )
}