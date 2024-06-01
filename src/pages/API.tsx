import { useState } from "react";
import BAButton from "../componenets/BAButton";
import axios from "axios";
import BATable from "../componenets/BATable";


const API = ()=>{


    const [data,setData] =useState<any>([]);
    const [loading, setLoading]=useState(false);
const getData =()=>{
    setLoading(true);
    console.log('hhehehehehe');
    axios.get('https://jsonplaceholder.typicode.com/users').then((res)=>{
        // console.log(res.data);
        setData([...res.data]);
        setLoading(false);
    }).catch((err)=>{
        console.log(err);
        setLoading(true);
    })
}
console.log(data);

return(
    <>
        
        <BAButton btnValue='get data' btnColor = 'primary' click ={getData}/>
        <BAButton btnValue='put data ' btnColor = 'secondary'/>
        <BAButton btnValue='delete data' btnColor = 'error' />
        <BAButton btnValue='post data' />
        
    <BATable
    loading={loading}
    col = {[
        {title:'id',values:'id'},
        {title:'Name',values:'name'},
        {title:'Email',values:'email'},
        {title:'Phone',values:'phone'},
        {title:'Website',values:'website',displayField:""},
        {title:"Custom Msg", values:'',displayField:"Good to see you"},
        {title:'Delete',values:'', displayField: ()=> {return <BAButton btnValue='Delete' btnColor = 'error' />}}
    ]}

dataBank = {data}
    />
        </>
    )
}


export default API


