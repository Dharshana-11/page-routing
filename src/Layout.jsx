import React from 'react'
import Main from './Main'
import { useNavigate } from 'react-router-dom'

const Layout = ({ children }) => {
    const openMenu = () => {
        document.getElementById("menu_id").style.display = "block";
        document.getElementById("menu_id").style.width = "200px";
        document.getElementById("menu_close").style.display = "none";
    }
    function closeMenu() {
        document.getElementById("menu_id").style.width = "0px";
        document.getElementById("menu_id").style.display = "none";
        document.getElementById("menu_close").style.display = "block";
    }
    const navigate = useNavigate();
    const handleMenu = () => {
        navigate("/students")
    }
    return (
        <div className="entire">
            <header className="header">
                <span id="menu_close" className="menu-toggle" onClick={openMenu}>&#9776; Menu</span>
                <h4 className="title">ABC College</h4>
            </header>
            <div className="menu_class" id="menu_id">
                <a href="javascript:void(0)" className="close" onClick={closeMenu}>&times;</a>
                <a className="menu_link" style={{cursor:"pointer"}} onClick={handleMenu}>Student Record</a><br/>
                <a href="#">Departments</a><br/>
                <a href="#">Course</a><br/>
                <a href="#">Examinations</a><br/>
                <a href="#">Attendance</a><br/>
                <a href="#">Fees Management</a><br/>
                <a href="#">Settings</a><br/>
                <a href="#">Help</a><br/>
                <a href="#">Log Out</a><br/>
            </div>
            <main className="content">
                {children}
            </main>
            <footer className="footer">
                <h6>ABC College</h6>
                <p><i>Empowering Students since 1960</i></p>
                <p>Contact us: +91 9087658486 || <a href="mailto:abc_college@gmail.com" style={{color:"grey"}}> abc_college@gmail.com</a>
                </p>
            </footer>
        </div>
    );
}

export default Layout