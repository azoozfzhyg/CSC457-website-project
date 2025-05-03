import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost/blog/get_posts.php')
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error('Error fetching posts:', err));
  }, []);

  return (
    <div className="container">
      <h1>My Blog</h1>

      <div className="top-bar">
        <button onClick={() => navigate('/add')} className="add-button">+ Create New Post</button>
      </div>

      <section className="posts">
        {posts.length === 0 ? (
          <p>No blog posts available.</p>
        ) : (
          posts.map((post) => (
            <div key={post.id} className="post-card">
              <h3>
                <Link to={`/post/${post.id}`} className="post-title">
                  {post.title}
                </Link>
              </h3>
              <p><strong>Author:</strong> {post.author}</p>
              <p>{post.content.slice(0, 100)}...</p>
              <Link to={`/post/${post.id}`} className="read-more">Read More</Link>
            </div>
          ))
        )}
      </section>
    </div>
  );
};

export default Home;
