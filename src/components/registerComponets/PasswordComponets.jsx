import { FaEye, FaEyeSlash } from "react-icons/fa";
import { GiPadlock } from "react-icons/gi";
import { IconePassword, InputPassword, PassWord } from "../../assets/styled/registerStyled";

export function PasswordComponets({ password, setPassword, setShowPassword, showPassword }) {
    
    function togglePasswordVisibility() {
        setShowPassword(!showPassword);
    }

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
    )
}
