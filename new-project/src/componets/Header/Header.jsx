import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'

function Header() {

    // 일단 null로 처리해두고 나중에 추가하도록 하자!
    const [email, setEmail] = useState(null);
    return (
    <>
        <header>
            <div id={styles.logo_wrap}>
                <Link to="/main">
                    <h1 id={styles.logo}>CALTIZM</h1>
                </Link>
            </div>
            <div id={styles.wrap_wrap}>
                <div id={styles.wrap1}>
                    <div id={styles.header_input_wrap}>
                        <input type="text" id={styles.header_input} placeholder="상품명을 입력하세요" autoComplete="off"/>
                        <img src="/header_search.svg" alt="" id={styles.header_search}/>
                    </div>
                    <div id={styles.header_icon_wrap}>
                        <div id={styles.wishlist_small_icon} className={styles.small_icon_wrap}>
                            <span id={styles.wishlist_size} className={styles.small_txt}></span>
                        </div>
                        <Link to="/wishlist">
                            <img src="/header_wishlist.svg" alt="Wishlist" id={styles.header_wishlist} className={styles.header_icon}/>
                        </Link>
                        {/* <!-- 알림 아이콘 --> */}
                        <div id={styles.alarm_small_icon} className={styles.small_icon_wrap}>
                            <img src="/dot.svg" alt="" className={styles.small_icon}/>
                        </div>
                        <img src="/header_alarm.svg" alt="" id={styles.header_alarm} className={styles.header_icon}/>
                        <ul id={styles.header_alarm_dropdown}>
                        </ul>

                        {/* <!-- 프로필 아이콘 --> */}
                        <img src="/header_profile.svg" alt="" id={styles.header_profile} className={styles.header_icon}/>

                        {/* <!-- 로그인/회원가입 메뉴 --> */}
                        {/* session.email은 어떤식으로 가져올지에 대해 생각을 해봐야 할듯함 */}
                        {/* th:if 문은 react의 jsx내 js 3항연산자를 이용해 처리 */}
                        {email ? 
                            <ul id={styles.header_profile_dropdown2} className={styles.dropdown}>
                                <li className={styles.header_profile_dropdown_list}>
                                    <Link to="/logout">로그아웃</Link>
                                </li>
                                <li className={styles.header_profile_dropdown_list}>
                                    <Link to="/myPage">마이페이지</Link>
                                </li>
                            </ul> :
                            <ul id={styles.header_profile_dropdown} className={styles.dropdown}>
                                <li className={styles.header_profile_dropdown_list}>
                                    <Link to="/login">로그인</Link>
                                </li>
                                <li className={styles.header_profile_dropdown_list}>
                                    <Link to="/signup">회원가입</Link>
                                </li>
                            </ul>
                        }

                        {/* <!-- 장바구니 아이콘 -->
                        <!-- 장바구니 아이콘 --> */}
                        <Link to="/cart/view">
                            <img src="/header_bucket.svg" alt="" id={styles.header_bucket} className={styles.header_icon}/>
                            <span id={styles.cart_quantity} className={styles.cart_quantity} style={{ display: "none" }}>0</span>
                        </Link>

                    </div>
                </div>
                <div id={styles.wrap2}>
                    <ul id={styles.header_nav}>
                        <li id={styles.header_all} className={styles.header_list}>ALL</li>
                        <li id={styles.header_brand} className={styles.header_list}>BRAND</li>
                        <li id={styles.header_fta} className={styles.header_list}>FTA</li>
                        <li id={styles.header_tax} className={styles.header_list}>LOW PRICE</li>
                        <li id={styles.header_community} className={styles.header_list}>COMMUNITY</li>
                    </ul>
                    <Link id={styles.all_anchor} to="/product"></Link>
                    <Link id={styles.brand_anchor} to="/brand"></Link>
                    <Link id={styles.fta_anchor} to="/fta-product"></Link>
                    <Link id={styles.tax_anchor} to="/not-tax-product"></Link>
                    <Link id={styles.community_anchor} to="/boardAll"></Link>
                </div>
            </div>
        </header>
    </>
  )
}

export default Header