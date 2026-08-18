import './CommentItem.css'

const CommentItem = props => {
  const {commentDetails,deletedata} = props
  const {name, commentText,uniqueNo} = commentDetails

  const initial = name ? name[0].toUpperCase() : ''

  const delete1=()=>(
    deletedata(uniqueNo)
  )

  return (
    <div>
      <li className="list-item">
        <div className="intial-and-comment-container">
          <p className="initial">{initial}</p>
          <div className="name-and-comment-container">
            <p className="name-text">{name}</p>
            <p className="comment-text">{commentText}</p>
            <button onClick={delete1}>X</button>
          </div>
        </div>
      </li>
      <hr className="horizontal-line" />
    </div>
  )
}

export default CommentItem
