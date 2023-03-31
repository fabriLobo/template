import { Post } from '../../models/Post'
import { singlePostModel } from '../mocks/postsList'

describe('Post', () => {
  test('constructor sets properties correctly', () => {
    const post = new Post(singlePostModel)

    expect(post.id).toBe(singlePostModel.id)
    expect(post.title).toBe(singlePostModel.title)
    expect(post.body).toBe(singlePostModel.body)
  })

  test('id getter returns the correct value', () => {
    const post = new Post(singlePostModel)

    expect(post.id).toBe(singlePostModel.id)
  })

  test('id setter sets the correct value', () => {
    const post = new Post(singlePostModel)

    post.id = 2

    expect(post.id).toBe(2)
  })

  test('title getter returns the correct value', () => {
    const post = new Post(singlePostModel)

    expect(post.title).toBe(singlePostModel.title)
  })

  test('title setter sets the correct value', () => {
    const post = new Post(singlePostModel)

    post.title = 'New Title'

    expect(post.title).toBe('New Title')
  })

  test('body getter returns the correct value', () => {
    const post = new Post(singlePostModel)

    expect(post.body).toBe(singlePostModel.body)
  })

  test('body setter sets the correct value', () => {
    const post = new Post(singlePostModel)

    post.body = 'New Body'

    expect(post.body).toBe('New Body')
  })
})
