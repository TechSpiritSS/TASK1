/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import './SignupModal.css';
import { RxCross1 } from 'react-icons/rx';
import { BsFacebook, BsGoogle } from 'react-icons/bs';

const SignupModal = ({ setShowSignUp, showSignUp, setShowSignIn }) => {
  return (
    <div className={`main-container ${showSignUp ? 'd-block' : 'd-none'}`}>
      <div className={`signup-modal`}>
        <p onClick={() => setShowSignUp(false)} className="text-end">
          <RxCross1 size={25} className="close" />
        </p>
        <div className="modalbody">
          <p className="title d-sm-block d-none">
            Let's learn, share & inspire each other with our passion for
            computer engineering. Sign up now 🤘🏼
          </p>
          <div className="form-div d-flex justify-content-between">
            <div className="w-100 w-md-50 main-form">
              <p>Create Account</p>

              <input
                className="w-50 p-2"
                type="text"
                placeholder="First Name"
              ></input>
              <input
                className="w-50 p-2"
                type="text"
                placeholder="Last Name"
              ></input>
              <input
                className="w-100 p-2"
                type="email"
                placeholder="Email"
              ></input>
              <input
                className="w-100 p-2"
                type="password"
                placeholder="Password"
              ></input>
              <input
                className="w-100 p-2"
                type="password"
                placeholder="Confirm Password"
              ></input>

              <div className="d-flex justify-content-between align-items-center">
                <button className="submit">Create Acount</button>
                <p className="fp text-end d-block d-md-none mb-0">
                  <span
                    className="fs-6"
                    onClick={() => {
                      setShowSignIn(true);
                      setShowSignUp(false);
                    }}
                  >
                    Or,Sign In
                  </span>
                </p>
              </div>
              <div className="facebook w-100 text-center">
                <BsFacebook className="me-2" />
                Sign Up with Facebook
              </div>
              <div className="google w-100 text-center">
                <BsGoogle className="me-2" />
                Sign Up with Google
              </div>

              <div className="d-md-none last-p text-center mt-2">
                By signing up, you agree to our Terms & conditions, Privacy
                policy
              </div>
            </div>
            <div className="w-md-50 img-div d-none d-md-block">
              <p className="fp text-end">
                Already have an account?
                <span
                  className="sign-color"
                  onClick={() => {
                    setShowSignIn(true);
                    setShowSignUp(false);
                  }}
                >
                  {' '}
                  Sign In
                </span>
              </p>
              <img
                className="w-100"
                src="/assets/post/signinbanner.png"
                alt="Sign In Banner"
              />
              <p className="last-p text-center">
                By signing up, you agree to our Terms & conditions, Privacy
                policy
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupModal;
