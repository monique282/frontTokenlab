import { useState } from "react";
import { All, Conteiner } from "../assets/styled/registerStyled";
import { NameComponets } from "../components/registerComponets/NameComponets";
import { EmailComponets } from "../components/registerComponets/EmailComponets";
import { CpfComponets } from "../components/registerComponets/CpfComponets";
import { PasswordComponets } from "../components/registerComponets/PasswordComponets";

export default function Register() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [cpf, setCpf] = useState("")
    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false);

    return (
        <All>
            <Conteiner>
                <NameComponets name={name} setName={setName} />
                <EmailComponets  email={email} setEmail={setEmail} />
                <CpfComponets cpf={cpf} setCpf={setCpf} />
                <PasswordComponets password={password} setPassword={setPassword} setShowPassword={setShowPassword} showPassword={showPassword} />
            </Conteiner>
        </All >
    );
}
