// change form context
"use client"

import { MemberType    } from "./assets"
import { Dispatch, SetStateAction , createContext, useContext , ReactNode, useState } from "react"
// import { SignupUser } from "./assets"
interface formTypeContext {
    form: string , 
    setForm: Dispatch<SetStateAction<string>>
}

const FormContext = createContext<formTypeContext | null>(null)

export const useFormContext = ()=>{
    const context = useContext(FormContext)
    if(!context){
        throw new Error ("form provider")
    }
    return context 
}

export const FormProvider = ({children}: {children:ReactNode})=>{
    const [form , setForm] = useState<string>("login")
    return(
        <FormContext.Provider value={{form , setForm}}>
            {children}
        </FormContext.Provider>
    )
}




//toggle theme context

interface themeTypeContext {
    theme: string , 
    setTheme: Dispatch<SetStateAction<string>>
}

const ThemeContext = createContext<themeTypeContext | null>(null)

export const useThemeContext = ()=>{
    const context = useContext(ThemeContext)
    if(!context){
        throw new Error ("theme provider")
    }
    return context 
}

export const ThemeProvider = ({children}: {children:ReactNode})=>{
    const [theme , setTheme] = useState<string>("light")
    return(
        <ThemeContext.Provider value={{theme , setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}



// ==========================================
// ==========================================
interface MenuContextType {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const MenuContext = createContext<MenuContextType | null>(null);

export const useMenuContext = () => {
    const context = useContext(MenuContext);
    if (!context) {
        throw new Error("useMenuContext must be used within a MenuProvider");
    }
    return context;
};

export const MenuProvider = ({ children }: { children: ReactNode }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    return (
        <MenuContext.Provider value={{ isOpen, setIsOpen }}>
            {children}
        </MenuContext.Provider>
    );
};


// ==========================================
// ==========================================
interface EditContextType {
    isEdit: boolean;
    setIsEdit: Dispatch<SetStateAction<boolean>>;
}

const EditContext = createContext<EditContextType | null>(null);

export const useEditContext = () => {
    const context = useContext(EditContext);
    if (!context) {
        throw new Error("useEditContext must be used within an EditProvider");
    }
    return context;
};

export const EditProvider = ({ children }: { children: ReactNode }) => {
    const [isEdit, setIsEdit] = useState<boolean>(false);
    return (
        <EditContext.Provider value={{ isEdit, setIsEdit }}>
            {children}
        </EditContext.Provider>
    );
};

// edit user 



// 1. تحديد نوع الـ Context ليكون القيمة قابلة لأن تكون null في البداية
interface UpdatedUserContextType {
    UpdatedUser: MemberType ;
    setUpdatedUser: Dispatch<SetStateAction<MemberType>>;
}

const UpdatedUserContext = createContext<UpdatedUserContextType | null>(null);

export const useUpdatedUserContext = () => {
    const context = useContext(UpdatedUserContext);
    if (!context) {
        throw new Error("useUpdatedUserContext must be used within an UpdatedUserProvider");
    }
    return context;
};

export const UpdatedUserProvider = ({ children }: { children: ReactNode }) => {
    const [UpdatedUser, setUpdatedUser] = useState<MemberType>({
    id:"",
    fullName: "",
    phoneNumber: "",
    email: "",
    photoUrl: "",
    ageGroup: "",
    gender: "",
    isActive: false,
    activeSubscription: {
        id: 0, 
        subscriptionPlanId: 0,
        planName: "",
        price: 0,
        startDate: 0,
        endDate: 0,
        isActive:false
    } ,
    nfcUrl:"",
    role:""
    });

    return (
        <UpdatedUserContext.Provider value={{ UpdatedUser, setUpdatedUser }}>
            {children}
        </UpdatedUserContext.Provider>
    );
};
// paid users

