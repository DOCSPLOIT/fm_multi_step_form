import React, { useContext, useState } from 'react'
import { StepperContext } from '../Stepper/Stepper';
import { FormContext } from './Form'

function AddOns() {
    const frmCtx = useContext(FormContext);
    const stepperCtx = useContext(StepperContext);
    let items:any[] =frmCtx.addOns!;
    
    function saveItems(){
        frmCtx.setAddOns(items);
        stepperCtx.next()
    }

    return (
        <div className='bg-white p-6 pb-2 md:p-0 rounded-lg shadow-lg md:bg-transparent md:shadow-none'>
        <h1 className='text-3xl leading-[1rem] text-[#03285a] tracking-tight font-bold'>Pick add-ons</h1>
        <p className='text-[.9rem] font-medium text-gray-500 mt-[1.2rem]'>Please provide your name, email address, and phone number</p>
        <form className='mt-8 md:pr-16 '>
            <div>
           {addOns.map((t,i)=> <Checkbox

                                    title={t.name} 
                                    subtitle={t.desc} 
                                    tail={frmCtx.plan?.yearly?`$${t.amount.yearly}/yr`:`$${t.amount.monthly}/mr`}
                                    checked={items.some(value=>value.name===t.name)}
                                    onChange={(e:boolean)=>{
                                        if(e){
                                            items.push(t);
                                        }else{
                                            items=items.filter((it:any)=>it!==t)
                                        }
                                    }}
                                    />)}
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





function Checkbox({ title, subtitle, tail,onChange,checked=false }:{title:string,subtitle:string,tail:string,onChange:any,checked:boolean}) {
    const [isChecked, setIsChecked] = React.useState(checked);
    
    return (
      <label className={`flex items-center my-3 border rounded-lg  hover:border-[hsl(243,100%,62%)] px-4 py-2 transition-colors ${isChecked ? 'bg-[#f8f9fe] border-[hsl(243,100%,62%)]' : ''}`}>
        <div className="flex items-center flex-1 min-w-0">
          <input
            type="checkbox"
            className="form-checkbox accent-[hsl(243,100%,62%)] mr-4"
            checked={isChecked}
            onChange={(e) => {
                setIsChecked(e.target.checked);
                onChange(e.target.checked);
            }}
          />
          <div className="flex flex-col">
            <h3 className="font-medium text-[hsl(213,96%,18%)]">{title}</h3>
            <p className="text-gray-500 text-sm ">{subtitle}</p>
          </div>
        </div>
        <div className="text-[hsl(243,100%,62%)] text-xs">
          {tail}
        </div>
      </label>
    );
  }
  



  const hasSameObject=(arr1:any[],arr2:any[]) => arr1.some(obj1 => {
    return arr2.some(obj2 => {
      return  obj1.name === obj2.name;
    });
  });




export const addOns=[{
    name:'Online service',
    desc:'Access to multiplayer games',
    amount:{monthly:1,yearly:10}
},{
    name:'Larger storage',
    desc:'Extra 1TB of cloud storage',
    amount:{monthly:2,yearly:20}
},{
    name:'Customizable Profile',
    desc:'Custom theme on your profile',
    amount:{monthly:2,yearly:20}
}]
export default AddOns