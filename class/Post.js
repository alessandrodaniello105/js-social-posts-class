class Post {
  constructor(_id, _authorName, _authorImage, _content, _media, _likes, _created){
    this.id = _id;
    this.author = {
      _authorName,
      _authorImage}
    this.content = _content;
    this.media = _media;
    this.likes = _likes;
    this.created = _created;
  }
}

export default Post