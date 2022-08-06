import React, { ChangeEvent, useReducer } from 'react'
import Form from './Form'
import { ActionType, reducer} from './reducer'

const initialFormData = {
  user: {
    first_name: '',
    last_name: '',
    age: 0,
    sex:'',
    patient_number:0,
    address:'',
    phone_number:0
  }
}

const Container = () => {
  const [formData, dispatch] = useReducer(reducer, initialFormData)

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: ActionType.USER,
      payload: {
        field: e.target.name,
        value: e.target.value
      }
    })
  }


  

  return (
    <Form
      onInputChange={onInputChange}
      formData={formData}
      initialFormData={initialFormData}
    />
  )
}

export default Container