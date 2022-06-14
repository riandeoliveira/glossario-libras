import * as S from "./styles";

export const InputBox = ({ name, email, password, message }) => (
  <S.Container>
    <label>{name}</label>
    <input
      type={email ? "email" : password ? "password" : "text"}
      className="form-control"
      placeholder={message}
      required
    />
  </S.Container>
);
