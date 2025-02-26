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
  margin-bottom: 40px;
  margin-top: 40px;
`;

export const Day = styled.div`
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin: 5px;
  background: ${(props) => (props.isToday ? "#e30de3" : "#f0f0f0")};
  color: ${(props) => (props.isToday ? "white" : "black")};
  pointer-events: auto;  cursor: pointer;
  position: relative;

  &:hover {
    background: #d1c4e9;
  }

  span {
    font-size: 14px;
    position: absolute;
    bottom: 2px;
    right: 2px;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Modal = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 50vw;
  height: 50vh;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  min-width: 300px;

  textarea {
    width: 98%;
    height: 80%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    resize: none; 
    font-size: 12px;
    line-height: 1.4;
    overflow-y: auto; 
  }

  input {
    width: 98%;
    height: 80%;
    padding: 8px;
    margin: 10px 0;
  }

  div {
    display: flex;
    justify-content: space-around;
  }
`;