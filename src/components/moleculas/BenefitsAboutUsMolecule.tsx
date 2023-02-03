import { Benefits } from "../../constants/AboutUs";
import { IconAtom } from "../atomos/IconAtom";
import { TextAtom } from "../atomos/TextAtom";

type Props = {
  className: string;
  element: Benefits;
}

export function BenefitsAboutUsMolecule({className, element}: Props) {
  return (
    <div className={className}>
      <IconAtom size={64} icon={element.icon} color='gray'/>

      <TextAtom className="mt-6 font-bold text-xl mb-2 text-[red]" text={element.title}> </TextAtom>

      <TextAtom className="text-black" text={element.bodyText}> </TextAtom>
    </div>
  )
}