// Write your code here
import Popup from 'reactjs-popup'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import {Link, withRouter} from 'react-router-dom'
import './index.css'

const overlayStyles = {
  backgroundColor: '#ffff',
}
const Header = () => (
  <div className="Header_container">
    <Link to="/">
      <img
        src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
        alt="website logo"
        className="Header_image"
      />
    </Link>
    <Popup
      modal
      trigger={
        <button
          type="button"
          className="Header_popup-trigger-button"
          data-testid="hamburgerIconButton"
        >
          <GiHamburgerMenu size="30" />
        </button>
      }
      overlayStyle={overlayStyles}
    >
      {close => (
        <div className="popupContainer">
          <button
            type="button"
            className="closeBtn_Image"
            data-testid="closeButton"
            onClick={() => close()}
          >
            <IoMdClose />
          </button>
          <ul className="listContainer">
            <Link to="/" className="link" onClick={() => close()}>
              <li className="listItemsContainer">
                <AiFillHome />
                <p className="items1">Home</p>
              </li>
            </Link>
            <Link to="/about" className="link" onClick={() => close()}>
              <li className="listItemsContainer">
                <BsInfoCircleFill />
                <p className="items1">About</p>
              </li>
            </Link>
          </ul>
        </div>
      )}
    </Popup>
  </div>
)
export default withRouter(Header)
