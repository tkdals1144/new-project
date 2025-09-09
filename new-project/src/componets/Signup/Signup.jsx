import axios from 'axios';
import React, { useState } from 'react'
import { Link } from "react-router-dom"
import styles from './Signup.module.css'

function Signup( {setUser} ) {

  const [data, setData] = useState({
    last_name : "",
    first_name : "",
    email : "",
    phone : "",
    birth : "",
    address : "",
    zip_code : "",
    detail : "",
    password : "",
    checkPw : "",
    pccc : ""
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const {name, value} = e.target;
    // ...prev를 통해 기존의 값 전개
    // 두번째 인자로 중복값을 넣음으로써 해당 값으로 업데이트 ([name] : value)
    setData((prev) => ({ ...prev, [name] : value }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("/signup", data)
      if (res.data.sucess) {
        setUser(res.data.username);
      } else {
        setError(res.data.message);
      }
    } catch(err) {
      setError("서버 오류");
    }
  }

  return (
    <div className={styles.main_wrap}>
            <main>
        <Link to='/main'>
            <h1>CALTIZM</h1>
        </Link>
        <form onSubmit={handleSubmit}>
            <div id={styles.margin_box}></div>
            <span className={styles.title}>필수입력</span><br/>
            <div id={styles.signUp_box}>
                <div className={styles.bigbox}>
                    <div id={styles.name_box} className={styles.box}>
                        <input type="text" name="last_name" id={styles.last_name} className={styles.input} onChange={handleChange} placeholder="성" required/>
                        <input type="text" name="first_name" id={styles.first_name} className={styles.input} onChange={handleChange} placeholder="이름" required/>
                    </div>
                    <div id={styles.email_box} className={styles.box}>
                        <input type="text" name="email" id={styles.email} className={styles.input} onChange={handleChange} placeholder="이메일을 입력해주세요" required/>
                    </div>
                    <div id={styles.phone_box} className={styles.box}>
                        <input type="text" name="phone_number" id={styles.phone} className={styles.input} onChange={handleChange} placeholder="- 없이 전화번호를 입력해주세요" required/>
                    </div>
                    <div id={styles.birth_box} className={styles.box}>
                        <input type="date" name="birth_date" id={styles.birth} className={styles.input} onChange={handleChange} min="1925-01-01" max="2006-12-31" placeholder="생년월일을 8자로 적어주세요" required/>
                    </div>
                </div>
                <div className={`${styles.bigbox} ${styles.address_bigbox}`} id={styles.address_box_box}>
                    <div id={styles.address_box} className={styles.box} onclick="execDaumPostcode(event)">
                        <p className={`${styles.input} ${styles.addressEnglishText}`}>영문주소</p>
                        <input type="text" name="address" className={styles.addressEnglish} onChange={handleChange} style={{display: "none"}}/>
                    </div>
                    <div id={styles.postcode_box} className={styles.box} onclick="execDaumPostcode(event)">
                        <p className={`${styles.input} ${styles.postcodeText}`}>우편번호</p>
                        <input type="text" name="zip_code" className={styles.postcode} onChange={handleChange} style={{display: "none"}}/>
                    </div>
                    <div id={styles.detailed_address_box} className={styles.box}>
                        <input type="text" name="detail" className={`${styles.input} ${styles.detailAddress}`} onChange={handleChange} placeholder="상세주소를 입력해주세요" required/>
                    </div>
                </div>
                <div id={styles.plus_btn}>
                    <img src="/plus.svg" alt=""/>
                </div>
                <div className={styles.bigbox}>
                    <div id={styles.passwd_box} className={styles.box}>
                        <input type="password" name="password" id={styles.passwd} className={styles.input} onChange={handleChange} placeholder="비밀번호를 입력해주세요" required/>
                        <input type="password" name="checkPw" id={styles.passwd_check} className={styles.input} onChange={handleChange} placeholder="비밀번호 확인" required/>
                    </div>
                </div>
            </div>
            <p className={styles.title} id={styles.title2}>선택입력</p>
            <div className={styles.bigbox} id={styles.boxbox}>
                <div id={styles.pcc_box} className={styles.box}>
                    <input type="text" name="pccc" id={styles.pcc} className={styles.input} onChange={handleChange} placeholder="개인통관고유번호"/>
                </div>
            </div>
            <button id={styles.btn} type='submit'>가입</button>
        </form>
    </main>
    </div>
  )
}

export default Signup