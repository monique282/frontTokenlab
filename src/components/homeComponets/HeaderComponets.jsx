import "dayjs/locale/pt-br";
import { Button, Header } from "../../assets/styled/homeStyled";

export function HeaderComponets({ setCurrentDate, currentDate }){

    return(
        <Header>
            <Button onClick={() => setCurrentDate(currentDate.subtract(1, "month"))}>◀</Button>
            <h2>{currentDate.format("MMMM YYYY")}</h2>
            <Button onClick={() => setCurrentDate(currentDate.add(1, "month"))}>▶</Button>
        </Header>
    )
}