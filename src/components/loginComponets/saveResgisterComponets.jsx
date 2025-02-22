import { Link } from 'react-router-dom';
import { RegisterLink, SaveRegister } from '../../assets/styled/loginStyled';

export function SaveResgisterComponets() {

    return (
        <SaveRegister>
            <RegisterLink>
                <Link to="/register" style={{color: 'black', fontSize: '30px', marginRight: '10px' }}>
                    Cadastre-se
                </Link>
            </RegisterLink>
        </SaveRegister>
    )
}