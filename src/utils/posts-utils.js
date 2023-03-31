import { Post } from '../models/Post'

export const mapPosts = (data) => data.map((i) => new Post(i))
