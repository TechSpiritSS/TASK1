/* eslint-disable react/no-unescaped-entities */
import { FaCaretDown } from 'react-icons/fa';
import { BsPlayFill, BsFillCircleFill, BsSearch } from 'react-icons/bs';
import './Navbar.css';
import SignupModal from '../AuthModals/SignupModal';
import { useState } from 'react';
import SignInModal from '../AuthModals/SignInModal';

function Navbar() {
  const [showSignUp, setShowSignUp] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);

  return (
    <nav className="px-2 lg-px-5 d-flex justify-content-end d-lg-block my-2">
      <SignupModal
        setShowSignUp={setShowSignUp}
        showSignUp={showSignUp}
        setShowSignIn={setShowSignIn}
      ></SignupModal>
      <SignInModal
        showSignIn={showSignIn}
        setShowSignIn={setShowSignIn}
        setShowSignUp={setShowSignUp}
      ></SignInModal>
      <div className="d-none d-lg-flex justify-content-between align-items-center">
        <p className="fs-3 text-uppercase logo-color2 mb-0">
          <span className="log-color">ATG.</span>W
          <img
            height={24}
            src="/assets/users/world.png"
            alt="world"
            className="mb-1"
          />
          RLD
        </p>
        <label className="search d-flex align-items-center">
          <BsSearch />
          <input
            type="text"
            placeholder="Search for your favorite groups in ATG"
          />
        </label>
        <div className="menu-div">
          <p onClick={() => setShowSignUp(true)} className="mb-0">
            Create account. <span className="sign-color">It's free!</span>{' '}
            <FaCaretDown />
          </p>
        </div>
      </div>
      <div className="min-menu d-lg-none d-flex">
        <span className="dot1">
          <BsFillCircleFill />
        </span>
        <span className="dot2 ms-2">
          <BsFillCircleFill />
        </span>
        <span onClick={() => setShowSignUp(true)} className="dot3 ms-2">
          <BsPlayFill size={25} />
        </span>
      </div>
    </nav>
  );
}

export default Navbar;
