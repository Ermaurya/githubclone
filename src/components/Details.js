import moment from 'moment';
const Detail= ({data,changeFanComponent, fanComponent})=>{
    return(
        <div className="user-card-detail">
            <img src={data.avatar_url} alt="profile" className="user-profile-img"/>
            <div className="user-profile-text">
            {/* <h3>name</h3> */}
            <h3>{data.name}</h3>
            {/* <h3>login id</h3> */}
            <h3><a href={data.html_url} target="_blank" rel="noreferrer">
          @{data.login}
        </a></h3>
        <p>Member since {moment(data.created_at).fromNow()}.</p>
            </div>
            <div className="user-fans-buttons">
        <button onClick={()=> changeFanComponent(1)} className={fanComponent===1 ? "active" : ""}>
          {data.followers}
          <span>Followers</span>  
        </button>
        <button onClick={()=> changeFanComponent(2)}className={fanComponent===2 ? "active" : ""}>
          {data.public_repos}
          <span>Repos</span>  
        </button>
        <button onClick={()=> changeFanComponent(3)}className={fanComponent===3 ? "active":""}>
          {data.following}
          <span>Following</span>
        </button>
      </div>
        </div>
    )
}
export default Detail;