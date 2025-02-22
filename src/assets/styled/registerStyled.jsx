import styled from "styled-components";

export const All = styled.div`
  background-color: #e30de36d;
  color: aliceblue;
  width: 100vw;  
  height: 100vh; 
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Conteiner = styled.div`
  background-color: rgba(8, 34, 234, 0.358);
  color: aliceblue;
  width: 90vw;  
  height: 80vh; 
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 10px;
  flex-direction: column;
`;

export const InputInformation = styled.div`
  background-color: rgba(255, 255, 255, 0.5);
  width: 85vw;  
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

export const IconeName = styled.div`
  width: 8vw;  
  height: 8vh;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  svg {
    color: #e30de3; 
    font-size: 3rem; 
  }
`;

export const InputName = styled.input`
  background-color: rgba(255, 255, 255, 0.0);
  width: 70vw;  
  height: 8vh; 
  padding: 10px; 
  border: 1px solid #ccc; 
  border-radius: 4px; 
  font-size: 25px; 
  outline: none; 
  box-sizing: border-box; 
`;
