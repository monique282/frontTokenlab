import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthProvider from "./contexts/contex.jsx";


function App() {
  return (

    <BrowserRouter>
      <AuthProvider>
        <Routes >
          
          <Route path='/' element={<Login />} />
          

        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;