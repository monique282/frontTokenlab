import { useState } from "react";
import { All, Conteiner } from "../assets/styled/registerStyled";
import { NameComponets } from "../components/registerComponets/NameComponets";
import { EmailComponets } from "../components/registerComponets/EmailComponets";

export default function Register() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    return (
        <All>
            <Conteiner>
                <NameComponets name={name} setName={setName} />
                <EmailComponets  email={email} setEmail={setEmail} />
            </Conteiner>
        </All >
    );
}
