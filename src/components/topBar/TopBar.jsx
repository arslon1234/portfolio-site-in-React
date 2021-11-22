import { Mail, Person } from '@material-ui/icons'
import './topbar.scss'

export default function TopBar({menuOpen,setMenuOpen}) {
       return (
              <div className={"topbar " + (menuOpen && "active")}>
                     <div className="wrapper">
                            <div className="left">
                                   <a href="#intro" className="logo">clever.</a>
                                   <div className="itemContainer">
                                          <Person className="icon"/>
                                          <span>+998 95 019 24 69</span>
                                   </div>
                                   <div className="itemContainer">
                                          <Mail className="icon"/>
                                          <span>arslonBek@clever.com</span>
                                   </div>
                            </div>
                            <div className="right">
                            <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                                   <span className="line1"></span>
                                   <span className="line2"></span>
                                   <span className="line3"></span>
                            </div>
                            </div>
                     </div>
              </div>
       )
}
