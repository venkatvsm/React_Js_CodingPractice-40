// Write your code here
import Header from '../Header'
import './index.css'

const About = () => (
  <div className="Home_container">
    <Header />
    <div className="Home_ItemsContainer">
      <img
        src="https://assets.ccbp.in/frontend/react-js/about-sm-img.png"
        alt="about"
        className="Home_image-sg"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/about-lg-img.png"
        alt="about"
        className="Home_image-lg"
      />
    </div>
  </div>
)

export default About
