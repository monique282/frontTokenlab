import { useState } from "react";
import { All, Conteiner } from "../assets/styled/registerStyled";
import { NameComponets } from "../components/registerComponets/NameComponets";
import { EmailComponets } from "../components/registerComponets/EmailComponets";
import { CpfComponets } from "../components/registerComponets/CpfComponets";

export default function Register() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [cpf, setCpf] = useState("")


    return (
        <All>
            <Conteiner>
                <NameComponets name={name} setName={setName} />
                <EmailComponets  email={email} setEmail={setEmail} />
                <CpfComponets cpf={cpf} setCpf={setCpf} />
            </Conteiner>
        </All >
    );
}
