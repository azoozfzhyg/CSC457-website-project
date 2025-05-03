import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PostDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`http://localhost/blog/get_post.php?id=${id}`)
      .then((res) => res.json())
      .then((data) => setPost(data))
      .catch((err) => console.error('Error fetching post:', err));
  }, [id]);

  if (!post) return <p>Loading post...</p>;

  return (
    <div className="container">
      <h1>{post.title}</h1>
      <div className="meta">
        <p><strong>Author:</strong> {post.author}</p>
        <p><strong>Category:</strong> {post.category}</p>
      </div>
      <hr />
      <div className="content">
        <p>{post.content}</p>
      </div>
    </div>
  );
};

export default PostDetails;
