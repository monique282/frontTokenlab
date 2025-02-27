import { IconePassword, InputPassword, PassWord } from '../../assets/styled/loginStyled';
import { GiPadlock } from "react-icons/gi";
import { FaEye, FaEyeSlash } from "react-icons/fa";


export function PasswordComponets({ password, setPassword, showPassword, togglePasswordVisibility, setShowPassword }) {

    function togglePasswordVisibility() {
        setShowPassword(!showPassword);
    };

    return (
        <PassWord>
            <IconePassword>
                <GiPadlock />
            </IconePassword>
            <InputPassword
                type={showPassword ? "text" : "password"}
                placeholder="Digite a senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="button" onClick={togglePasswordVisibility} style={{ background: 'none', border: 'none' }}>
                {showPassword ? <FaEye style={{ fontSize: "30px", color: "#E837AB" }} /> : <FaEyeSlash style={{ fontSize: "30px", color: "#E837AB" }} />}
            </button>
        </PassWord>
    );
};