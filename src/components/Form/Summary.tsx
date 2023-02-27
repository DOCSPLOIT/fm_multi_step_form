import React from 'react'
import { StepperContext } from '../Stepper/Stepper';
import { FormContext } from './Form'
import { plans } from './Plan';
import CheckIcon from '../../assets/images/icon-thank-you.svg'
function Summary() {

    const [isConfirmed,setIsConfirmed]=React.useState(false)


    const stepperCtx = React.useContext(StepperContext)
    const frmCtx = React.useContext(FormContext);
    const plan =frmCtx.plan;
    const addOns = frmCtx.addOns;
    const total=()=>{
        let amount=0;
        if(plan?.yearly){
            amount = plans[plan?.type!].price.yearly + (addOns?.map(t=>t.amount.yearly).reduce((partialSum,a)=>partialSum+a,0))
        }else{
            amount = plans[plan?.type!].price.monthly + (addOns?.map(t=>t.amount.monthly).reduce((partialSum,a)=>partialSum+a,0))

        }
        return amount;

    }
    if(isConfirmed){
        return( <div className=''>
                <img src={CheckIcon} className="mt-24 mx-auto"  width={75} alt="_check"/>
                <p className='text-3xl my-4 text-center font-bold text-[#03285a]'>Thank you!</p>
                <p className='text-sm text-center mx-auto w-3/4  text-gray-400 w-'>Thanks for confirming your subscription! We hope you have
                   fun suing our platform. If you ever need support, please feel
                   free to email us at support@loremgaming.com.
                   </p>
                   
        </div>)
    }else{
  return (
    <div>
            <h1 className='text-3xl leading-[1rem] text-[#03285a] tracking-tight font-bold'>Finishing up</h1>
            <p className='text-[.9rem] font-medium text-gray-500 mt-[1.2rem]'>Double-check everything looks OK before confirming.</p>
            <form className='mt-8 pr-16 '>
                <div className='bg-[#f8f9fe] p-5  rounded-lg'>
                    <div className='border-b pb-6'>
                        <span className='mr-auto text-sm font-bold text-[hsl(213,96%,18%)]'>{plans[plan!.type!].name}({plan?.yearly?'Yearly':'Monthly'})</span>
                        <span className='float-right text-sm font-bold text-[hsl(213,96%,18%)]'>${plans[plan!.type!].price[plan?.yearly?'yearly':'monthly']}/{plan?.yearly?'yr':'mo'}</span>
                        <p  className='text-xs text-gray-400 underline cursor-pointer'>Change</p>
                    </div>
                    <div>
                        {addOns?.map(item=>{
                            return <div className='my-2'>
                                <span className='text-xs font-medium text-gray-400'>{item.name}</span>
                                <span className='float-right font-medium text-[hsl(213,96%,18%)] text-xs'>+${item.amount[plan?.yearly?'yearly':'monthly']}/{plan?.yearly?'yr':'mo'}</span>
                            </div>
                        })}
                    </div>
                </div>
                <div className='p-5'>
                    <span className='text-sm font-medium text-gray-400'>Total (per {plan?.yearly?'year':'month'})</span>
                    <span className='float-right font-bold text-[hsl(243,100%,62%)]'>+${total()}/{plan?.yearly?'yr':'mo'}</span>
                </div>
                <div className='mt-24'>
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
                            setIsConfirmed(true)
                        }}
                        className='bg-[#483efe] px-5 py-3 rounded-lg float-right hover:bg-[#1556a7] text-white font-medium'>
                        Confirm
                    </button>
                </div>
            </form>
        </div>
  )
                    }
}

export default Summary