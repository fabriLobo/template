import React from 'react'

const PostsList = ({ postsList }) => (
  <ul className="posts-list">
    {postsList.map((post) => (
      <li key={post.id}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </li>
    ))}
  </ul>
)

export default PostsList
