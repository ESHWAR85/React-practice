import CommentItem from './components/CommentItem'
import {useState} from 'react'
import './App.css'

const initialcommentsList = [
  {
    uniqueNo: 1,
    name: 'Rahul',
    commentText: 'The ending is so good!',
  },
  {
    uniqueNo: 2,
    name: 'Floyd Miles',
    commentText: 'The attention to detail in the animation is amazing!',
  },
  {
    uniqueNo: 3,
    name: 'Jacob',
    commentText: 'The storytelling is fantastic, simple yet impactful!',
  },
  {
    uniqueNo: 4,
    name: 'Devon Lane',
    commentText: 'The soundtrack perfectly complements the animation!',
  },
]

const App = () => {
  const [data, setdata] = useState('') 
 const [commentsList, setcommentsList] = useState(initialcommentsList)
  const search = e => {
    setdata(e.target.value)
    
  }
  const filterdata=
  
    commentsList.filter((i)=>(i.name.includes(data)))

    const  deletedata=(uniqueNo)=>{
      const deletefilter=commentsList.filter((i)=>(i.uniqueNo !==uniqueNo))
      setcommentsList(deletefilter)
    }
  return (
    <div className="main-container">
      <div className="header-container">
        <div className="header-elements-container">
          <img
            src="https://assets.ccbp.in/frontend/hooks/nxt-player-logo-img.png"
            alt="nxt player logo"
            className="logo"
          />
        </div>
      </div>
      <div className="video-player-container">
        <video
          src="https://s3.ap-south-1.amazonaws.com/new-assets.ccbp.in/frontend/static-website/big_buck_bunny_crujfx.mp4"
          controls
          width="100%"
          className="video-player"
        />
        <h1 className="video-title">Big Buck Bunny</h1>
        <p className="video-stats">8,100,195 views - May 29, 2008</p>
        <hr className="horizontal-line" />
      </div>
      <input type="search" onChange={search} />
      <div className="comments-container">
        <div className="comments-header">
          <p className="comments-title">Comments</p>
        </div>
        <ul className="comments-list">
          {filterdata.map(eachComment => (
            <CommentItem
              key={eachComment.uniqueNo}
              commentDetails={eachComment}
              deletedata={deletedata}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App
