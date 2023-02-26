import React, { useState } from 'react'

function Form(props: any) {
    const [personalInfo, setPersonalInfo] = useState({ name: '', phone: '', email: '' });
    const [plan, setPlan] = useState({ type: 0, monthly: false, yearly: true });
    const [addOns, setAddOns] = useState([])

    return <FormContext.Provider value={{ personalInfo, setPersonalInfo, plan, setPlan, addOns, setAddOns }}>
        {props.children}
    </FormContext.Provider>
}

export default Form;

export const FormContext = React.createContext<Partial<FormContextProps>>({})


type PersonalInfo = {
    name: string;
    phone: string;
    email: string
}
type Plan = {
    type: number,
    yearly: boolean,
    monthly: boolean
}

type FormContextProps = {
    personalInfo: PersonalInfo,
    setPersonalInfo: any,
    plan: Plan, setPlan: any,
    addOns: any[], setAddOns: any
}