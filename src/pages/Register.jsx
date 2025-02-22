import { useState } from "react";
import { All, Conteiner } from "../assets/styled/registerStyled";
import { NameComponets } from "../components/registerComponets/NameComponets";

export default function Register() {
    const [name, setName] = useState("")


    return (
        <All>
            <Conteiner>
                <NameComponets name={name} setName={setName} />
            </Conteiner>
        </All >
    );
}
