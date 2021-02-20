import React from "react";
import CommentDetail from './CommentDetail';
import  data  from './data';
import ApprovalCard from './ApprovalCard'

export default function App() {
    return (
        
    <div className="ui container comments">
        <ApprovalCard />
        {data.map((comment) => {
           return (
           <CommentDetail name={comment.name} date={comment.date}message={comment.message}/>
           )
        })}
        
    </div>
    )
};