/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useRef, useState } from 'react';
import * as S from './Styles.js';


function Mypage(props) {
    const defaultProfileImgSrc = "https://static.vecteezy.com/system/resources/previews/001/840/618/original/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg";

    const profileImgSrc = localStorage.getItem("profileImg");

    const [ profileImg, setProfileImg ] = useState(!!profileImgSrc ? profileImgSrc 
        : defaultProfileImgSrc);
    
        const profileFileInput = useRef(); // 쿼리셀렉터 대신 객체 선택할 때 사용

        const localStorageUser = JSON.parse(localStorage.getItem("user"));

    let user = {
        username: localStorageUser?.username && localStorageUser.username,
        name: localStorageUser?.name && localStorageUser.name,
        email: localStorageUser?.email && localStorageUser.email
    }

    const handleProfileImgChangeClick = () => {
        profileFileInput.current.click(); 
    }

    const handleProfileImgSelect = (e) => {
        console.log(e)
        const reader = new FileReader();

        reader.onload = (e) => {
            setProfileImg(e.target.result);
        }
    
        reader.readAsDataURL(e.target.files[0]);
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        user = {
            ...user,
            [name]: value
        }
    }

    const handleSaveClick = () => {
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("profileImg", profileImg);
    }

    return (
        <div css={S.SLayout}>
            <div css={S.SContainer}>
                <div css={S.SProfileImgBox} onClick={handleProfileImgChangeClick}>

                    <img css={S.SProfileImg} src={profileImg} />

                    <input css={S.SFileHidden} type="file" ref={profileFileInput} onChange={handleProfileImgSelect}/> 
                    {/* ref 사용해서 객체를 가져옴 */}
                </div>
            </div>
            <div css={S.SProfileContainer}>
                <div>
                    <label css={S.SLabel} htmlFor="username">사용자명 </label>
                    <input css={S.SInput} type="text" id='username' name="username" onChange={handleInputChange}  defaultValue={user.username} />
                </div>
                <div>
                    <label css={S.SLabel} htmlFor="name">이름 </label>
                    <input css={S.SInput} type="text" id='name'name="name" onChange={handleInputChange} defaultValue={user.name} />
                </div>
                <div>
                    <label css={S.SLabel} htmlFor="email">이메일 </label>
                    <input css={S.SInput} type="text" id='email' name="email" onChange={handleInputChange} defaultValue={user.email} />
                </div>
                <div>
                    <button css={S.SButton} onClick={handleSaveClick}>저장</button>
                </div>
            </div>
        </div>
    );
}

export default Mypage;