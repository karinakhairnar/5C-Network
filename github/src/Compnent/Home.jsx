import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './main.css';
import { Link } from 'react-router-dom';
const Home = () => {
  const [data, setUser] = useState([]);
  const [text, setText] = useState();
  const [para, setPara] = useState({});

  const getUsers = () => {
    return axios({
      url: `https://api.github.com/users/${text}/repos`,
    }).then((res) => {
      setUser(res.data);
    });
  };
  const handleClick = () => {
    setPara({
      ...para,
    });
  };
  useEffect(() => {
    getUsers(para);
  }, [para]);
  console.log(data);
  return (
    <div>
      <div>
        <input value={text} onChange={(e) => setText(e.target.value)} />
        <button onClick={handleClick}>Search</button>
      </div>
      <div className='data'>
        {data.length ? (data.map((e) => (
          <div key={e.id}>
            <div className='flex'>
              <div className='gap'>
                <img className='image' src={e.owner.avatar_url} />
              </div>
              <div>
                <Link to={`/description/${e.owner.login}/${e.name}`} style={{textDecoration:'none'}}>
                  <p>{e.name}</p>
                </Link>
              </div>
            </div>
          </div>
        ))): ""}
      </div>
      
    </div>
  );
};

export default Home;
