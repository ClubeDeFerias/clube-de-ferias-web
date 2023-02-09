import { planos2 } from "../../constants";

import { TextAtom } from "../atomos/TextAtom";
import { SlideShowPlansAtom } from "../atomos/SlideShowPlanosAtom";

import {
  CardPlanosMolecule,
  PropsPlanos,
} from "../../components/moleculas/CardPlanosMolecule";
import { IconAtom } from "../atomos/IconAtom";
import { ButtonMolecule } from "../moleculas/ButtonMolecule";

export function Plans2Organism({}) {
  return (
    <div id="planos" className="bg-[#F4F4F4] justify-center sm:py-24">
      <TextAtom
        children
        className="text-center sm:text-5xl text-3xl sm:pt-0 pt-[70px] font-bold text-black"
        text="Assine agora"
      />
      <TextAtom
        children
        className="text-center sm:text-5xl text-3xl sm:pt-0 pb-[50px] font-bold text-black"
        text="um dos nossos 4 planos"
      />
      <div className="sm:flex hidden flex-row justify-evenly mt-[70px] w-full">
        {planos2.map((element, index: number) => (
          <div className="flex flex-col items-center h-[580px] bg-white rounded-2xl shadow-lg">
            <div className={`flex items-center flex-col w-72 space-y-3`}>
              <TextAtom
                children
                className={`text-4xl font-bold mt-10 mb-9 text-black`}
                text={element.planName}
                style={{
                  color: `${element.colorPlan}`,
                }}
              />

              <div className="flex items-center justify-evenly w-full py-1">
                <TextAtom
                  children
                  className="text-2xl font-bold text-black"
                  text={`${element.discount}%`}
                  style={{
                    color: `${element.colorPlan}`,
                  }}
                />
                <TextAtom
                  children
                  className="w-40 text-left text-black"
                  text={element.discountText}
                />
              </div>

              <div
                className={`h-1 bg-[rgba(0,0,0,0.2)] w-[75%]`}
                style={{
                  backgroundColor: `${element.colorPlan}`,
                  opacity: 0.4,
                }}
              />

              <div className="flex items-center justify-evenly w-full py-1">
                <IconAtom
                  color={element.colorPlan}
                  icon={element.thirdIcon}
                  size={42}
                />
                <TextAtom
                  children
                  className="w-40 text-left text-black"
                  text={element.thirdText}
                ></TextAtom>
              </div>

              <div
                className={`h-1 bg-[rgba(0,0,0,0.2)] w-[75%]`}
                style={{
                  backgroundColor: `${element.colorPlan}`,
                  opacity: 0.4,
                }}
              />

              <div className="flex items-center justify-evenly w-full py-1">
                <IconAtom
                  color={element.colorPlan}
                  icon={element.fourthIcon}
                  size={42}
                />
                <TextAtom
                  className="w-40 text-left text-black"
                  text={element.fourthText}
                ></TextAtom>
              </div>

              <div
                className={`h-1 bg-[rgba(0,0,0,0.2)] w-[75%]`}
                style={{
                  backgroundColor: `${element.colorPlan}`,
                  opacity: 0.4,
                }}
              />

              <div className="flex items-center justify-between">
                <TextAtom
                  className={`text-4xl font-bold pt-[40px] text-black`}
                  text={`R$ ${element.priceTag}/mês`}
                  style={{
                    color: "black",
                  }}
                ></TextAtom>
              </div>
            </div>

            <div>
              <ButtonMolecule
                children
                style={{
                  backgroundColor: `${element.colorPlan}`,
                  color: "black",
                }}
                className={`mt-[30px] flex items-center w-[183px] justify-center rounded-full`}
                textClassName={`font-bold text-white`}
                title={element.buttonName}
              />
            </div>
          </div>
        ))}
      </div>

      <SlideShowPlansAtom className="w-full sm:hidden" />
    </div>
  );
}
