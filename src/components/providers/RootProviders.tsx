import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

export const RootContext = createContext<{
    hamburgerMenuState: boolean;
    setHamburgerMenuState: Dispatch<SetStateAction<boolean>>
}>({
    hamburgerMenuState: false,
    setHamburgerMenuState: () => {},
});

type Props = {
    children: ReactNode;
  };

export const RootProvider = ({ children }: Props) => {
    const [hamburgerMenuState,setHamburgerMenuState] = useState(false);
    return (
        <RootContext.Provider value={{ hamburgerMenuState ,setHamburgerMenuState }}>
            { children }
        </RootContext.Provider>
    );
}