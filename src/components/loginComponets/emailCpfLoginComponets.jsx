import { FaUser } from "react-icons/fa6";
import { EmailCpf, IconeEmailCpf, InputEmailCpf } from "../../assets/styled/loginStyled";
import { formatCpf } from "../../utils/formatCpf";


export function EmailCpfLoginComponets( {cpfEmail, setCpfEmail }) {

    return (
        <EmailCpf>
            <IconeEmailCpf>
                <FaUser />
            </IconeEmailCpf>
            <InputEmailCpf
                type="text"
                placeholder="Digite seu email ou CPF"
                value={cpfEmail}
                onChange={(e) => setCpfEmail(formatCpf(e.target.value))}
            />
        </EmailCpf>
    )
};