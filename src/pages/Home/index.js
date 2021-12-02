/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from "react";
import { FaInfo, FaPlay, FaPause, FaCog } from "react-icons/fa";

import { Container, Content, Timer, Config } from "./style";
import ModalInfo from "../../components/ModalInfo";
import ModalConfig from "../../components/ModalConfig";

export default function Home() {
  const [timeBreak, setTimeBreak] = useState(5);
  const [timeWork, setTimeWork] = useState(25);

  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);

  const [timer, setTimer] = useState(null);
  const [status, setStatus] = useState("Hora de Trabalhar");

  const [showModalInfo, setShowModalInfo] = useState(false);
  const [showModalConfig, setShowModalConfig] = useState(false);

  useEffect(() => {
    if (timer) {
      let interval = setInterval(() => {
        if (seconds <= 0) {
          if (minutes <= 0) {
            switchesTimerMode();
          } else {
            setSeconds(59);
            setMinutes(minutes - 1);
          }
        } else setSeconds(seconds - 1);
      }, 1000);
      return () => {
        clearInterval(interval);
      };
    }
  });

  function switchesTimerMode() {
    status === "Hora de Trabalhar"
      ? (setStatus("Descanse"), setMinutes(timeBreak), setSeconds(0))
      : (setStatus("Hora de Trabalhar"), setMinutes(timeWork), setSeconds(0));
  }

  function DecrementBreakInterval() {
    if (!timer) {
      if (timeBreak !== 1) {
        setTimeBreak(timeBreak - 1);
      }
    }
  }

  function IncrementBreakInterval() {
    if (!timer) {
      if (timeBreak <= 59) {
        setTimeBreak(timeBreak + 1);
      }
    }
  }

  function DecrementWorkInterval() {
    if (!timer) {
      if (timeWork !== 1) {
        setTimeWork(timeWork - 1);
        setMinutes(timeWork - 1);
      }
    }
  }

  function IncrementWorkInterval() {
    if (!timer) {
      if (timeWork <= 59) {
        setTimeWork(timeWork + 1);
        setMinutes(timeWork + 1);
      }
    }
  }

  function ResetInterval() {
    setTimeBreak(5);
    setTimeWork(25);
    setMinutes(25);
    setSeconds(0);
    setStatus("Hora de Trabalhar");
    stopTimer();
  }

  function startStop() {
    timer ? stopTimer() : startTimer();
  }

  function stopTimer() {
    setTimer(null);
  }

  function startTimer() {
    setTimer("Start");
  }

  const displayMinutes = minutes < 10 ? "0" + minutes : minutes;
  const displaySeconds = seconds < 10 ? "0" + seconds : seconds;

  function handleShowModalInfo() {
    setShowModalInfo(!showModalInfo);
  }

  function handleShowModalConfig() {
    setShowModalConfig(!showModalConfig);
  }

  return (
    <>
      <Container>
        <Content>
          <Timer>
            <span>{status}</span>
            <input
              type="text"
              value={`${displayMinutes}:${displaySeconds}`}
              readOnly={true}
            />
          </Timer>
        </Content>
        <Config>
          <div className="info" onClick={handleShowModalInfo}>
            <FaInfo />
          </div>
          <div className="start" onClick={startStop}>
            {!timer ? <FaPlay /> : <FaPause />}
          </div>
          <div className="config" onClick={handleShowModalConfig}>
            <FaCog />
          </div>
          <audio></audio>
        </Config>

        <button className="reset-timer" onClick={ResetInterval}>
          Resetar relógio
        </button>
      </Container>

      {showModalInfo && <ModalInfo close={() => handleShowModalInfo()} />}

      {showModalConfig && (
        <ModalConfig
          close={() => handleShowModalConfig()}
          valueWork={`${timeWork} min`}
          valueRest={`${timeBreak} min`}
          workIncrement={() => IncrementWorkInterval()}
          workDecrement={() => DecrementWorkInterval()}
          breakIncrement={() => IncrementBreakInterval()}
          breakDecrement={() => DecrementBreakInterval()}
          reset={() => ResetInterval()}
        />
      )}
    </>
  );
}
