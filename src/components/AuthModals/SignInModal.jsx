/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { RxCross1 } from 'react-icons/rx';
import { BsFacebook, BsGoogle } from 'react-icons/bs';

const SignInModal = ({ setShowSignIn, showSignIn, setShowSignUp }) => {
  return (
    <div className={`main-container ${showSignIn ? 'd-block' : 'd-none'}`}>
      <div
        className={`signup-modal`}
        style={{
          '@media (maxWidth: 425px)': {
            top: 'calc(100vh)',
          },
        }}
      >
        <p onClick={() => setShowSignIn(false)} className="text-end">
          <RxCross1 size={25} className="close" />
        </p>
        <div className="modalbody">
          <p className="title d-sm-block d-none">
            Let's learn, share & inspire each other with our passion for
            computer engineering. Sign up now 🤘🏼
          </p>
          <div className="form-div d-flex justify-content-between">
            <div className="w-100 w-md-50 main-form">
              <p>Sign In</p>
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

              <div className="d-flex justify-content-between align-items-center">
                <button className="submit">Sign In</button>
                <p className="fp text-end d-block d-md-none mb-0">
                  <span
                    className="fs-6"
                    style={{
                      cursor: 'pointer',
                      textDecoration: 'underline',
                    }}
                    onClick={() => {
                      setShowSignIn(false);
                      setShowSignUp(true);
                    }}
                  >
                    or, Create account
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

              <div className="fp w-100 text-center">Forget Password?</div>
            </div>
            <div className="w-md-50 img-div d-none d-md-block">
              <p className="fp text-end">
                Don’t have an account yet?
                <span
                  className="sign-color"
                  onClick={() => {
                    setShowSignIn(false);
                    setShowSignUp(true);
                  }}
                >
                  {' '}
                  Create new for free!
                </span>
              </p>
              <img
                className="w-100"
                src={'/assets/post/signinbanner.png'}
                alt=""
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

export default SignInModal;
