import React from 'react';

function Post({ post }) {
    return (
        <div className="post-card">
            <div className="post-header">
                <img src={post.profilePic || "https://via.placeholder.com/32"} alt="profil" />
                <span className="post-username">{post.username}</span>
            </div>
            {post.imageUrl && <img src={post.imageUrl} alt="post" className="post-image" />}
            <div className="post-caption">{post.caption}</div>
            <div className="post-footer">
                <span>{post.likes} likes</span>
                <span>{post.comments} commentaires</span>
            </div>
        </div>

    );
}

export default Post;