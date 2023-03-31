import React, { useState, useEffect } from 'react'
import PostsList from './PostsList'
import Loading from '../../components/common/loading'
import { getPosts } from '../../api/services'
import { mapPosts } from '../../utils/posts-utils'

const PostsContainer = () => {
  const [posts, setPosts] = useState([])
  const [isLoading, setisLoading] = useState(false)

  useEffect(() => {
    setisLoading(true)
    getPosts().then((res) => {
      setisLoading(false)
      setPosts(mapPosts(res))
    })
  }, [])

  return (
    <div className="posts-container">
      {isLoading ? <Loading /> : <PostsList postsList={posts} />}
    </div>
  )
}

export default PostsContainer
