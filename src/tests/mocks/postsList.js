import { Post } from '../../models/Post'

export const postsList = [
  { id: 1, title: 'Post 1', body: 'Lorem ipsum dolor sit amet' },
  { id: 2, title: 'Post 2', body: 'Lorem ipsum dolor sit amet' },
  { id: 3, title: 'Post 3', body: 'Lorem ipsum dolor sit amet' },
]

export const singlePost = {
  id: 1,
  title: 'Post 1',
  body: 'Lorem ipsum dolor sit amet',
}

export const singlePostModel = new Post(singlePost)
