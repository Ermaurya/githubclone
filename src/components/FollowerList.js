const FollowerList = ({data}) => {
    console.log(data)
    return (
        <div className="repoList-card">

            <h2>followerlist</h2>
            <div>
                {data.map((elem, index) => {
                    // console.log(elem);
                    return (
                        <div className="follower-list-card" key={index}>
                            <img src={elem.avatar_url} alt='' />
                            <div className="fan-name">
                              
                                <a href={elem.html_url} rel="noreferrer" target='_blank'>
                                    {elem.login}
                                </a>
                               
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default FollowerList;