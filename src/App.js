import React from "react";
import CommentDetail from './CommentDetail';
import  data  from './data'

export default function App() {
    console.log(data);
    return (
        
    <div className="ui container comments">
        {data.map((comment) => {
           return (
           <CommentDetail name={comment.name} date={comment.date}message={comment.message}/>
           )
        })}
        
    </div>
    )
};