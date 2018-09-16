import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions';


class ShowPost extends Component {
    componentDidMount(){
        const { id } = this.props.match.params;
        this.props.fetchPost();
    }

    render(){
        return(
            <div>
                Post
            </div>
        );
    };
}

function mapStateToProps({ posts }, ownProps) {
    return { post: posts[ownProps.match.params.id] }
}


export default connect(null, { fetchPost })(ShowPost);