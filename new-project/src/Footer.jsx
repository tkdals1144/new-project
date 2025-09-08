import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer>
        <div className="footer_box">
            <div className="footer_ul_wrap">
                <ul className="footer_list_wrap">
                    <li className="footer_list footer_link" id="footer_info">
                        <img src="/footer_info.svg" alt="" className="footer_icon"/>
                        <p className="footer_paragraph">About Us</p>
                        <Link id="footer_info_anchor" to="/info"></Link>
                    </li>
                    <li className="footer_list footer_link" id="footer_git">
                        <img src="/footer_git.svg" alt="" className="footer_icon"/>
                        <p className="footer_paragraph">GitHub</p>
                        <Link id="footer_git_anchor" to="https://github.com/Sbh-Acorn/Final-Project"></Link>
                    </li>
                </ul>
                <ul className="footer_list_wrap">
                    <li className="footer_list">
                        <img src="/footer_phone.svg" alt="" className="footer_icon"/>
                        <p className="footer_paragraph">010-3016-7609</p>
                    </li>
                    <li className="footer_list">
                        <img src="/footer_mail.svg" alt="" className="footer_icon"/>
                        <p className="footer_paragraph">abcde@gmail.com</p>
                    </li>
                    <li className="footer_list">
                        <img src="/footer_talk.svg" alt="" className="footer_icon"/>
                        <p className="footer_paragraph">TwT</p>
                    </li>
                </ul>
            </div>
            <Link to="https://www.cultizm.com/">
                <div className="footer_box2">
                    <h2>Visit the page for more details</h2>
                    <div className="footer_box2_btn">
                        <p>go cultizm</p>
                    </div>
                </div>
            </Link>
        </div>
    </footer>
  )
}

export default Footer