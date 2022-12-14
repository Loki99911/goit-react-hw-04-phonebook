import styled from 'styled-components';

export const FormBlock = styled.form`
  display: flex;
  flex-direction: column;
  width: 30%;
  margin-top: 30px;
`;

export const FormTitle = styled.label`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const FormInput = styled.input`
  margin-left: 20px;
  height: 25px;
  width: 100%;
`;

export const FormBtn = styled.button`
  width: 150px;
  height: 30px;
  border-radius: 5px;
  border: 2px solid #000000;
  margin: 0 auto;
  margin-top: 15px;
  margin-bottom: 30px;
  :hover {
    color: green;
    border-color: green;
  }
`;
