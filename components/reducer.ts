export enum ActionType {
    USER = 'user'
  }
  
  export type Action = {
    type: ActionType,
    payload: {
      field: string,
      value: string | number 
    }
  }
  
  export type FormData = {
    user: {
      first_name: string,
      last_name: string,
      sex: string,
      patient_number: number,
      age: number,
      address:string,
      phone_number:number
    }
  }
  
  export const reducer = (previousData: FormData, action: Action) => {
    const { type, payload } = action
    const { field, value } = payload
    switch (type) {
      case ActionType.USER:
        return {
          ...previousData,
          user: {
            ...previousData.user,
            [field]: value
          }
        }

      default:
        return previousData
    }
  }