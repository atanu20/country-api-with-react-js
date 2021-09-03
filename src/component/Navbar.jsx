import React,{useState} from 'react'
import { useHistory } from 'react-router'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const [show, setShow] = useState(false)
    const history=useHistory()
    return (
        <>
            <div className="header">
                <div className="navbox">
                    <NavLink to="/">
                    <h2>Country</h2>
                    </NavLink>
                    <div className="navlinks">
                        <div className="navlink">
                        <button className="btn btn-dark ml-1 mr-1" onClick={()=>history.push('/')}>All Countries</button>
                        <button className="btn btn-dark ml-1 mr-1" onClick={()=>history.push('/find-country')}>Find Countries</button>

                        </div>
                        <div className="navlinkbar">
                            <i className="fa fa-bars" onClick={()=>setShow(true)}></i>
                        </div>

                        {
                            show &&  (
                                <>
                                <div  className="sidenav"  >
                                   <div className="sidebarbox">
                                       <i className="fa fa-times" onClick={()=>setShow(false)}></i>
                                   </div>
                                   <div className="sidebaritem">
                                   <button className="btn btn-dark mt-2 mb-2" onClick={()=>history.push('/')}>All Countries</button>
                        <button className="btn btn-dark mt-2 mb-2" onClick={()=>history.push('/find-country')}>Find Countries</button>

                                   </div>

                                    
                                    </div>
                               

                                </>
                            )
                        }
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
