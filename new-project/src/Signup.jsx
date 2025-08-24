import axios from 'axios';
import React, { useState } from 'react'
import { Link } from "react-router-dom"

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
    // <main>
    //     <a th:href="@{/main}">
    //         <h1>CALTIZM</h1>
    //     </a>
    //     <form th:action="@{/signup}" method="post" onsubmit="return validateForm()">
    //         <div id="margin_box"></div>
    //         <span class="title">필수입력</span><br>
    //         <div id="signUp_box">
    //             <div class="bigbox">
    //                 <div id="name_box" class="box">
    //                     <input type="text" name="last_name" id="last_name" class="input" placeholder="성" required>
    //                     <input type="text" name="first_name" id="first_name" class="input" placeholder="이름" required>
    //                 </div>
    //                 <div id="email_box" class="box">
    //                     <input type="text" name="email" id="email" class="input" placeholder="이메일을 입력해주세요" required>
    //                 </div>
    //                 <div id="phone_box" class="box">
    //                     <input type="text" name="phone_number" id="phone" class="input" placeholder="- 없이 전화번호를 입력해주세요" required>
    //                 </div>
    //                 <div id="birth_box" class="box">
    //                     <input type="date" name="birth_date" id="birth" class="input" min="1925-01-01" max="2006-12-31" placeholder="생년월일을 8자로 적어주세요" required>
    //                 </div>
    //             </div>
    //             <div class="bigbox address_bigbox" id="address_box_box">
    //                 <div id="address_box" class="box" onclick="execDaumPostcode(event)">
    //                     <p class="input addressEnglishText">영문주소</p>
    //                     <input type="text" name="address" class="addressEnglish" style="display: none;">
    //                 </div>
    //                 <div id="postcode_box" class="box" onclick="execDaumPostcode(event)">
    //                     <p class="input postcodeText">우편번호</p>
    //                     <input type="text" name="zip_code" class="postcode" style="display: none;">
    //                 </div>
    //                 <div id="detailed_address_box" class="box">
    //                     <input type="text" name="detail" class="input detailAddress" placeholder="상세주소를 입력해주세요" required>
    //                 </div>
    //             </div>
    //             <div id="plus_btn">
    //                 <img th:src="@{/img/plus.svg}" alt="">
    //             </div>
    //             <div class="bigbox">
    //                 <div id="passwd_box" class="box">
    //                     <input type="password" name="password" id="passwd" class="input" placeholder="비밀번호를 입력해주세요" required>
    //                     <input type="password" name="checkPw" id="passwd_check" class="input" placeholder="비밀번호 확인" required>
    //                 </div>
    //             </div>
    //         </div>
    //         <p class="title" id="title2">선택입력</p>
    //         <div class="bigbox" id="boxbox">
    //             <div id="pcc_box" class="box">
    //                 <input type="text" name="pccc" id="pcc" class="input" placeholder="개인통관고유번호">
    //             </div>
    //         </div>
    //         <button id="btn">가입</button>
    //     </form>
    // </main>
      <main>
        <Link to='/main'>
            <h1>CALTIZM</h1>
        </Link>
        <form onSubmit={handleSubmit}>
            <div id="margin_box"></div>
            <span class="title">필수입력</span><br/>
            <div id="signUp_box">
                <div class="bigbox">
                    <div id="name_box" class="box">
                        <input type="text" name="last_name" id="last_name" class="input" onChange={handleChange} placeholder="성" required/>
                        <input type="text" name="first_name" id="first_name" class="input" onChange={handleChange} placeholder="이름" required/>
                    </div>
                    <div id="email_box" class="box">
                        <input type="text" name="email" id="email" class="input" onChange={handleChange} placeholder="이메일을 입력해주세요" required/>
                    </div>
                    <div id="phone_box" class="box">
                        <input type="text" name="phone_number" id="phone" class="input" onChange={handleChange} placeholder="- 없이 전화번호를 입력해주세요" required/>
                    </div>
                    <div id="birth_box" class="box">
                        <input type="date" name="birth_date" id="birth" class="input" onChange={handleChange} min="1925-01-01" max="2006-12-31" placeholder="생년월일을 8자로 적어주세요" required/>
                    </div>
                </div>
                <div class="bigbox address_bigbox" id="address_box_box">
                    <div id="address_box" class="box" onclick="execDaumPostcode(event)">
                        <p class="input addressEnglishText">영문주소</p>
                        <input type="text" name="address" class="addressEnglish" onChange={handleChange} style="display: none;"/>
                    </div>
                    <div id="postcode_box" class="box" onclick="execDaumPostcode(event)">
                        <p class="input postcodeText">우편번호</p>
                        <input type="text" name="zip_code" class="postcode" onChange={handleChange} style="display: none;"/>
                    </div>
                    <div id="detailed_address_box" class="box">
                        <input type="text" name="detail" class="input detailAddress" onChange={handleChange} placeholder="상세주소를 입력해주세요" required/>
                    </div>
                </div>
                <div id="plus_btn">
                    <img th:src="@{/img/plus.svg}" alt=""/>
                </div>
                <div class="bigbox">
                    <div id="passwd_box" class="box">
                        <input type="password" name="password" id="passwd" class="input" onChange={handleChange} placeholder="비밀번호를 입력해주세요" required/>
                        <input type="password" name="checkPw" id="passwd_check" class="input" onChange={handleChange} placeholder="비밀번호 확인" required/>
                    </div>
                </div>
            </div>
            <p class="title" id="title2">선택입력</p>
            <div class="bigbox" id="boxbox">
                <div id="pcc_box" class="box">
                    <input type="text" name="pccc" id="pcc" class="input" onChange={handleChange} placeholder="개인통관고유번호"/>
                </div>
            </div>
            <button id="btn" type='submit'>가입</button>
        </form>
    </main>
  )
}

export default Signup