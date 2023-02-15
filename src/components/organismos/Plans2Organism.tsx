import { IconAtom } from "../atomos/IconAtom";
import { TextAtom } from "../atomos/TextAtom";
import { SlideShowPlansAtom } from "../atomos/SlideShowPlanosAtom";

import { ButtonMolecule } from "../moleculas/ButtonMolecule";
import { GiCommercialAirplane } from "react-icons/gi";
import { TbPig } from "react-icons/tb";
import { FaRegBuilding } from "react-icons/fa";

type Props = {
  data?: any;
}

export function Plans2Organism({data}: Props) {

  const planos2 = [
    {
      id: 1,
      planName: data.data.paulo.plans2[0]?.planName,
      firstIcon: GiCommercialAirplane,
      firstText: data.data.paulo.plans2[0]?.firstText,
      discount: data.data.paulo.plans2[0]?.discount,
      discountText: data.data.paulo.plans2[0]?.discountText,
      thirdIcon: TbPig,
      thirdText: data.data.paulo.plans2[0]?.thirdText,
      fourthIcon: FaRegBuilding,
      fourthText: data.data.paulo.plans2[0]?.fourthText,
      priceTag: data.data.paulo.plans2[0]?.priceTag,
      buttonName: data.data.paulo.plans2[0]?.buttonName,
      colorPlan: data.data.paulo.plans2[0]?.colorPan,
    },
    {
      id: 2,
      planName: data?.data?.paulo?.plans2[1]?.planName,
      firstIcon: GiCommercialAirplane,
      firstText: data.data.paulo.plans2[1]?.firstText,
      discount: data.data.paulo.plans2[1]?.discount,
      discountText: data.data.paulo.plans2[1]?.discountText,
      thirdIcon: TbPig,
      thirdText: data.data.paulo.plans2[1]?.thirdText,
      fourthIcon: FaRegBuilding,
      fourthText: data.data.paulo.plans2[1]?.fourthText,
      priceTag: data.data.paulo.plans2[1]?.priceTag,
      buttonName: data.data.paulo.plans2[1]?.buttonName,
      colorPlan: data.data.paulo.plans2[1]?.colorPlan,
    },
    {
      id: 3,
      planName: data.data.paulo.plans2[2]?.planName,
      firstIcon: GiCommercialAirplane,
      firstText: data.data.paulo.plans2[2]?.firstText,
      discount: data.data.paulo.plans2[2]?.discount,
      discountText: data.data.paulo.plans2[2]?.discountText,
      thirdIcon: TbPig,
      thirdText: data.data.paulo.plans2[2]?.thirdText,
      fourthIcon: FaRegBuilding,
      fourthText: data.data.paulo.plans2[2]?.fourthText,
      priceTag: data.data.paulo.plans2[2]?.priceTag,
      buttonName: data.data.paulo.plans2[2]?.buttonName,
      colorPlan: data.data.paulo.plans2[2]?.colorPlan,
    },
    {
      id: 4,
      planName: data.data.paulo.plans2[3]?.planName,
      firstIcon: GiCommercialAirplane,
      firstText: data.data.paulo.plans2[3]?.firstText,
      discount: data.data.paulo.plans2[3]?.discount,
      discountText: data.data.paulo.plans2[3]?.discountText,
      thirdIcon: TbPig,
      thirdText: data.data.paulo.plans2[3]?.thirdText,
      fourthIcon: FaRegBuilding,
      fourthText: data.data.paulo.plans2[3]?.fourthText,
      priceTag: data.data.paulo.plans2[3]?.priceTag,
      buttonName: data.data.paulo.plans2[3]?.buttonName,
      colorPlan: data.data.paulo.plans2[3]?.colorPlan,
    },
  ];

  return (
    <div
      id="planos"
      className="bg-[#F4F4F4] sm:h-[1250px] justify-center sm:py-24 pb-10 sm:pb-0 mt-[270px] sm:mt-[300px]"
    >
      <div className="sm:flex justify-center">
        <TextAtom
          children
          className="text-center sm:text-5xl text-3xl sm:pt-0 pt-[70px] font-bold text-black sm:mr-2 "
          text="Assine agora"
        />
        <TextAtom
          children
          className="text-center sm:text-5xl text-3xl sm:pt-0 pb-[50px] font-bold text-black"
          text="um dos nossos 4 planos"
        />
      </div>
      <div className="sm:flex hidden flex-row justify-evenly mt-[70px] w-full">
        {planos2.map((element, index: number) => (
          <div
            key={index}
            className="flex flex-col items-center h-[640px] bg-white rounded-2xl shadow-lg"
          >
            <div className={`flex items-center flex-col w-72 space-y-3`}>
              <TextAtom
                children
                className={`text-4xl font-bold mt-10 mb-9 text-black`}
                text={element.planName}
                style={{
                  color:
                    element.colorPlan === undefined
                      ? "#BFBFBF"
                      : element.colorPlan,
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
                >
                  {" "}
                </TextAtom>
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
                >
                  {" "}
                </TextAtom>
              </div>
              <div
                className={`h-[6px] bg-[rgba(0,0,0,0.2)] w-[75%]`}
                style={{
                  backgroundColor: `${
                    element.colorPlan === undefined
                      ? "#BFBFBF"
                      : element.colorPlan
                  }`,
                  opacity: 0.4,
                }}
              />
            </div>

            <div>
              <ButtonMolecule
                children
                style={{
                  backgroundColor: `${
                    element.colorPlan === undefined
                      ? "#BFBFBF"
                      : element.colorPlan
                  }`,
                  color: "black",
                }}
                className={`mt-[30px] flex items-center w-[183px] justify-center h-[36px] rounded-full`}
                textClassName={`font-bold text-white`}
                title={element.buttonName}
              />
            </div>
          </div>
        ))}
      </div>

      <SlideShowPlansAtom planos2={planos2} className="w-full sm:hidden h-[600px]" />

      <div className="bg-white flex flex-col sm:flex-row sm:h-48 rounded-2xl mx-12 items-center justify-evenly sm:mt-[80px]">
        <div className="my-10 sm:my-0">
          <TextAtom
            className="text-[#4B4B4B] font-bold text-[20px] leading-[151%] tracking-[0.11em]"
            text={data.data.paulo.sub_plans_text[0].text1}
          >
            {" "}
          </TextAtom>

          <TextAtom
            className="text-[#4B4B4B] font-bold text-[20px] leading-[151%] tracking-[0.11em]"
            text={data.data.paulo.sub_plans_text[0].text2}
          >
            {" "}
          </TextAtom>

          <TextAtom
            className="text-[#4B4B4B] font-bold text-[20px] leading-[151%] tracking-[0.11em]"
            text={data.data.paulo.sub_plans_text[0].text3}
          >
            {" "}
          </TextAtom>
        </div>

        <div className="sm:w-1 bg-[lightgray] sm:h-[70%] w-[70%] h-1" />

        <div className="my-10 sm:my-0">
          <TextAtom
            className="text-[#4B4B4B] font-bold text-[20px] leading-[151%] tracking-[0.11em]"
            text={data.data.paulo.sub_plans_text[1].text1}
          >
            {" "}
          </TextAtom>

          <TextAtom
            className="text-[#4B4B4B] font-bold text-[20px] leading-[151%] tracking-[0.11em]"
            text={data.data.paulo.sub_plans_text[1].text2}
          >
            {" "}
          </TextAtom>

          <TextAtom
            className="text-[#4B4B4B] font-bold text-[20px] leading-[151%] tracking-[0.11em]"
            text={data.data.paulo.sub_plans_text[1].text3}
          >
            {" "}
          </TextAtom>
        </div>

        <div className="sm:w-1 bg-[lightgray] sm:h-[70%] w-[70%] h-1" />

        <div className="my-10 sm:my-0">
          <TextAtom
            className="text-[#4B4B4B] font-bold text-[20px] leading-[151%] tracking-[0.11em]"
            text={data.data.paulo.sub_plans_text[2].text1}
          >
            {" "}
          </TextAtom>

          <TextAtom
            className="text-[#4B4B4B] font-bold text-[20px] leading-[151%] tracking-[0.11em]"
            text={data.data.paulo.sub_plans_text[2].text2}
          >
            {" "}
          </TextAtom>

          <TextAtom
            className="text-[#4B4B4B] font-bold text-[20px] leading-[151%] tracking-[0.11em]"
            text={data.data.paulo.sub_plans_text[2].text3}
          >
            {" "}
          </TextAtom>
        </div>
      </div>
    </div>
  );
}
