import TestBox from "./components/TestBox/TestBox";
import TestBox2 from "./components/TestBox2/TestBox2";

function App() {
  return (
    <>
      <h1>test</h1>
      
      <TestBox inputTitleName={"username"} testname={"bbb"} isShow> 
        <TestBox2 /> 
      </TestBox>

      <TestBox inputTitleName={"password"} isShow={false}>
        <TestBox2 /> 
      </TestBox>
    </>
  );
}

export default App;
