import { Link } from 'react-router-dom';
import { Register, SaveRegister } from '../../assets/styled/loginStyled';

export function SaveResgisterComponets() {

    return (
        <SaveRegister>
            <Register>
                <Link to="/register" style={{color: 'black', fontSize: '30px', marginRight: '10px' }}>
                    Cadastre-se
                </Link>
            </Register>
        </SaveRegister>
    )
}