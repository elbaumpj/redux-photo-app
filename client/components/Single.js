import React from 'react';
import Photo from './Photo'; 
//import comments

class Single extends React.Component {
    render() {
        //index of post
        const i = this.props.posts.findIndex((post) => post.code === this.props.params.postId); 
        // post itself
        const post = this.props.posts[i];  
        <Photo i={i} />
        return (
            <div className="single-photo">
            I'm the single 
            </div>
        );
    }
}


export default Single; 