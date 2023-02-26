import AddOns from './components/Form/AddOns'
import Form from './components/Form/Form'
import InfoForm from './components/Form/Info'
import Plan from './components/Form/Plan'
import Stepper from './components/Stepper/Stepper'
import './index.css'

export default function App() {
  return <div className='min-h-screen w-screen pt-12'>
    <div className=' m-auto w-[65vw] rounded-lg mt-[3.1rem] h-[74vh] p-4 bg-white shadow-lg'>
      <Form>
        <Stepper heads={["Your Info", "Select Plan", "ADD-ONS"]} >
          <InfoForm />
          <Plan />
          <AddOns />
        </Stepper>
      </Form>
    </div>
  </div>
}