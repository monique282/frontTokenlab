import { useState } from "react";
import { All, Conteiner, Ok } from "../assets/styled/registerStyled";
import { NameComponets } from "../components/registerComponets/NameComponets";
import { EmailComponets } from "../components/registerComponets/EmailComponets";
import { CpfComponets } from "../components/registerComponets/CpfComponets";
import { PasswordComponets } from "../components/registerComponets/PasswordComponets";
import { ConfirmPasswordComponets } from "../components/registerComponets/ConfirmPasswordComponets";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [cpf, setCpf] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const navigate = useNavigate();

    function RegisterPost() {
        if (password !== confirmPassword) {
            window.alert("As senhas não conferem");
        } else {
            const urlCode = `${import.meta.env.VITE_API_URL}/register`;
            const data = {
                name,
                password,
                cpf,
                email,
            };
            const promise = axios.post(urlCode, data);
            promise.then(() => {
                navigate("/");
            });
            promise.catch((err) => {
                console.log(err.response);
                alert(err.response.data)
            });
        };
    };
    const isButtonDisabled = !(cpf && password && name && email && confirmPassword)

    return (
        <All>
            <Conteiner>
                <NameComponets name={name} setName={setName} />
                <EmailComponets email={email} setEmail={setEmail} />
                <CpfComponets cpf={cpf} setCpf={setCpf} />
                <PasswordComponets password={password} setPassword={setPassword} setShowPassword={setShowPassword} showPassword={showPassword} />
                <ConfirmPasswordComponets confirmPassword={confirmPassword} setConfirmPassword={setConfirmPassword} showConfirmPassword={showConfirmPassword} setShowConfirmPassword={setShowConfirmPassword} />
                    <Link to="/" style={{ color: 'black', fontSize: '30px' }}>
                       Login
                    </Link>
                <Ok
                    type="button"
                    onClick={RegisterPost}
                    style={{
                        backgroundColor: isButtonDisabled ? 'rgba(255, 255, 255, 0.5)' : '#E837AB',
                        cursor: isButtonDisabled ? 'not-allowed' : 'pointer'
                    }}
                    disabled={isButtonDisabled}
                >
                    Registre-se
                </Ok>
            </Conteiner>
        </All >
    );
};
