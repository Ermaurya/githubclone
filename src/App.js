import Search from './components/Search';
import Footer from './components/Footer';
import Detail from './components/Details';
import RepoList from './components/RepoList';
import FollowerList from './components/FollowerList';
import FollowingList from './components/FollowingList'
import './App.css';
import { github } from './util'
import { useEffect, useState } from 'react';


function App() {
  const [detail, setDetail] = useState({});
  const [repoList, setRepoList] = useState([]);
  const [followerList, setFollowerList] = useState([]);
  const [followingList, setFollowingList] = useState([]);
  const [username, setUsername] = useState('');
  const [fanComponent, setFanComponent] = useState(2);
  const [isSuccessful, setSuccessful] = useState(true);

  useEffect(_ => {
    setDetail({});
    setSuccessful(true);
    if(username === "") {
      return;
    }
    (async _ => {
      try {
        const response = await github.get(`/${username}`);
        setDetail(response.data);
      } catch(e) {
        setSuccessful(false);
      }
    })();
  }, [username]);

  useEffect(() => {
    (async () => {
      setDetail({});
      const response = await github.get(`/${username}`);
      setDetail(response.data);
      console.log(response.data);
    })();
  }, [username]);

  useEffect(() => {
    setRepoList([]);
    (async () => {
      const response = await github.get(`/${username}/repos`);
      setRepoList(response.data);
    })();
  }, [username]);
  useEffect(() => {
    setFollowingList([]);
    (async () => {
      const response = await github.get(`/${username}/following`);
      setFollowingList(response.data);
    })();
  }, [username]);
  useEffect(() => {
    setFollowerList([]);
    (async () => {
      const response = await github.get(`/${username}/followers`);
      setFollowerList(response.data);
    })();

  }, [username]);
  const searchedUsername = keyword => {
    setUsername(keyword);
  }
  const showFanData = () => {
    if (fanComponent === 1) {
      if (followerList.length === detail.followers) {
        return false;
      } else {
        return true;
      }
    }
    else if (fanComponent === 2) {
      if (repoList.length === detail.public_repos) {
        return false;
      } else {
        return true;
      }

    } else {
      if (followingList.length === detail.following) {
        return false;
      } else {
        return true;
      }
    }
  }
 const loadMoreData= async ()=>{
  if(fanComponent===1){
    const currentPage=Math.ceil(followerList.length/30);
    const nextPage=currentPage+1;
    const response= await github.get(`/${username}/followers?page=${nextPage}`);
     const list=response.data;
     setFollowerList(currentList=>{
      const newList=[...currentList,...list];
      return newList;
     })
  }else if(fanComponent===1){
    const currentPage=Math.ceil(followerList.length/30);
    const nextPage=currentPage+1;
    const response= await github.get(`/${username}/followers?page=${nextPage}`);
     const list=response.data;
     setFollowerList(currentList=>{
      const newList=[...currentList,...list];
      return newList;
     })
  }else if(fanComponent===2){
    const currentPage=Math.ceil(repoList.length/30);
    const nextPage=currentPage+1;
    const response= await github.get(`/${username}/repos?page=${nextPage}`);
     const list=response.data;
     setRepoList(currentList=>{
      const newList=[...currentList,...list];
      return newList;
     })
  }else if(fanComponent===3){
    const currentPage=Math.ceil(followingList.length/30);
    const nextPage=currentPage+1;
    const response= await github.get(`/${username}/following?page=${nextPage}`);
     const list=response.data;
     setFollowingList(currentList=>{
      const newList=[...currentList,...list];
      return newList;
     })
  }
 }
  return (
    <main>
      <Search searchedUsername={searchedUsername}  isSuccessful={isSuccessful} />
      {detail.id === undefined ? (
        false
      ) : (
        <>
      <Detail data={detail}  changeFanComponent={setFanComponent} fanComponent={fanComponent}/>
      {fanComponent===1 ? (
        <FollowerList data={followerList}/>
      ):(fanComponent===2 ? (

        <RepoList data={repoList} />
      ):(
        <FollowingList data={followingList}/>
      ))}
        {showFanData() === true ? (
            <div className="load-more">
              <button onClick={loadMoreData} >Load More</button>
            </div>
          ) : (false)}
          <Footer />
      </>
          )}
    </main>
  );
}

export default App;
