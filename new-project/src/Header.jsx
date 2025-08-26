import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Header() {

    // 일단 null로 처리해두고 나중에 추가하도록 하자!
    const [email, setEmail] = useState(null);
    return (
    <>
        <header>
            <div id="logo_wrap">
                <Link to="/main">
                    <h1 id="logo">CALTIZM</h1>
                </Link>
            </div>
            <div id="wrap_wrap">
                <div id="wrap1">
                    <div id="header_input_wrap">
                        <input type="text" id="header_input" placeholder="상품명을 입력하세요" autocomplete="off"/>
                        <img src="/header_search.svg" alt="" id="header_search"/>
                    </div>
                    <div id="header_icon_wrap">
                        <div id="wishlist_small_icon" className="small_icon_wrap">
                            <span id="wishlist_size" className="small_txt"></span>
                        </div>
                        <Link to="/wishlist">
                            <img src="/header_wishlist.svg" alt="Wishlist" id="header_wishlist" className="header_icon"/>
                        </Link>
                        {/* <!-- 알림 아이콘 --> */}
                        <div id="alarm_small_icon" className="small_icon_wrap">
                            <img src="/dot.svg" alt="" className="small_icon"/>
                        </div>
                        <img src="/header_alarm.svg" alt="" id="header_alarm" className="header_icon"/>
                        <ul id="header_alarm_dropdown">
                        </ul>

                        {/* <!-- 프로필 아이콘 --> */}
                        <img src="/header_profile.svg" alt="" id="header_profile" className="header_icon"/>

                        {/* <!-- 로그인/회원가입 메뉴 --> */}
                        {/* session.email은 어떤식으로 가져올지에 대해 생각을 해봐야 할듯함 */}
                        {/* th:if 문은 react의 jsx내 js 3항연산자를 이용해 처리 */}
                        {email ? 
                            <ul id="header_profile_dropdown2" className="dropdown">
                                <li className="header_profile_dropdown_list">
                                    <a th:href="@{/logout}">로그아웃</a>
                                </li>
                                <li className="header_profile_dropdown_list">
                                    <a th:href="@{/myPage}">마이페이지</a>
                                </li>
                            </ul> :
                            <ul id="header_profile_dropdown" className="dropdown">
                                <li className="header_profile_dropdown_list">
                                    <Link to="/login">로그인</Link>
                                </li>
                                <li className="header_profile_dropdown_list">
                                    <Link to="/signup">회원가입</Link>
                                </li>
                            </ul>
                        }

                        {/* <!-- 장바구니 아이콘 -->
                        <!-- 장바구니 아이콘 --> */}
                        <Link to="/cart/view">
                            <img src="/header_bucket.svg" alt="" id="header_bucket" className="header_icon"/>
                            <span id="cart_quantity" className="cart_quantity" style="display: none;">0</span>
                        </Link>

                    </div>
                </div>
                <div id="wrap2">
                    <ul id="header_nav">
                        <li id="header_all" className="header_list">ALL</li>
                        <li id="header_brand" className="header_list">BRAND</li>
                        <li id="header_fta" className="header_list">FTA</li>
                        <li id="header_tax" className="header_list">LOW PRICE</li>
                        <li id="header_community" className="header_list">COMMUNITY</li>
                    </ul>
                    <Link id="all_anchor" to="/product"></Link>
                    <Link id="brand_anchor" to="/brand"></Link>
                    <Link id="fta_anchor" to="/fta-product"></Link>
                    <Link id="tax_anchor" to="/not-tax-product"></Link>
                    <Link id="community_anchor" to="/boardAll"></Link>
                </div>
            </div>
        </header>
    </>
  )
}

export default Header