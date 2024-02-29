import React, { useEffect, useState } from 'react'
import FormInput from './FormInput'
import { Condition } from '../../../types'
import toast from 'react-hot-toast'

type Props = {
  conditions: Condition[]
  setConditions: React.Dispatch<React.SetStateAction<Condition[]>>
}

const Conditions = ({ conditions, setConditions}: Props) => {
  const [newCondtition, setNewCondtition] = useState('')
  const [newDescription, setNewDescription] = useState('')

  const handleAddCondition = () => {
    if ( newCondtition == '' ) {
      toast.error('Titlu nu poate fii gol!')
      return
    }

    if ( newDescription == '' ) {
      toast.error('Descrierea nu poate fii goală!')
      return
    }

    setConditions(conditions => [{condition: newCondtition, description: newDescription}, ...conditions])
    setNewCondtition('')
    setNewDescription('')
  }

  return (
    <div className='flex flex-col mt-8'>
      <div className='flex flex-row'>
        <FormInput 
          placeholder='Titlu (max. 50 caractere)'
          value={newCondtition}
          setValue={setNewCondtition}
          styleProps='w-[calc(50%-32px)] min-w-[220px] max-w-[480px] mr-8'
        />

        <FormInput 
          placeholder='Descriere (max. 100 caractere)'
          value={newDescription}
          setValue={setNewDescription}
          styleProps='w-[calc(50%-32px)] min-w-[220px] max-w-[480px] mr-2'
        />   

         <div className='hover:scale-[1.05] transition-all p-4 cursor-pointer' onClick={handleAddCondition}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 0C9.62663 0 7.30655 0.703788 5.33316 2.02236C3.35977 3.34094 1.8217 5.21508 0.913451 7.4078C0.0051994 9.60051 -0.232441 12.0133 0.230582 14.3411C0.693605 16.6689 1.83649 18.807 3.51472 20.4853C5.19295 22.1635 7.33115 23.3064 9.65892 23.7694C11.9867 24.2324 14.3995 23.9948 16.5922 23.0865C18.7849 22.1783 20.6591 20.6402 21.9776 18.6668C23.2962 16.6935 24 14.3734 24 12C23.9966 8.81846 22.7312 5.76821 20.4815 3.51852C18.2318 1.26883 15.1815 0.00344108 12 0ZM12 22C10.0222 22 8.08879 21.4135 6.4443 20.3147C4.79981 19.2159 3.51809 17.6541 2.76121 15.8268C2.00433 13.9996 1.8063 11.9889 2.19215 10.0491C2.578 8.10929 3.53041 6.32746 4.92894 4.92893C6.32746 3.53041 8.10929 2.578 10.0491 2.19215C11.9889 1.80629 13.9996 2.00433 15.8268 2.7612C17.6541 3.51808 19.2159 4.79981 20.3147 6.4443C21.4135 8.08879 22 10.0222 22 12C21.9971 14.6513 20.9426 17.1931 19.0679 19.0679C17.1931 20.9426 14.6513 21.9971 12 22ZM17 12C17 12.2652 16.8946 12.5196 16.7071 12.7071C16.5196 12.8946 16.2652 13 16 13H13V16C13 16.2652 12.8946 16.5196 12.7071 16.7071C12.5196 16.8946 12.2652 17 12 17C11.7348 17 11.4804 16.8946 11.2929 16.7071C11.1054 16.5196 11 16.2652 11 16V13H8C7.73479 13 7.48043 12.8946 7.2929 12.7071C7.10536 12.5196 7 12.2652 7 12C7 11.7348 7.10536 11.4804 7.2929 11.2929C7.48043 11.1054 7.73479 11 8 11H11V8C11 7.73478 11.1054 7.48043 11.2929 7.29289C11.4804 7.10536 11.7348 7 12 7C12.2652 7 12.5196 7.10536 12.7071 7.29289C12.8946 7.48043 13 7.73478 13 8V11H16C16.2652 11 16.5196 11.1054 16.7071 11.2929C16.8946 11.4804 17 11.7348 17 12Z" fill="#FF7A00"/>
          </svg>
         </div>
      </div>

      {
        conditions.map((item, index) => (
          <div className='flex flex-row mt-8' key={item.condition+index}>
            <div className='flex flex-row w-[calc(50%-32px)] min-w-[220px] max-w-[480px] mr-8 pl-2'>
              <p className='text-secondary font-semibold mr-4'>{index+1}</p>
              <p className='text-secondary font-semibold'>{item.condition}</p>
            </div>
            <div className='flex flex-row w-[calc(50%-32px)] min-w-[220px] max-w-[480px] mr-6 pl-2'>
              <p className='text-secondary font-semibold'>{item.description}</p>
            </div>
            <div className='hover:scale-[1.05] transition-all cursor-pointer' onClick={() => setConditions(conditions => conditions.filter((item, i) => index != i))}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z" fill="#FF7A00"/>
                <rect x="14.8281" y="7.75732" width="2" height="10" rx="1" transform="rotate(45 14.8281 7.75732)" fill="#FF7A00"/>
                <rect x="16.2422" y="14.8284" width="2" height="10" rx="1" transform="rotate(135 16.2422 14.8284)" fill="#FF7A00"/>
              </svg>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Conditions