import React from "react";
import CommentDetail from './CommentDetail'

export default function App() {
    return (
    <div className="ui container comments">
        <CommentDetail name="Sam" date="Today at 6:00PM" message="Nice blog post!"/>
    </div>
    )
};