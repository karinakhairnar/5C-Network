import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
const DecriptionPage = () => {
  const [repo, setRepo] = useState([]);
  const param = useParams();
  const { login, name } = param;
  const navigate = useNavigate();
  console.log(login, name);
  const fetchRepos = async () => {
    await fetch(`https://api.github.com/repos/${login}/${name}`)
      .then((res) => res.json())
      .then((res) => {
        setRepo([res]);
      });
  };
  console.log(repo);

  useEffect(() => {
    fetchRepos();
  }, []);

  return (
    <div>
      DecriptionPage
      <div>
        {repo.length
          ? repo.map((e) => {
              return (
                <div key={e.id} className='repo'>
                  <div>
                    <img className='image' src={e.owner.avatar_url} />
                    <p>{e.name}</p>
                  </div>
                  <div className='repoData'>
                    <p>Description :- {e.description}</p>
                    <p>created_at :- {e.created_at}</p>
                    <p>Language :- {e.language}</p>
                    <button>{e.followers_url}followers_url</button>
                    <button>{e.following_url}following_url</button>
                  </div>
                </div>
              );
            })
          : ''}
      </div>
      {/* <button onClick={() => navigate('/')}>Back To Home</button> */}
      <button>
        <Link to={`/`} style={{ textDecoration: 'none' }}>
          Back To Home
        </Link>
      </button>
    </div>
  );
};

export default DecriptionPage;
