import styled from 'styled-components';

export const ItemBlock = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;

export const ItemBtn = styled.button`
  width: 100px;
  height: 30px;
  border-radius: 5px;
  border: 2px solid #000000;
  margin-left: auto;
  :hover{
    color:red;
    border-color:red;
  }
`;
