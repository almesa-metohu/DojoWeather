import React, {useState} from "react";
import Tabs from "./Components/Tabs";
import DisplayTabs from "./Components/DisplayTabs";


function App() {

  const [content, setContent] = useState("")

  return (
    <>
    <Tabs setContent={setContent}/>
    <DisplayTabs content={content}/>
    </>
  );
}
    
export default App;