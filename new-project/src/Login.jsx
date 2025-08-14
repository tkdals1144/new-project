import { useState } from "react";
import { axios } from "axios";


function Login({ setUser }) {

    const [error, setError] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        // form 태그의 폼 전송 기능 차단
        e.preventDefault();

        // react의 강점인 SPA 방식을 살리기 위해선 JSON 비동기 방식으로 로그인을 처리해야 한다.
        // 기존에는 form을 전송하고 Controller에서 폼을 보내주는 방식을 사용했기에 @Controller 를 사용했다.
        // 추후 Spring단의 코드를 개편할때는 뷰 렌더링 기능은 뺄 테니 JSON 응답에 특화된 @RestController로 변경하면 될 듯 하다.

        try {
            const res = await axios.post("/login", { email, password });
            if (res.data.success) {
              setUser(res.data.username); // 로그인 성공 → App 상태 갱신
            } else {
              setError(res.data.message);
            }
          } catch (err) {
            setError("로그인 서버 오류");
            console.error(err);
          }
    }
    
    return (
        // <main>
        //     <a th:href="@{/main}">
        //         <h1>CALTIZM</h1>
        //     </a>
        //     <p id="title">로그인</p>
        //     <form th:action="@{/login}" method="post">
        //         <div id="login_box">
        //             <input type="text" id="email" name="email" placeholder="이메일주소를 입력해주세요">
        //             <input type="password" id="passwd" name="password" placeholder="비밀번호를 입력해주세요">
        //             <button id="login_btn">로그인</button>
        //         </div>
        //     </form>
        //     <div id="anchor_box">
        //         <a th:href="@{/signup}" id="sign_up">회원가입</a>
        //         <a th:href="@{/find-password}" id="find_passwd">비밀번호를 잊으셨나요?</a>
        //     </div>
        // </main>
        <main>
            {/* a태그 대신 Link 태그를 이용해서 이동 */}
            <Link to="/main">
                <h1>CALTIZM</h1>
            </Link>
            <p id="title">로그인</p>
            {/* form태그는 동일하게 사용한다. 다만 페이지 리로드 + 서버 전송 방식으로 사용하지 않는다. onSubmit 핸들러를 이용한다. */}
            <form onSubmit={handleSubmit}>
                <div id="login_box">
                    <input type="text" id="email" name="email" placeholder="이메일주소를 입력해주세요" value={email} onChange={
                        (e) => setEmail(e.target.value)
                    }/>
                    <input type="password" id="passwd" name="password" placeholder="비밀번호를 입력해주세요" value={password} onChange={
                        (e) => setPassword(e.target.value)
                    }/>
                    <button id="login_btn" type="submit">로그인</button>
                </div>
            </form>
            <div id="anchor_box">
                <Link to="/signup" id="sign_up">회원가입</Link>
                <Link to="/find-password" id="find_passwd">비밀번호를 잊으셨나요?</Link>
            </div>
        </main>
    )
}

export default Login