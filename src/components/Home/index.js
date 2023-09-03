import './index.css'
import {FiPlus, FiMinus} from 'react-icons/fi'
import Header from '../Header'
import Footer from '../Footer'

const Home = () => (
  <>
    <Header />
    <div className="home-container">
      <div className="first-cart-container">
        <div className="first-cart-main-adjust">
          <div className="first-cart-adjust">
            <div>
              <div className="first-cart-adjust-img">
                <img
                  src="https://i.ibb.co/59ZqYDT/Ellipse-46.png"
                  alt="Ellipse-46"
                  className="round-shape"
                />
                <img
                  src="https://i.ibb.co/fnn75H6/Ellipse-48.png"
                  alt="Ellipse-48"
                  className="half-curved"
                />
              </div>
              <p className="first-cart-para">
                Discover the beauty of the tropics
              </p>
              <h1 className="first-cart-head">
                Tropical <br />
                Destinations <br />{' '}
                <span className="head-span">For Student </span>
              </h1>
              <p className="first-cart-para-second">
                Lorem ipsum dolor sit amet consectetur. Sit mattis donec mi
                bibendum integer rutrum nisi. A nec nisl vitae{' '}
              </p>
              <div className="circle">
                <img
                  src="https://i.ibb.co/mXjKTG9/Subtract-2.png"
                  alt="Subtract-2"
                  className="circle"
                />
              </div>
              <button type="button" className="first-cart-button">
                SIGN UP
              </button>
              <div className="wifi-img">
                <img
                  src="https://i.ibb.co/QNq625Y/Ellipse-47.png"
                  alt="Ellipse-47"
                />
              </div>
            </div>
            <div>
              <img
                src="https://i.ibb.co/qpv4XFc/Ellipse-49.png"
                alt="Ellipse-49"
                className="second-round-shape"
              />
            </div>
          </div>
          <img
            src="https://i.ibb.co/R6qCn12/Group-171.png"
            alt="Group-171"
            className="human-img"
          />
        </div>
        <img
          src="https://i.ibb.co/FHLd9fX/Subtract-1.png"
          alt="Subtract-1"
          className="first-cart-last-img"
        />
      </div>
      <div className="second-cart-container">
        <div className="second-cart-round-img">
          <img
            src="https://i.ibb.co/5FWtbGM/Subtract-3.png"
            alt="Subtract-3"
            className="round-img-second"
          />
        </div>
        <div className="second-cart-main-adjuster">
          <div className="profile-cart-container-left">
            <div className="second-cart-1st-header-cart">
              <img
                src="https://i.ibb.co/SrB2MVV/avatar-1.png"
                alt="avatar-1"
                className="second-cart-avatarImg"
              />
              <div>
                <h2 className="second-cart-head">Jenny Wilson</h2>
                <p className="second-cart-para">
                  Lorem ipsum dolor sit amet, consectetur adipiscing...
                </p>
              </div>
            </div>
            <div className="second-cart-1st-header-cart">
              <img
                src="https://i.ibb.co/WPWz0tC/avatar-2.png"
                alt="avatar-2"
                className="second-cart-avatarImg"
              />
              <div>
                <h2 className="second-cart-head">Jenny Wilson</h2>
                <p className="second-cart-para">
                  Lorem ipsum dolor sit amet, consectetur adipiscing...
                </p>
              </div>
            </div>
            <div className="second-cart-1st-header-cart">
              <img
                src="https://i.ibb.co/27jtgBV/avatar-3.png"
                alt="avatar-3"
                className="second-cart-avatarImg"
              />
              <div>
                <h2 className="second-cart-head">Jenny Wilson</h2>
                <p className="second-cart-para">
                  Lorem ipsum dolor sit amet, consectetur adipiscing...
                </p>
              </div>
            </div>
          </div>
          <div className="Tropical-Adventure-container-right">
            <img
              src="https://i.ibb.co/59ZqYDT/Ellipse-46.png"
              alt="Ellipse-46"
              className="round-shape-trio"
            />
            <h1 className="Tropical-Adventure-head">
              Tropical Adventure <br />
              <span className="Tropical-Adventure-head-span">
                for Students.
              </span>
            </h1>
            <p className="Tropical-Adventure-para">
              Student Tropical Vacation: Relax and Recharge
            </p>
            <ul className="Tropical-Adventure-unordered-list">
              <li className="Tropical-Adventure-list-item">
                Lorem ipsum dolor sit amet
              </li>
              <li className="Tropical-Adventure-list-item">
                Massa quis natoque sit
              </li>
              <li className="Tropical-Adventure-list-item">
                Eros non pellentesque elit
              </li>
              <li className="Tropical-Adventure-list-item">
                tortor id euismod habitant
              </li>
              <li className="Tropical-Adventure-list-item">
                Sed suspendisse id in ultrices
              </li>
            </ul>
            <button type="button" className="second-cart-button">
              Explore More
            </button>
          </div>
        </div>
      </div>
      <div className="third-cart-container">
        <h1 className="third-cart-container-head">Our Destinations</h1>
        <div className="third-container-main-adjuster">
          <div className="third-container-card">
            <img
              src="https://i.ibb.co/DrZ78Jc/card-image.png"
              alt="card-ac"
              className="third-container-card-img"
            />
            <h1 className="third-cart-container-head2Nd">Harvard University</h1>
            <div className="third-cart-adjust">
              <p className="third-cart-para">Cambridge, Massachusetts, UK</p>
              <div className="dot-container">
                <span className="third-dot">...</span>
              </div>
            </div>
          </div>
          <div className="third-container-card">
            <img
              src="https://i.ibb.co/p2sZ0Xy/card-image-1.png"
              alt="card-ac"
              className="third-container-card-img"
            />
            <h1 className="third-cart-container-head2Nd">Harvard University</h1>
            <div className="third-cart-adjust">
              <p className="third-cart-para">Oxford, England</p>
              <div className="dot-container">
                <span className="third-dot">...</span>
              </div>
            </div>
          </div>
          <div className="third-container-card">
            <img
              src="https://i.ibb.co/chx8cty/card-image-2.png"
              alt="card-ac"
              className="third-container-card-img"
            />
            <h1 className="third-cart-container-head2Nd">Harvard University</h1>
            <div className="third-cart-adjust">
              <p className="third-cart-para">Stanford, California</p>
              <div className="dot-container">
                <span className="third-dot">...</span>
              </div>
            </div>
          </div>
          <div className="third-container-card">
            <img
              src="https://i.ibb.co/XF0yjFs/card-image-3.png"
              alt="card-ac"
              className="third-container-card-img"
            />
            <h1 className="third-cart-container-head2Nd">Harvard University</h1>
            <div className="third-cart-adjust">
              <p className="third-cart-para">Nanyang Ave, Singapura</p>
              <div className="dot-container">
                <span className="third-dot">...</span>
              </div>
            </div>
          </div>
        </div>
        <div className="pagination-container">
          <img
            src="https://i.ibb.co/qrv8f5x/Vector.png"
            alt="Vector"
            className="arrow"
          />
          <span className="pagination-span1">
            2<span className="pagination-span2">/14</span>
          </span>
          <img
            src="https://i.ibb.co/z6dqV8n/Vector-1.png"
            alt="Vector-1"
            className="arrow"
          />
        </div>
      </div>
      <div className="forth-container">
        <div className="forth-main-cart-adjuster">
          <div className="left-container">
            <div className="forth-cart-adjust">
              <img
                src="https://i.ibb.co/59ZqYDT/Ellipse-46.png"
                alt="Ellipse-46"
                className="round-shape-forth"
              />
              <div className="circle-shape-forth-cont">
                <img
                  src="https://i.ibb.co/9TN2B6z/Subtract-4.png"
                  alt="Subtract-4"
                  className="circle-shape-forth"
                />
              </div>
            </div>
            <h6 className="left-container-para">Get 20% off for student</h6>
            <div className="forth-main-cart-adjuster">
              <h1 className="left-container-head">
                Student discounts available.
              </h1>
              <img
                src="https://i.ibb.co/qpv4XFc/Ellipse-49.png"
                alt="Ellipse-49"
                className="forth-left-img"
              />
            </div>
            <p className="left-container-para2">
              Get ready for some fun in the sun!
            </p>
            <ul className="Tropical-Adventure-unordered-list unor">
              <li className="Tropical-Adventure-list-item">
                Lorem ipsum dolor sit amet
              </li>
              <li className="Tropical-Adventure-list-item">
                Massa quis natoque sit quam
              </li>
              <li className="Tropical-Adventure-list-item">
                Eros non pellentesque elit{' '}
              </li>
              <li className="Tropical-Adventure-list-item">
                tortor id euismod habitant
              </li>
              <li className="Tropical-Adventure-list-item">
                Sed suspendisse id in ultrices
              </li>
            </ul>
            <button type="button" className="second-cart-button">
              Explore More
            </button>
            <div className="wifi-img">
              <img
                src="https://i.ibb.co/xgbK1pC/Ellipse-54.png"
                alt="Ellipse-47"
              />
            </div>
          </div>
          <div className="right-container">
            <div>
              <img
                src="https://i.ibb.co/BP9cx2K/Mask-group.png"
                alt="Mask-group"
                className="forth-right-img"
              />
            </div>
          </div>
        </div>
        <div className="round-img-forth-container">
          <img
            src="https://i.ibb.co/5FWtbGM/Subtract-3.png"
            alt="Subtract-3"
            className="round-img-forth"
          />
        </div>
      </div>
      <div className="fifth-container">
        <div className="fifth-main-cart-adjuster">
          <div className="fifth-left-container">
            <div className="fifth-left-adjuster">
              <img
                src="https://i.ibb.co/cxDNNDx/Group-167.png"
                alt="Group-167"
                className="fifth-left-img"
              />
              <div className="left-circle-img-co">
                <img
                  src="https://i.ibb.co/2Z1SZKF/Subtract-5.png"
                  alt="Subtract-5"
                  className="left-circle-img"
                />
              </div>
            </div>
          </div>
          <div className="fifth-right-container">
            <h1>Book now</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            <div>
              <label htmlFor="searchId" className="label-ele">
                CITY
              </label>
              <br />
              <input
                type="search"
                placeholder="Placeholder"
                className="search-ele"
              />
              <div className="fifth-cart-container-input">
                <div>
                  <label htmlFor="textId" className="label-ele">
                    ARRIVAL
                  </label>
                  <br />
                  <input
                    type="text"
                    placeholder="10 October"
                    className="arrival-input"
                  />
                </div>
                <div className="Departure-container">
                  <label htmlFor="textId" className="label-ele">
                    DEPARTURE
                  </label>
                  <br />
                  <input
                    type="text"
                    placeholder="11 October"
                    className="arrival-input"
                  />
                </div>
              </div>
              <div className="fifth-cart-container-input-plus-minus-adjuster">
                <div className="start-and-roo-container">
                  <label htmlFor="textId" className="label-ele">
                    STAR
                  </label>
                  <div className="plus-minus-button-cont">
                    <div className="minus-icon-con">
                      <FiMinus className="minus-icon" />
                    </div>
                    <div className="number">
                      <span className="plus-minus-span">4</span>
                    </div>
                    <div className="minus-icon-con">
                      <FiPlus className="minus-icon" />
                    </div>
                  </div>
                </div>
                <div className="star-and-room-container Departure-container">
                  <label htmlFor="textId" className="label-ele">
                    ROOM
                  </label>
                  <div className="plus-minus-button-cont">
                    <div className="minus-icon-con">
                      <FiMinus className="minus-icon" />
                    </div>
                    <div className="number">
                      <span className="plus-minus-span">1</span>
                    </div>
                    <div className="minus-icon-con">
                      <FiPlus className="minus-icon" />
                    </div>
                  </div>
                </div>
              </div>
              <button type="button" className="fifth-right-container-button">
                BOOK NOW
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="sixth-container">
        <h1 className="sixth-main-head">Testimonials</h1>
        <div className="sixth-container-main-adjuster">
          <div className="sixth-cont-cart">
            <img
              src="https://i.ibb.co/SxvMKZP/Frame-6.png"
              alt="Frame-6"
              className="sixth-human-img"
            />
            <p className="sixth-para">Corey Korsgaard</p>
            <div className="border" />
            <p className="sixth-description">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </div>
          <div className="sixth-cont-cart">
            <img
              src="https://i.ibb.co/h1RF5RB/Avatar-4.png"
              alt="Frame-4"
              className="sixth-human-img"
            />
            <p className="sixth-para">Jakob Aminoff</p>
            <div className="border" />
            <p className="sixth-description">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </div>
          <div className="sixth-cont-cart">
            <img
              src="https://i.ibb.co/0DXRwdf/Avatar-5.png"
              alt="Frame-5"
              className="sixth-human-img"
            />
            <p className="sixth-para">Carla Press</p>
            <div className="border" />
            <p className="sixth-description">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </div>
        </div>
      </div>
      <div className="last-footer-container">
        <Footer />
      </div>
    </div>
  </>
)

export default Home
