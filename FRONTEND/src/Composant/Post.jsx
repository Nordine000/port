import React from 'react';

function Post({ post }) {
    return (
        <div className='post'>
            <strong>{post.username}</strong>
            <p>{post.caption}</p>
            <img
                src={post.imageUrl || "https://via.placeholder.com/500x500?text=Image+Post"}
                alt="Publication"
                className='image'
            />
            <button
                onClick={() => console.log(`Le post de ${post.username} a été aimé !`)}
                className='button-jaime'
            >
                ❤️
            </button>
            <p className='like-par'>Aimé par {post.likes} personnes.</p>
        </div>
    );
}

export default Post;