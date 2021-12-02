import React from "react";
import {
  FaTimesCircle,
  FaArrowAltCircleDown,
  FaArrowAltCircleUp,
} from "react-icons/fa";

import { Container, Close } from "../ModalInfo/style";
import { Interval, Content } from "./style";

export default function ModalConfig(props) {
  return (
    <Container>
      <Content>
        <Close onClick={props.close}>
          <FaTimesCircle />
        </Close>
        <h2>Configuração</h2>
        <div className="modal-text">
          <Interval>
            <div className="work-interval">
              <p>Trabalho</p>
              <button onClick={props.workIncrement}>
                <FaArrowAltCircleUp />
              </button>
              <button onClick={props.workDecrement}>
                <FaArrowAltCircleDown />
              </button>
            </div>
            <span>{props.valueWork}</span>
          </Interval>

          <Interval>
            <div className="work-interval">
              <p>Descanso</p>
              <button onClick={props.breakIncrement}>
                <FaArrowAltCircleUp />
              </button>
              <button onClick={props.breakDecrement}>
                <FaArrowAltCircleDown />
              </button>
            </div>
            <span>{props.valueRest}</span>
          </Interval>
        </div>
        <button onClick={props.reset}>Resetar configuração</button>

        <button className="btn-ok-config" onClick={props.close}>
          Ok
        </button>
      </Content>
    </Container>
  );
}
