const FollowingList= ({data})=>{
    console.log(data)
    return(
        <div className="repoList-card">

            <h2>Followinglist</h2>
            <div>
                {data.map((element,index)=>{
                    console.log(element)
                    return(
                        <div className="following-list-card" key={index}>
                            <img src={element.avatar_url} alt=''/>
                            <div className="fan-name">
                                <h3>{element.name}</h3>
                                <a href={element.html_url} rel="noreferrer" target='_blank'>
                                {element.login}
                                </a>
                                {/* <p>{element.following}</p> */}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default FollowingList;