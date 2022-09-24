import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './main.css';
const Followers = () => {
  const [follow, setFollow] = useState([]);
  const param = useParams();
  const { login } = param;
  const navigate = useNavigate();
  console.log(login);
  const fetchfollows = async () => {
    await fetch(`https://api.github.com/users/${login}/followers`)
      .then((res) => res.json())
      .then((res) => {
        setFollow(res);
      });
  };
  console.log(follow);

  useEffect(() => {
    fetchfollows();
  }, []);

  //
  return (
    <div>
      <div>
        <h2> Followers</h2>
        <label> Total Followers :- {follow.length}</label>
      </div>
      <button>
        <Link to={`/`} style={{ textDecoration: 'none' }}>
          Back To Home
        </Link>
      </button>
      <div className='data'>
        {follow.length
          ? follow.map((e) => (
              <div key={e.id}>
                <div className='flex'>
                  <div className='gap'>
                    <img className='image' src={e.avatar_url} />
                  </div>
                  <div>
                    <p>{e.login}</p>
                  </div>
                </div>
              </div>
            ))
          : ''}
      </div>
    </div>
  );
};

export default Followers;
