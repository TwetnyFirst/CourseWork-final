import { createContext, useState } from "react";

type TContext = [string,(color:string) => void]

export const ThemeContext = createContext<TContext>(['light',() => {}]);

function Theme({children}:any){

    const [color,setColor] = useState('light');

    // const root = document.getElementById('root');
    // {root?.classList.contains()}
    // root?.classList(color);
    // console.log(root);

    return ( 
        <>
        <ThemeContext.Provider value={[color,setColor]}>
            {children}
        </ThemeContext.Provider>
        </>
     );
}

export default Theme;