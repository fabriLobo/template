export class Post {
  constructor(data) {
    this._id = data.id
    this._title = data.title
    this._body = data.body
  }

  get id() {
    return this._id
  }

  set id(value) {
    this._id = value
  }

  get title() {
    return this._title
  }

  set title(value) {
    this._title = value
  }

  get body() {
    return this._body
  }

  set body(value) {
    this._body = value
  }
}
