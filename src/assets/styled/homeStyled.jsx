import styled from "styled-components";

export const All = styled.div`
  background-color: #e30de36d;
  color: #050505;
  width: 100vw;  
  height: 100vh; 
 display: flex;
 justify-content: center;
 align-items: center;
`;

export const CalendarContainer = styled.div`
  margin: auto;
  padding: 16px;
  background-color: rgba(8, 34, 234, 0.358);
  width: 90vw;  
  height: 80vh;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

export const Button = styled.button`
  padding: 8px;
  background: #ddd;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const Grid = styled.div`
  width: 100%;  
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  text-align: center;
  font-weight: bold;
  margin-bottom: 50px;
  margin-top: 50px;
`;

export const Day = styled.div`
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin: 5px;
  background: ${(props) => (props.isToday ? "#e30de3" : "#f0f0f0")};
  color: ${(props) => (props.isToday ? "white" : "black")};
  ${(props) => props.isToday && "pointer-events: none;"}
`;