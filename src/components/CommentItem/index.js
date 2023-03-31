import {formatDistanceToNow} from 'date-fns'

const CommentItem = props => {
  const {commentDetails, deltebtn, toggleLikeBtn} = props
  const {name, comment, isLiked, id} = commentDetails

  const imageUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const deleteicon = () => {
    deltebtn(id)
  }

  const onlikebtn = () => {
    toggleLikeBtn(id)
  }

  return (
    <li className="list-item">
      <div className="text-container">
        <div className="symbol-container">{name}</div>

        <div className="name-comment-cont">
          <p className="name">{name}</p>
          <p className="comment">{comment}</p>
          <p>{formatDistanceToNow(new Date())}</p>
        </div>

        <div className="time-cont">{name}</div>
      </div>

      <div className="like-delete-cont">
        <button className="likebtn" type="button" onClick={onlikebtn}>
          <img src={imageUrl} alt="" className="likeimage" />
          Like
        </button>

        <button
          className="delete-button"
          type="button"
          data-testid="delete"
          onClick={deleteicon}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
            className="delete-img"
          />
        </button>
      </div>
    </li>
  )
}
export default CommentItem
