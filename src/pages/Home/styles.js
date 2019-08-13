import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: -webkit-fill-available;
`;

export const Nav = styled.div`
  display: flex;
  justify-content: center;

  padding: 10px;

  span {
    font-size: 18px;
    margin-right: 5px;
  }

  input {
    border-bottom-left-radius: 5px;
    border-top-left-radius: 5px;
    height: 30px;
    padding: 5px;
  }

  button {
    border-bottom-right-radius: 5px;
    border-top-right-radius: 5px;
    padding: 5px;
  }
`;

export const Cidade = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 300px;

  margin-bottom: 10px;
`;

export const Clima = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;

export const Temperatura = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 10px;
  padding-left: 10px;
  border-left: 1px solid #999;
  position: relative;

  span {
    font-size: 34px;
    font-weight: bold;
  }

  span.temp {
    color: #999;
    font-size: 18px;
    font-weight: bold;
  }
`;
