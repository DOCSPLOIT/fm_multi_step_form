import AddOns from './components/Form/AddOns'
import Form from './components/Form/Form'
import InfoForm from './components/Form/Info'
import Plan from './components/Form/Plan'
import Summary from './components/Form/Summary'
import Stepper from './components/Stepper/Stepper'
import './index.css'

export default function App() {
  return <div className='md:min-h-screen md:w-screen md:pt-12'>
    <div className=' m-auto md:w-[65vw] rounded-lg md:mt-[3.1rem] md:min-h-[74vh] md:p-4 md:bg-white md:shadow-lg'>
      <Form>
        <Stepper heads={["Your Info", "Select Plan", "ADD-ONS","Summary"]} >
          <InfoForm />
          <Plan />
          <AddOns />
          <Summary/>
        </Stepper>
      </Form>
    </div>
  </div>
}