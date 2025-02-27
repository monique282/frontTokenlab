import { FaEye, FaEyeSlash } from "react-icons/fa";
import { GiPadlock } from "react-icons/gi";
import { IconePassword, InputPassword, PassWord } from "../../assets/styled/registerStyled";

export function ConfirmPasswordComponets({ confirmPassword, setConfirmPassword, showConfirmPassword, setShowConfirmPassword }) {

    function toggleConfirmPasswordVisibility() {
        setShowConfirmPassword(!showConfirmPassword);
    };

    return (
        <PassWord>
            <IconePassword>
                <GiPadlock />
            </IconePassword>
            <InputPassword
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirme a senha a senha"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button type="button" onClick={toggleConfirmPasswordVisibility} style={{ background: 'none', border: 'none' }}>
                {showConfirmPassword ? <FaEye style={{ fontSize: "30px", color: "#E837AB" }} /> : <FaEyeSlash style={{ fontSize: "30px", color: "#E837AB" }} />}
            </button>
        </PassWord>
    );
};
