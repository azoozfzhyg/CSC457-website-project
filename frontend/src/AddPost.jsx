import React, { useState } from "react";

const AddPost = () => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    content: "",
    category: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("title", formData.title);
    data.append("author", formData.author);
    data.append("content", formData.content);
    data.append("category", formData.category);

    try {
      const response = await fetch("http://localhost/blog/add_post.php", {
        method: "POST",
        body: data,
      });

      const result = await response.json();
      alert(result.message || "Blog post submitted!");
    } catch (error) {
      console.error("Submission error:", error);
      alert("An error occurred while submitting the blog post.");
    }
  };

  return (
    <div className="container">
      <h2>Create a New Blog Post</h2>
      <form onSubmit={handleSubmit} className="form">
        <label>Title:
          <input type="text" name="title" value={formData.title} onChange={handleChange} required />
        </label>

        <label>Author:
          <input type="text" name="author" value={formData.author} onChange={handleChange} required />
        </label>

        <label>Content:
          <textarea name="content" rows="6" value={formData.content} onChange={handleChange} required />
        </label>

        <label>Category:
          <input type="text" name="category" value={formData.category} onChange={handleChange} />
        </label>

        <button type="submit">Submit Post</button>
      </form>
    </div>
  );
};

export default AddPost;
