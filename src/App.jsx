import { Route, Routes } from "react-router-dom";
import Main from "./pages/MainPage"
import NotfoundPage from "./pages/NotfoundPage";


function App(){
  return (
    <>
   
      <Routes>
         <Route path="/" element={<Main />}> </Route>
        <Route path="*" element={<NotfoundPage />} />
      </Routes>
    </>
  );
}

export default App;