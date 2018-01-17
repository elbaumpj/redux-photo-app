import React from 'react'; 

class Comments extends React.Component {
    renderComment(comment, i) {
        console.log('testing this', this); 
        return (
            <div className="comment" key={i}>
                <p>
                    <strong>{comment.user}</strong>
                    {comment.text}
                    <button className="remove-comment" onClick={this.props.removeComment.bind(null, this.props.params.postId, i)}>&times;</button>
                </p>
            </div>
        )
    }
    handleSubmit(e) {
        e.preventDefault(); 
    
        const { postId } = this.props.params;   
        const author = this.refs.author.value;  
        const comment = this.refs.comment.value; 
         
        this.props.addComment(postId, author, comment); 
        // reset inputs
        this.refs.commentForm.reset(); 
    }
    render() {
        console.log(this); 
        return(
            <div className="comments">
                {this.props.postComments.map(this.renderComment.bind(this))} 
                <form ref="commentForm" className="comment-form" onSubmit={this.handleSubmit.bind(this)}>
                    <input type="text" ref="author" placeholder="author" />
                    <input type="text" ref="comment" placeholder="comment" />
                    <input type="submit" hidden />
                </form>
            </div>
        )
    }
}

export default Comments; 