import { FaUser } from "react-icons/fa6";
import { IconeCpf, InputCpf, InputInformation } from "../../assets/styled/registerStyled";
import { formatCpf } from "../../utils/formatCpf";


export function CpfComponets({ cpf, setCpf }) {

    return (
        <InputInformation>
            <IconeCpf>
                <FaUser />
            </IconeCpf>
            <InputCpf
                type="text"
                placeholder="Digite seu CPF"
                value={cpf}
                onChange={(e) => {
                    const numericValue = e.target.value.replace(/\D/g, '').slice(0, 11);
                    setCpf(formatCpf(numericValue)); 
                }}
            />
        </InputInformation>
    );
};