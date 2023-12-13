import { useState } from 'react';
import './MainPostSection.css';
import Post from './Post/Post';
import { FaCaretDown, FaUsers, FaPen } from 'react-icons/fa';
import { GrLocation } from 'react-icons/gr';
import { RxCross2 } from 'react-icons/rx';
import { BiErrorCircle } from 'react-icons/bi';
import { AiFillLike } from 'react-icons/ai';

const MainPostSection = () => {
  const [isWriteMode, setIsWriteMode] = useState([]);

  const posts = [
    {
      id: 1,
      img: '/assets/post/post1.png',
      type: '✍️ Article',
      title: 'What if famous brands had regular fonts? Meet RegulaBrands!',
      content:
        'I’ve worked in UX for the better part of a decade. From now on, I plan to rei…',
      author: 'Sarthak Kamra',
      author_img: '/assets/users/user1.png',
      views: '1.4k views',
    },
    {
      id: 2,
      img: '/assets/post/post2.png',
      type: '🔬️ Education',
      title:
        'Tax Benefits for Investment under National Pension Scheme launched by Government',
      content:
        'I’ve worked in UX for the better part of a decade. From now on, I plan to rei…',
      author: 'Sarah West',
      author_img: '/assets/users/user2.png',
      views: '1.4k views',
    },
    {
      id: 3,
      img: '/assets/post/post3.png',
      type: '🗓️ Meetup',
      title: 'Finance & Investment Elite Social Mixer @Lujiazui',
      author: 'Ronal Jones',
      author_img: '/assets/users/user3.png',
      views: '1.4k views',
      time: 'Fri, 12 Oct, 2018',
      location: 'Ahmedabad, India',
    },
    {
      id: 4,
      img: '/assets/post/post4.png',
      type: '💼️ Job',
      title: 'Software Developer',
      author: 'Joseph Gray',
      author_img: '/assets/users/user4.png',
      views: '1.4k views',
      company: 'Innovaccer Analytics Private Ltd.',
      location: 'Noida, India',
    },
  ];

  const recommendationGroups = [
    {
      id: 1,
      img: '/assets/groups/group1.jpg',
      name: 'Leisure',
    },
    {
      id: 2,
      img: '/assets/groups/group2.jpg',
      name: 'Activism',
    },
    {
      id: 3,
      img: '/assets/groups/group3.jpg',
      name: 'MBA',
    },
    {
      id: 4,
      img: '/assets/groups/group4.jpg',
      name: 'Philosophy',
    },
  ];

  return (
    <div className="main-post-section mx-auto px-2">
      <div className="col top-header d-flex justify-content-between">
        <p className="min-btn1 d-lg-none">Post(368)</p>
        <p className="min-btn2 d-lg-none">
          Filter All: <FaCaretDown />
        </p>
        <ul className="list-unstyled d-none d-lg-flex">
          <li className="active">All Post(32)</li>
          <li>Article</li>
          <li>Event</li>
          <li>Education</li>
          <li>Job</li>
        </ul>
        <div className="post-btn d-none d-lg-block">
          <button className="btn-bg1">
            Write a Post <FaCaretDown />
          </button>
          <button className="btn-bg2">
            Join Group <FaUsers />
          </button>
        </div>
      </div>
      <div className="col main-post">
        <div className="row">
          <div className="col-lg-8 poster-left">
            {posts.map((post) => (
              <Post key={post.id} post={post}></Post>
            ))}
            <button className="phone-post d-lg-none">
              <FaPen />
            </button>
          </div>
          <div className="poster-right col-lg-4 d-none d-lg-flex justify-content-center">
            <div className="center-dive">
              <div className="location">
                <label className="d-flex justify-content-between align-items-center">
                  <span>
                    <GrLocation />
                    <input
                      readOnly={isWriteMode ? isWriteMode : ''}
                      type="text"
                      defaultValue="Noida, India"
                      placeholder="Enter your location"
                    />
                  </span>
                  <span onClick={() => setIsWriteMode(!isWriteMode)}>
                    {isWriteMode ? <FaPen /> : <RxCross2 />}
                  </span>
                </label>
                <p className="mb-0 d-flex mt-4">
                  <p className="mb-0 me-1">
                    <BiErrorCircle />
                  </p>
                  Your location will help us serve better and extend a
                  personalised experience.
                </p>
              </div>
              <div className="user-list mt-5">
                <p className="text-uppercase d-flex align-items-center">
                  <span className="d-flex align-items-center me-1">
                    <AiFillLike width={16} height={15} />
                  </span>{' '}
                  <span>REcommended Groups</span>
                </p>
                <div className="list">
                  {recommendationGroups.map((group) => (
                    <div
                      key={group.name}
                      className="d-flex justify-content-between align-items-center mt-3"
                    >
                      <div>
                        <img
                          src={group.img}
                          alt={group.name}
                          className="img-fluid rounded-circle"
                          style={{
                            height: '36px',
                            width: '36px',
                            objectFit: 'cover',
                          }}
                        />
                        <span className="ms-2">{group.name}</span>
                      </div>
                      <button>Follow</button>
                    </div>
                  ))}

                  <p
                    className="text-end mt-5 text-info"
                    style={{ cursor: 'pointer' }}
                  >
                    See More...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPostSection;
