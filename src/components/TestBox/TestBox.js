import React from 'react'; // Reactjs code snippets 를 깔면 rsf enter를 쳤을때  react 기본형식이 자동완성 됨

function TestBox({ inputTitleName, isShow, children}) {
    const obj = {
        testName: "aaa",
        myname: "김준일"
    }
    
    // const { testName, myname } = obj;
    // console.log(testName);
    // console.log(myname);
    // console.log(inputTitleName);
    // console.log(testName);

    return (
        // 프래그먼트
        <>
            <div>
                <label>{inputTitleName}</label>
            </div>
            {isShow && children}
            <div>
                <input type="text" />
            </div>
        </>
    );
}

export default TestBox;