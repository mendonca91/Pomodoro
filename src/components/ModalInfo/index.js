import React from "react";
import { FaTimesCircle } from "react-icons/fa";

import { Container, Content, Close } from "./style";

export default function ModalInfo(props) {
  return (
    <Container>
      <Content>
        <Close onClick={props.close}>
          <FaTimesCircle />
        </Close>
        <div className="modal-text">
          <h2>Pomodoro</h2>
          <p>
            A Técnica Pomodoro é um método de gerenciamento de tempo
            desenvolvido por Francesco Cirillo no final dos anos 1980. A técnica
            consiste na utilização de um cronômetro para dividir o trabalho em
            períodos de 25 minutos, separados por breves intervalos.
          </p>
        </div>
      </Content>
    </Container>
  );
}
