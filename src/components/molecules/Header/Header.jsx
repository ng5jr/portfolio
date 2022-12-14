import React, { useContext } from "react";
import { AudioContext } from "../../../context/AudioContext";
import { HeaderWrapper, MenuWrapper, MenuButton } from "./Header.styles";
import { FaHouseUser } from "react-icons/fa";
import {
  BsHouseFill,
  BsFillPersonFill,
  BsPersonBoundingBox,
} from "react-icons/bs";
import { TbMessage2, TbMessage2Share } from "react-icons/tb";
import { AiFillFolder, AiFillFolderOpen } from "react-icons/ai";
import { BiWorld } from "react-icons/bi";
import { TiWorld } from "react-icons/ti";
import audio from "../../../assets/Sounds/mixkit-single-classic-click-1116.wav";
const Header = ({ setIndex, activeIndex }) => {
  const { setAudioEnabled, audioEnabled } = useContext(AudioContext);
  const changeActiveIndex = (newIndex) => {
    setIndex(newIndex);
  };
  const vibrate = () => {
    window.navigator.vibrate(50);
  };

  let settingsAudio = new Audio(audio);

  const playAudio = () => {
    if (audioEnabled) {
      settingsAudio.play();
    }
  };
  return (
    <HeaderWrapper>
      <MenuWrapper>
        <MenuButton
          isActive={activeIndex === 0}
          onClick={() => {
            changeActiveIndex(0);
            vibrate();
            playAudio();
          }}
        >
          {activeIndex === 0 && <FaHouseUser />}
          {activeIndex !== 0 && <BsHouseFill />}
        </MenuButton>
        <MenuButton
          isActive={activeIndex === 1}
          onClick={() => {
            changeActiveIndex(1);
            vibrate();
            playAudio();
          }}
        >
          {activeIndex === 1 && <BsPersonBoundingBox />}
          {activeIndex !== 1 && <BsFillPersonFill />}
        </MenuButton>
        <MenuButton
          isActive={activeIndex === 2}
          onClick={() => {
            changeActiveIndex(2);
            vibrate();
            playAudio();
          }}
        >
          {activeIndex === 2 && <BiWorld />}
          {activeIndex !== 2 && <TiWorld />}
        </MenuButton>
        <MenuButton
          isActive={activeIndex === 3}
          onClick={() => {
            changeActiveIndex(3);
            vibrate();
            playAudio();
          }}
        >
          {activeIndex === 3 && <AiFillFolderOpen />}
          {activeIndex !== 3 && <AiFillFolder />}
        </MenuButton>
        <MenuButton
          isActive={activeIndex === 4}
          onClick={() => {
            changeActiveIndex(4);
            vibrate();
            playAudio();
          }}
        >
          {activeIndex === 4 && <TbMessage2Share />}
          {activeIndex !== 4 && <TbMessage2 />}
        </MenuButton>
      </MenuWrapper>
    </HeaderWrapper>
  );
};

export default Header;
