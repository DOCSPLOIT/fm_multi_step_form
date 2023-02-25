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
        if (current < total) {
            setCurrent(prev => prev++);
        }
    }
    function previous() {
        if (current > 0 && current <= total) {
            setCurrent(prev => prev--)
        }
    }

    function classNameOfNumber(index: number) {
        if (current === index) {
            return "bg-white"
        } else { return "border-2 text-white" }
    }

    function onClickStep(index: number) {
        setCurrent(index)
    }

    return <StepperContext.Provider value={{ current, next, previous, total }}>
        <div className="h-full w-full flex space-x-12">
            <div className="h-full w-[30%] overflow-hidden pt-10 rounded-lg bg-no-repeat bg-[url('src/assets/images/bg-sidebar-desktop.svg')] bg-contain">
                {
                    props.heads.map((text: string, index: number) => {
                        return <div className="flex cursor-pointer space-x-4 px-7  " onClick={() => onClickStep(index)}>
                            <div className="mb-8">
                                <p className={"rounded-full h-[30px] w-[30px] text-center  " + classNameOfNumber(index)}>{index + 1}</p>
                            </div>
                            <div>
                                <p className="leading-[.8] text-[.75rem] font-medium text-white">STEP {index + 1}</p>
                                <p className="font-bold text-[.92rem] leading-[1.5rem] text-white">{text.toUpperCase()}</p>
                            </div>
                        </div>
                    })
                }
            </div>
            <div className="grow p-12 ">
                {props.children[current]}
            </div>
        </div>
    </StepperContext.Provider>



}



const StepperContext = React.createContext({ total: 0, current: 0, next() { }, previous() { } })