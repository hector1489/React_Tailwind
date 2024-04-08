import { createContext, ReactNode, useState, Dispatch, SetStateAction, useMemo, useEffect } from "react";
import IRecord from "../interfaces/IRecord";
import dataJson from "../data.json"

interface IState {
    IsHero: Array<IRecord>,
    IsGalleryServices: Array<IRecord>,
    IsTestimonials: Array<IRecord>
}

interface IContextProps {
    state: IState;
    setState: Dispatch<SetStateAction<IState>>;
    removeFromCart: (itemId: number) => void;
}

const AppContext = createContext<IContextProps | undefined>(undefined);

interface IAppProviderProps {
    children: ReactNode;
}

const AppProvider: React.FC<IAppProviderProps> = ({ children }: IAppProviderProps) => {
    const [state, setState] = useState<IState>({
        IsHero: [],
        IsGalleryServices: [],
        IsTestimonials: [],
    });

    useEffect(() => {
        setState({
          IsHero: dataJson,
          IsGalleryServices: [],
          IsTestimonials: [],
        });
      }, []);

      const removeFromCart = (itemId: number) => {
        setState(prevState => ({
          ...prevState,
          IsHero: prevState.IsHero.map(item => {
            if (item.id === itemId) {
              return {
                ...item,
                quantity: 0
              };
            }
            return item;
          })
        }));
      };

    const contextValue = useMemo(() => ({ state, setState, removeFromCart }), [state, setState]);

    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    );
}

export { AppProvider, AppContext };
