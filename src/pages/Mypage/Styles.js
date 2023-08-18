/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const SLayout = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin: 50px auto;
    border: 1px solid #486EAE;
    border-radius: 20px;
    padding: 20px;
    width: 700px;
    height: 700px;
    background-color: #F7FEFF;
`;

export const SContainer = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin: 20px 0px;
`;

export const SProfileContainer = css`
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: left;

    margin: 20px 0px;
`;

export const SProfileImgBox = css`
    display: flex;
    justify-content: center;
    align-items: center;

    border: 1px solid #486EAE;
    border-radius: 50%;
    width: 300px;
    height: 300px;
    overflow: hidden;
    cursor: pointer;
`;

export const SProfileImg = css`
    width: 100%;
    height: 100%;
`;

export const SFileHidden = css`
    display: none;
`;

export const SLabel = css `
    color: #004BA4;
    font-size: 20px;
    margin-top: 5px;
    
`;

export const SInput = css`
    margin: 10px 0;
    width: 100%;
    border: 1px solid #486EAE;
    border-radius: 20px;
    width: 100%;
    height: 25px;
    
`;

export const SButton = css`
    margin: 10px 0;
    width: 100%;
    border: 1px solid #486EAE;
    border-radius: 20px;
    color: #ffffff;
    width: 100%;
    height: 35px;
    background-color: #097989;
    
`;



