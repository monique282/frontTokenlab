import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { All, Conteiner } from '../assets/styled/loginStyled';
import { EmailCpfLoginComponets } from '../components/loginComponets/emailCpfLoginComponets';
import { PasswordComponets } from '../components/loginComponets/passwordComponets';
import { SaveResgisterComponets } from '../components/loginComponets/saveResgisterComponets';
import { OkComponets } from '../components/loginComponets/OkComponets';

export default function Login() {
    const [cpfEmail, setCpfEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false)

    useEffect(() => {
        const token = localStorage.getItem('authToken');
        if (token) {
            try {
                const decodedToken = JSON.parse(atob(token.split('.')[1]));
                const isTokenExpired = decodedToken.exp * 1000 < Date.now();
                if (isTokenExpired) {
                    alert('Sessão expirada, faça login novamente.');
                    localStorage.removeItem('authToken');
                    navigate('/');
                } else {
                    navigate('/home');
                }
            } catch (error) {
                console.error('Erro ao decodificar token:', error);
                localStorage.removeItem('authToken');
            }
        }
    }, [navigate]);

    return (
        <All>
            <Conteiner>
                < EmailCpfLoginComponets cpfEmail={cpfEmail} setCpfEmail={setCpfEmail} />
                < PasswordComponets password={password} setPassword={setPassword} showPassword={showPassword} setShowPassword={setShowPassword} />
                <SaveResgisterComponets />
                <OkComponets cpfEmail={cpfEmail} password={password} />
            </Conteiner>
        </All >
    );
};
