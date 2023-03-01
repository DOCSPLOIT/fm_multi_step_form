import React, { useState } from "react"


export default function Stepper(props: any) {
    const [current, setCurrent] = useState(0);


    let total = props.heads.length;
    if (props.children.length) {
        if (props.children.length != total) {
            throw "Children and Heading count not matching"
        }

    } else {
        throw "At least two components required"
    }
    function next() {

        if ((current+1) < total) {
            console.log(current);
            setCurrent(current + 1);
        }
    }
    function previous() {
        if (current > 0 && current <= total) {
            setCurrent(current - 1)
        }
    }

    function classNameOfNumber(index: number) {
        if (current === index) {
            return "bg-[hsl(228,100%,84%)] text-[hsl(213,96%,18%)] border-2 border-[hsl(228,100%,84%)] font-medium"
        } else { return "border-2 text-white font-medium" }
    }
    function goto(index:number){
        if(index!==current && (index+1)<total){
            setCurrent(index);
        }
    }
    function onClickStep(index: number) {
        // setCurrent(index)
    }

    return <StepperContext.Provider value={{ current, next, previous, total ,goto }}>
        <div className="h-full w-full md:flex md:space-x-12">
            <div className=" h-[172px] md:min-w-[274px]  md:min-h-[568px] flex justify-center md:justify-start md:flex-col overflow-hidden md:pt-10 md:rounded-lg bg-no-repeat bg-[url('./assets/images/bg-sidebar-mobile.svg')] md:bg-[url('./assets/images/bg-sidebar-desktop.svg')] bg-contain">
                {
                    props.heads.map((text: string, index: number) => {
                        return <div key={index} className="flex cursor-pointer md:space-x-4 md:px-7 px-3  pt-5 md:pt-0  " onClick={() => onClickStep(index)}>
                            <div className="mb-8">
                                <p className={"rounded-full h-[30px] w-[30px] text-center  " + classNameOfNumber(index)}>{index + 1}</p>
                            </div>
                            <div className="hidden md:block">
                                <p className="leading-[.8] text-[.75rem]  text-[hsl(229,24%,87%)]">STEP {index + 1}</p>
                                <p className="font-bold text-[.92rem] leading-[1.5rem] text-white">{text.toUpperCase()}</p>
                            </div>
                        </div>
                    })
                }
            </div>
            <div className="grow md:p-12 pt-12 px-6 mt-[-125px] md:mt-0">
                {props.children[current]}
            </div>
        </div>
    </StepperContext.Provider>



}



export const StepperContext = React.createContext({ total: 0, current: 0, next() { }, previous() { },goto(index:number){} })