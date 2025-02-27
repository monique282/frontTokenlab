import { MdEmail } from "react-icons/md";
import { IconeEmail, InputEmail, InputInformation, } from "../../assets/styled/registerStyled";

export function EmailComponets({email, setEmail}) {

    return (
        <InputInformation>
            <IconeEmail>
                <MdEmail />
            </IconeEmail>
            <InputEmail
                type="text"
                placeholder="Digite seu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
        </InputInformation>
    );
};

