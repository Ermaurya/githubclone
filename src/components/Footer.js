import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

const Footer=()=>{
    return(
        <div className="footer-card">
         {/* <img src="/" alt="logo"/> */}
         <FontAwesomeIcon icon="fa-brands fa-github" />
         <ul>
            <li><a href="/">Privacy</a></li>
            <li><a href="/">Security</a></li>
            <li><a href="/">Status</a></li>
            <li><a href="/">Docs</a></li>
            <li><a href="/">Contact GitHub</a></li>
            <li><a href="/">About</a></li>
         </ul>
        </div>
    )
}
export default Footer;