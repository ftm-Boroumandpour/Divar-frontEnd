import { Link } from "react-router-dom"
import styles from "./Header.module.css"
import { useQuery } from "@tanstack/react-query"
import { getProfile } from "../services/user"
import { deleteCookie } from "../utils/cookie"

function Header() {
    const {data ,refetch} = useQuery(["profile"], getProfile)

    const exitHandler=()=>{
        deleteCookie()
        refetch()
    }
  return (
    <header className={styles.header}>
        <div>
            <Link to="/"><img src="divar.svg" className={styles.logo}/></Link>
            <span><img src="location.svg" /><p>تهران</p></span>
        </div>
        <div>
            <Link to="/auth">
                <div className={styles.divarManButton}>
                <span >
                    <img src="profile.svg"/><p>دیوار من</p>
                </span>
                <span className={styles.submenu}>
                    <ul>
                        {data && data.data.role==="ADMIN" && <li><Link to="/admin">پنل ادمین</Link> </li>}
                        <li onClick={exitHandler}>خروج</li>
                    </ul>
                </span>
                </div>
            </Link>
            <Link to="/dashboard" className={styles.button}>ثبت آگهی</Link>
        </div>
    </header>
  )
}

export default Header