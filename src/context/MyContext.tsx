import { createContext, useState } from 'react';
import { CardSimulationProps } from '../components/moleculas/CardSimulationMolecule';
import { HeadeBlogPostOrganismInterface } from '../components/organismos/HeadeBlogPostOrganism';

export type IMyContext = {
  showMenu: boolean;
  data: HeadeBlogPostOrganismInterface;
  link: string;
  packages: CardSimulationProps[];
  allSiteTexts: string;
  location: string;
  setData: React.Dispatch<React.SetStateAction<HeadeBlogPostOrganismInterface>>;
  setLocation: React.Dispatch<React.SetStateAction<string>>;
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
  setLink: React.Dispatch<React.SetStateAction<string>>;
  setPackages: React.Dispatch<React.SetStateAction<CardSimulationProps[]>>;
  setAllSiteTexts: React.Dispatch<React.SetStateAction<string>>;
}

export const MyContext = createContext<IMyContext | null>(null);

// -----------------------------xxxxxxx--------------------------------

type Props = {
  children: JSX.Element,
}

export function MyProvider({ children }: Props) {

  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [link, setLink] = useState<string>('');
  const [packages, setPackages] = useState<CardSimulationProps[]>([]);
  const [allSiteTexts, setAllSiteTexts] = useState<string>('');
  const [location, setLocation] = useState<string>('');
  const [data, setData] = useState<HeadeBlogPostOrganismInterface>({
    capa: '',
    title: '',
    subtitle: '',
    img: ''
  });

  return (
    <MyContext.Provider value={{
      showMenu, setShowMenu,
      link, setLink,
      packages, setPackages,
      allSiteTexts, setAllSiteTexts,
      location, setLocation,
      data, setData,
    } as IMyContext}>
      {children}
    </MyContext.Provider>
  );
}