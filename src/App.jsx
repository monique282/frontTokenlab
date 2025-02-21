import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login.jsx";
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