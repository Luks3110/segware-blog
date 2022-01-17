import React from 'react'
import Post from './Post/Post'

const Feed = ({ posts }) => {
    return (
        <div className="posts">
        {posts.map((p) => (
          <Post post={p} key={p.id} />
          ))}
      </div>
    )
}

export default Feed
