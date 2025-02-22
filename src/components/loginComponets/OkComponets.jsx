import { useContext } from "react";
import axios from 'axios';
import { Ok } from "../../assets/styled/loginStyled";
import { AuthContext } from "../../contexts/contex";
import { useNavigate } from "react-router-dom";

export function OkComponets({cpfEmail, password }) {

    const { setAuthToken } = useContext(AuthContext);
    const navigate = useNavigate();


    function LoginPost() {
        const urlCode = `${import.meta.env.VITE_API_URL}/login`;
        const data = {
            mode: cpfEmail,
            password
        };
        axios.post(urlCode, data)
            .then((response) => {
                const token = response.data[1].token;
                setAuthToken(token)
                if (token) {
                    localStorage.setItem('authToken', token);
                    navigate("/home");
                }
            })
            .catch((err) => {
                console.error('Erro na requisição:', err.response?.data || err.message);
            });
    }

    const isButtonDisabled = !(cpfEmail && password)

    return (
        <Ok
            type="button"
            onClick={LoginPost}
            style={{
                backgroundColor: isButtonDisabled ? 'rgba(255, 255, 255, 0.5)' : '#E837AB',
                cursor: isButtonDisabled ? 'not-allowed' : 'pointer'
            }}
            disabled={isButtonDisabled}
        >
            Login
        </Ok>
    )
}