import { FaUser } from "react-icons/fa6";
import { InputInformation, IconeName, InputName } from "../../assets/styled/registerStyled";


export function NameComponets({name, setName}){

    return(
        < InputInformation>
            <IconeName>
                <FaUser />
            </IconeName>
            <InputName
                type="text"
                placeholder="Nome Completo"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
        </InputInformation >
    )
} 
