import React, { useContext, useState } from 'react'
import ArcadeIcon from '../../assets/images/icon-arcade.svg'
import AdvnacedIcon from '../../assets/images/icon-advanced.svg'
import ProIcon from '../../assets/images/icon-pro.svg'
import { FormContext } from './Form';
import { StepperContext } from '../Stepper/Stepper';
function Plan() {

    const formCtx = useContext(FormContext);
    const [selectedPlan, setSelectedPlan] = useState<number | undefined>(formCtx.plan?.type);
    const [isYearly, setYearly] = useState<boolean | undefined>(formCtx.plan?.yearly);
    const stepperCtx = useContext(StepperContext)
    const saveItems = () => {

        if (selectedPlan !== undefined) {
            formCtx.setPlan({ type: selectedPlan, yearly: isYearly });
            stepperCtx.next();
        } else {
            alert('Please choose a plan!')
        }
    }
    return (
        <div className='bg-white p-6 pb-2 md:p-0 rounded-lg shadow-lg md:bg-transparent md:shadow-none'>
            <h1 className='text-3xl leading-[1rem] text-[#03285a] tracking-tight font-bold'>Select your plan</h1>
            <p className='text-[.9rem] font-medium text-gray-500 mt-[1.2rem]'>You have the option of monthly or yearly billing.</p>
            <form className='mt-8 md:pr-16  '>
                <div className="md:flex space-y-3 md:space-y-0 md:space-x-3 md:my-3">
                    {
                        plans.map((item, i) => <PlanItem
                            key={i} {...item}
                            yearly={isYearly}
                            onSelect={() => {
                                setSelectedPlan(i)
                            }}
                            className={selectedPlan === i ? "border-[hsl(243,100%,62%)] bg-[#f8f9fe]" : ""} />)
                    }
                </div>
                <div className='my-5 flex justify-center bg-[#f8f9fe] py-3 rounded-lg'>
                    <DoubleLabeledSwitch checked={isYearly} label1={'Monthly'} label2={'Yearly'} onChange={(e: boolean) => setYearly(e)} />
                </div>

                <div className='md:mt-24 absolute md:relative bottom-0 left-0 w-full p-4 md:p-0 bg-white'>
                    <button
                    type="button"
                        onClick={(e) => {
                            e.stopPropagation();
                            e.preventDefault();
                            stepperCtx.previous()
                        }}
                        className=' px-5 py-3 rounded-lg float-left  text-gray-400 font-medium'>
                        Go Back
                    </button>
                    <button
                    type='button'
                        onClick={(e) => {
                            e.stopPropagation();
                            e.preventDefault();
                            saveItems();
                        }}
                        className='bg-[hsl(213,96%,18%)] px-5 py-3 rounded-lg float-right hover:bg-[#1556a7] text-white font-medium'>
                        Next Step
                    </button>
                </div>
            </form>
        </div>
    )
}


const PlanItem = (props: any) => {
    return<div onClick={props.onSelect} className={'border rounded-lg p-4 hover:border-[hsl(243,100%,62%)] cursor-pointer ' + props.className + ' flex md:w-1/3 md:flex-col flex-row space-x-4 md:space-x-0 md:space-y-4'}>
    <img alt="icon" width={40} src={props.image} />
    <div className="md:ml-4">
      <p className='font-bold text-[hsl(213,96%,18%)]'>{props.name}</p>
      <p className='text-sm font-medium text-gray-400'>${props.yearly ? props.price.yearly + '/yr' : props.price.monthly + '/mo'}</p>
      {props.yearly && (<p className='text-xs mt-2 text-[hsl(213,96%,18%)]'>2 months free</p>)}
    </div>
  </div>
  
}



const DoubleLabeledSwitch = (props: any) => {

    const labelColorChecked = 'text-[hsl(213,96%,18%)]';
    const labelColorUnchecked = 'text-gray-400';
    return <div className='flex'>
        <p className={'text-sm font-medium ' + (props.checked ? labelColorUnchecked : labelColorChecked)}>{props.label1}</p>
        <div className="mx-5"><Switch checked={props.checked} onChange={props.onChange} /></div>
        <p className={'text-sm font-medium  ' + (props.checked ? labelColorChecked : labelColorUnchecked)}>{props.label2}</p>
    </div>
}





const Switch = (props: any) => {
    const [checked, setChecked] = useState<boolean>(props.checked)
    return <label className="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" checked={checked} onChange={(e) => { setChecked(e.target.checked); props.onChange(e.target.checked) }} value="" className="sr-only peer outline-0 focus:outline-0" />
        <div className=
            {`w-9 h-5 
            peer-focus:outline-none
            rounded-full peer
            bg-[hsl(213,96%,18%)]
            peer-checked:after:translate-x-full
            peer-checked:after:border-white after:content-['']
            after:absolute after:top-[4px] after:left-[6px]
            after:bg-white after:border-gray-300 after:border
            after:rounded-full after:h-3 after:w-3 after:transition-all
            `}></div>
        {/* <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Toggle me</span> */}
    </label>

}



export const plans = [{
    name: 'Arcade',
    image: ArcadeIcon,
    price: {
        monthly: 9,
        yearly: 90
    }
}, {
    name: 'Advanced',
    image: AdvnacedIcon,
    price: {
        monthly: 12,
        yearly: 120
    }
},
{
    name: 'Pro',
    image: ProIcon,
    price: {
        monthly: 15,
        yearly: 150
    }
}]

export default Plan