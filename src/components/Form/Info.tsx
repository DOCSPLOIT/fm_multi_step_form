import { useFormik } from 'formik'
import React, { useContext } from 'react'
import { number, object, string } from 'yup'
import { StepperContext } from '../Stepper/Stepper'
import Input from './components/Input'
import { FormContext } from './Form'

function InfoForm() {

    const formCtx = useContext(FormContext)
    const stepperCtx = useContext(StepperContext)
    const formik = useFormik({
        initialValues: {
            name: formCtx.personalInfo?.name,
            email: formCtx.personalInfo?.email,
            phone: formCtx.personalInfo?.phone
        },
        validationSchema: object().shape({
            name: string().required('This field is required'),
            email: string().required('This field is required').email(),
            phone: number().required('This field is required').typeError('Must be a number')
        }),

        onSubmit() {
            formCtx.setPersonalInfo(formik.values);
            stepperCtx.next()
        }
    })

    return (
        <div className='bg-white p-6 rounded-lg shadow-lg md:bg-transparent md:shadow-none'>
            <h1 className='text-3xl leading-[1rem] text-[#03285a] tracking-tight font-bold'>Personal info</h1>
            <p className='text-[.9rem] font-medium text-gray-500 mt-[1.2rem]'>Please provide your name, email address, and phone number</p>
            <form className='mt-8 md:pr-16 ' onSubmit={formik.handleSubmit}>
                <Input
                    label='Name'
                    errorText={formik.errors.name}
                    invalid={formik.touched.name && formik.errors.name !== undefined}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                    id="name"
                    name="name"
                    placeholder='e.g. Stephen King'
                />
                <Input
                    label='Email'
                    errorText={formik.errors.email}
                    invalid={formik.touched.email && formik.errors.email !== undefined}
                    onChange={formik.handleChange}
                    value={formik.values.email}

                    onBlur={formik.handleBlur}
                    id="email"
                    name="email"
                    placeholder='e.g. stephenking@lorem.com'
                />
                <Input
                    label='Phone Number'
                    errorText={formik.errors.phone}
                    invalid={formik.touched.phone && formik.errors.phone !== undefined}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.phone}

                    id="phone"
                    name="phone"
                    placeholder='e.g. +1 234 567 890'
                />
                <div className='absolute bottom-0 left-0 p-5 bg-white w-full md:relative md:p-0'>
                <button
                    type="submit"
                    className='bg-[hsl(213,96%,18%)] px-5 py-3 rounded-lg float-right hover:bg-[#1556a7] text-white font-medium'>
                    Next Step
                </button>
                </div>
            </form>
        </div>
    )
}

export default InfoForm