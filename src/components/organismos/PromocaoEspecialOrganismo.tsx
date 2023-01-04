import React from "react";
import styles from "../../styles";
import { ButtonAtom } from "../atomos/ButtonAtom";
import { TextAtom } from "../atomos/TextAtom";

export default function PromocaoEspecialOrganismo() {
  return (
    <div
      className={`flex justify-center items-stretch w-[78.75rem] h-36 px-16 rounded-lg bg-[#F20F0F]  `}
    >
      <TextAtom
        children
        text="PROMOÇÃO ESPECIAL"
        className="text-3xl text-center text-white self-center	"
      />
      <TextAtom
        children
        className="text-center self-center px-4 text-white"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus mattis, pulvinar dapibus leo."
      />
      <ButtonAtom
        className="bg-white h-11 self-center w-48 "
        children
        title="BAIXE O APP"
      />
    </div>
  );
}
