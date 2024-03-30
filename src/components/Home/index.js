// Write your code here
import Header from '../Header'
import './index.css'

const Home = () => (
  <div className="Home_containerEl">
    <Header />
    <div className="Home_ItemsContainerEl">
      <img
        src="https://assets.ccbp.in/frontend/react-js/home-sm-img.png"
        alt="home"
        className="Home_image-sg"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/home-lg-img.png"
        alt="home"
        className="Home_image-lg"
      />
    </div>
  </div>
)

export default Home
