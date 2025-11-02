import React from 'react';
import { Link } from 'react-router-dom';
import RightNavbar from '../Composant/RightNavbar';
import Post from '../Composant/Post';
import App from '../../App.css';


const fakePosts = [
  {
    id: 1,
    username: "alice",
    profilePic: "",
    imageUrl: "",
    likes: 120,
    caption: "Premier post !",
    comments: 5
  },
  {
    id: 2,
    username: "bob",
    profilePic: "",
    imageUrl: "",
    likes: 87,
    caption: "Coucher de soleil 🌅",
    comments: 12
  },
  {
    id: 3,
    username: "charlie",
    profilePic: "",
    imageUrl: "",
    likes: 200,
    caption: "Entraînement du jour 💪",
    comments: 8
  }
];

function Home() {
  return (
    <>
    <div className="home-page">
    <header className='title'><h1>Athletia</h1></header>
      <p>Partage tes exploits et montre le au monde.</p>
      <RightNavbar />
      {fakePosts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </div>
    </>
  );
}

export default Home;
