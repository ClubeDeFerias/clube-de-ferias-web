import React, { useState } from "react";
import { IconAtom } from "../atomos/IconAtom";

import { TextAtom } from "../atomos/TextAtom";

import logo from "../../assets/logo.png";

import { socialMedia, contato, Navigation } from "../../constants";
import { IconButtonMolecule } from "../moleculas/IconButtonMolecule";
import { IconType } from "react-icons";

type Props = {
  navigation: Navigation[];
};

export function FooterOrganism({ navigation }: Props) {
  const [location, setLocation] = useState(
    window.location.href.split("/")[window.location.href.split("/").length - 1]
  );

  return (
    <>
      <div className="sm:h-[26.313rem] w-full bg-[#F20F0F] sm:flex sm:flex-row flex-col px-12 sm:justify-between py-12 sm:items-center">
        <div className="justify-items-start grid content-center sm:w-96 h-full mb-12">
          <div className="justify-start">
            <a href=".">
              <img className="w-36" src={logo} alt="logo" />
            </a>
          </div>
          <TextAtom
            children
            className="font-bold text-white text-2xl mb-4	"
            text="INFORMAÇÕES"
          />
          <TextAtom
            children
            className="text-left mb-7 text-base font-normal	text-white	"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
          />
          <div className="flex flex-row">
            {socialMedia.map((element, index: number) => (
              <IconButtonMolecule
                target="_blank"
                key={index}
                to={element.rota}
                classNameIcon="m-2 sm:block hidden"
                color="white"
                size={24}
                icon={element.icon}
              />
            ))}
          </div>
        </div>
        <div className="flex sm:flex-row flex-col justify-between sm:w-[42rem] content-center h-full ">
          <div className="grid content-center justify-items-start sm:mb-0 mb-12	">
            <TextAtom
              children
              className="font-bold text-white text-2xl mb-3.5"
              text="NAVIGATION"
            />
            {navigation.map((element, index: number) => (
              <div key={index} className="flex flex-row mb-4">
                <a className="flex" href={element.route}>
                  <IconAtom
                    icon={element.icon}
                    size={20}
                    color="white"
                    className="mr-3."
                  />
                  <TextAtom
                    children
                    text={element.content}
                    className="text-white"
                  />
                </a>
              </div>
            ))}
          </div>
          <div className="grid content-center justify-items-start sm:w-80	">
            <TextAtom
              children
              className="font-bold text-white text-2xl mb-8	"
              text="CONTATO"
            />
            {contato.map((element, index: number) => (
              <div key={index} className="flex flex-row mb-4">
                <IconAtom
                  icon={element.icon}
                  size={20}
                  color="white"
                  className=" mr-3.5	"
                />
                <TextAtom
                  children
                  text={element.content}
                  className="text-white"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="h-[83px] w-full bg-[#636363] flex justify-center items-center ">
        <TextAtom
          className="text-[13px] font-bold text-white"
          text="CLUBE DE FÉRIAS"
        />
      </div>
    </>
  );
}
