import React, { useEffect, useState } from 'react'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import { Link } from 'react-router-dom'
import axios from 'axios';

function MainPage() {

    const [images, setImages] = useState([]);

    // 두번째 인자에 [] 를 두어 컴포넌트가 처음 마운트될 때 한번만 실행
    useEffect(() => {
        const fetchBanners = async () => {
            try {
                // 배너 이미지 호출
                const res = await axios.get("/api/banner");
                setImages(res.data);
            } catch (err) {
                console.error("배너 이미지 로드 실패 : ", err);
            }
        };
        fetchBanners();
    }, []);

    return (
    <>
        <Header/>
        <main>
            <div id="banner_wrap">
                <div id="prev_btn_wrap" className="btn_wrap" onClick={handlePrev}>
                    <img src="/prev.svg" alt="" className="btn"/>
                </div>
                <div id="next_btn_wrap" className="btn_wrap" onClick={handleNext}>
                    <img src="/next.svg" alt="" className="btn"/>
                </div>
                <ul id="banner">
                    {
                        images.map((bi, index) => (
                            <li key={index} className='banner_img_wrap'>
                                <Link to="/promotion" target='_blank' rel='noreferrer'>
                                    <img src={bi} alt={`Banner ${index + 1}`} className='banner_img'/>
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </main>
        <Footer/>
    </>
    )
}

export default MainPage