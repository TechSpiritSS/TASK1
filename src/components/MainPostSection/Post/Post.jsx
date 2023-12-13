/* eslint-disable react/prop-types */
import { useState } from 'react';
import './Post.css';
import { FaEye } from 'react-icons/fa';
import { AiTwotoneCalendar } from 'react-icons/ai';
import { BiDotsHorizontal } from 'react-icons/bi';
import { IoLocationOutline } from 'react-icons/io5';
import { MdWorkOutline } from 'react-icons/md';

const PostFooter = ({ post }) => {
  return (
    <div className="d-flex justify-content-between">
      <div className="d-flex align-items-center">
        <img src={post.author_img} alt={post.author} />
        <div className="ms-3">
          <p className="user-name mb-0">{post.author}</p>
          <p className="view mb-0 d-lg-none">{post.views} view</p>
        </div>
      </div>
      <div className="d-flex align-items-center">
        <span className="view d-none d-lg-block">
          <FaEye /> {post.views} view
        </span>
        <span className="shear d-flex justify-content-center align-items-center">
          <img src="https://i.ibb.co/QC4B3R0/shear.png" alt="shear" />
          <span className="ms-2 d-block d-lg-none">Shear</span>
        </span>
      </div>
    </div>
  );
};

const Post = ({ post }) => {
  const [edit, setEdit] = useState(false);

  return (
    <div className="post">
      {(post.type === '✍️ Article' || post.type === '🔬️ Education') && (
        <img className="w-100" src={post.img} alt={post.id} />
      )}
      <p className="type my-1 lg-my-2">{post.type}</p>
      <div className="d-flex justify-content-between">
        <p className="title mb-2">{post.title}</p>
        <span
          onClick={() => setEdit(!edit)}
          className={`edit position-relative ${edit ? 'editbg' : ''}`}
        >
          <BiDotsHorizontal />
          {edit && (
            <ul className="list-unstyled position-absolute">
              <li>Edit</li>
              <li>Report</li>
              <li>Option 3</li>
            </ul>
          )}
        </span>
      </div>
      {(post.type === '✍️ Article' || post.type === '🔬️ Education') && (
        <p className="content">{post.content}</p>
      )}
      {(post.type === '🗓️ Meetup' || post.type === '💼️ Job') && (
        <div className="visit-button">
          <p className="mb-0">
            {post.type === '🗓️ Meetup' && (
              <span>
                <AiTwotoneCalendar className="me-1" />
                {post.time}
              </span>
            )}

            {post.type === '💼️ Job' && (
              <span>
                {' '}
                <MdWorkOutline className="me-1" />
                {post.company}
              </span>
            )}
            <span className="ms-5">
              <IoLocationOutline /> {post.location}
            </span>
          </p>

          {post.type === '🗓️ Meetup' && (
            <button className="my-4">Visit Website</button>
          )}
          {post.type === '💼️ Job' && (
            <button className="my-4 text-info">Apply on Timesjobs</button>
          )}
        </div>
      )}
      <PostFooter post={post} />
    </div>
  );
};

export default Post;
