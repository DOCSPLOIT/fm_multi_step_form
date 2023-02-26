import React from 'react'

function Input(props: { label: string, errorText?: string, invalid?: boolean } & React.InputHTMLAttributes<HTMLInputElement>) {
    const inputProps: any = { ...props }
    delete inputProps.label;
    delete inputProps.errorText;
    delete inputProps.formik;
    return (
        <div className='flex flex-col my-3'>
            <div className='flex justify-between'>
                <label htmlFor={props.id} className='text-[.8rem] text-[hsl(213,96%,18%)] leading-[1.6rem] font-[500] tracking-tight'>{props.label}</label>
                {props.invalid && <p className='text-[hsl(354,84%,57%)] font-medium text-sm'>{props.errorText}</p>}
            </div>

            <input {...inputProps}
                className={props.className + `  my-1 border outline-none text-[hsl(213,96%,18%)]
                                                focus:border-[hsl(243,100%,62%)]
                                                 text-[.875rem] font-bold px-4 py-[.6rem]
                                                  rounded-lg `+ (props.invalid && 'border-[hsl(354,84%,57%)]')} />
        </div >

    )
}

export default Input