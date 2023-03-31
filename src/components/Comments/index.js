import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import './index.css'

import CommentItem from '../CommentItem'

const intialCommentList = [
  {
    id: uuidv4(),
    name: '',
    comment: '',
    isLiked: false,
  },
]

class Comments extends Component {
  state = {
    name: '',
    comment: '',
    count: 0,
    commentList: intialCommentList,
  }

  onchangeNameInput = event => {
    this.setState({name: event.target.value})
  }

  onchangeCommentInput = event => {
    this.setState({comment: event.target.value})
  }

  onAddComment = event => {
    event.preventDefault()

    const {name, comment} = this.state
    const newComment = {
      id: uuidv4(),
      name,
      comment,
      isLiked: false,
    }
    this.setState(prevState => ({
      commentList: [...prevState.commentList, newComment],
    }))
    this.setState(prevState => ({
      count: prevState.count + 1,
    }))
  }

  deltebtn = id => {
    const {commentList} = this.state
    const filteredList = commentList.filter(eachlist => eachlist.id !== id)
    this.setState({commentList: filteredList})
    this.setState(prevState => ({
      count: prevState.count - 1,
    }))
  }

  toggleLikeBtn = id => {
    this.setState(prevState => ({
      commentList: prevState.commentList.map(each => {
        if (each.id === id) {
          return {...each, isLiked: !each.isLiked}
        }
        return each
      }),
    }))
  }

  render() {
    const {name, comment, count, commentList} = this.state
    return (
      <div className="app-background">
        <h1 className="heading">Comments</h1>
        <div className="app-card">
          <div className="input-image-cont">
            <form className="form" onSubmit={this.onAddComment}>
              <p className="description">
                Say Something about 4.0 Technologies
              </p>
              <input
                type="text"
                value={name}
                className="input"
                placeholder="Your Name"
                onChange={this.onchangeNameInput}
              />
              <textarea
                className="textarea"
                cols="60"
                rows="10"
                placeholder="Your Comment"
                onChange={this.onchangeCommentInput}
              >
                {comment}
              </textarea>
              <button
                className="button"
                type="submit"
                onClick={this.onAddComment}
              >
                Add Comment
              </button>
            </form>
            <div className="image-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
                className="comments-img"
                alt="comments"
              />
            </div>
          </div>
          <hr />
          <p className="comments-count">{count}Comments</p>
          <ul className="list-container">
            {commentList.map(eachList => (
              <CommentItem
                key={eachList.id}
                commentDetails={eachList}
                deltebtn={this.deltebtn}
                toggleLikeBtn={this.toggleLikeBtn}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments
