import { useRef } from "react";
const Search = ({ searchedUsername,isSuccessful }) => {
    const inputref = useRef();
    const searched = e => {
        e.preventDefault();
        const searchKeyword = inputref.current.value;
        searchedUsername(searchKeyword);
        console.log(inputref.current.value);

    }

    return (
        <div className="search-Navbar">
            <div className="search-card">
            <form onSubmit={searched}>
                <input type='text' ref={inputref} placeholder="Enter UserName..." className={isSuccessful === false ? "input-area":""}/>
                <button>Search</button>
            </form>
            {isSuccessful === false ? (
                <div className=' errorpage'>
                <img alt="Errorpage" src="https://c4.wallpaperflare.com/wallpaper/173/114/541/minimalism-black-background-error-simple-background-not-available-hd-wallpaper-preview.jpg"/>          
                      </div>
                ) : false}
                </div>
        </div>
    )
}
export default Search;