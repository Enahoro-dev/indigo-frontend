interface form{
    id:number,
    name:string,
    label:string,
    type:string
}

export const formItems:form[]= [{
    id:1,
    name:'first_name',
    label:'First Name',
    type:'text'
},{
    id:2,
    name:'last_name',
    label:'Last Name',
    type:'text'
},{
    id:3,
    name:'sex',
    label:'Sex',
    type:'text'
},{
    id:4,
    name:'age',
    label:'Age',
    type:'number'
},{
    id:5,
    name:'patient_number',
    label:'Hospital Id',
    type:'number'
},{
    id:6,
    name:'phone_number',
    label:'Phone Number',
    type:'number'
},{
    id:7,
    name:'address',
    label:'Address',
    type:'text'
}]
