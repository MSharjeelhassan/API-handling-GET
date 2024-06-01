import React from 'react'
import { Box, Button } from '@mui/material'

const BAButton = (props:any) => {


  return (
    <>
     
        <Button variant='contained' color={props.btnColor} sx={{marginRight:3, textTransform: 'capitalize', width:150,marginBottom:5}} 
         onClick={props.click}>
            {props.btnValue}
        </Button>
       
       
     
    </>
  )
}

export default BAButton
