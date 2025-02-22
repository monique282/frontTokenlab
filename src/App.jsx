import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login.jsx";
import AuthProvider from "./contexts/contex.jsx";
import Register from "./pages/Register.jsx";

function App() {
  return (

    <BrowserRouter>
      <AuthProvider>
        <Routes >
          
          <Route path='/' element={<Login />} />
          <Route path = '/register' element={<Register/>}/>

        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;