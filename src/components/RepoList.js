const RepoList= ({data})=>{
    console.log(data)
    return(
        <div className="repoList-card">
        <ol>
          {data.map((singleRepo, idx) => {
            return (
              <li key={idx}>
                <a href={singleRepo.html_url} target="_blank" rel="noreferrer">
                  {singleRepo.name}
                </a>
              </li>
            );
          })}
        </ol>
        {/* <button onClick={loaddata}>Load More</button> */}
      </div>
    )
}
export default RepoList;