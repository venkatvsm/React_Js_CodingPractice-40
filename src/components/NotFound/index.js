// Write your code here
import Header from '../Header'
import './index.css'

const NotFound = () => (
  <div className="notFound_container">
    <Header />
    <div className="notFound_ItemsContainer">
      <img
        src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
        alt="not found"
        className="Home_image"
      />
      <h1>Lost Your Way?</h1>
      <p>
        Sorry, we cannot find that page. You will find lots to explore on the home page
      </p>
    </div>
  </div>
)
export default NotFound
