import React from 'react';
import {Box, Checkbox} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {isDelivery, isInstall, isOnStage} from "../store/dopDataReducer";

const InputDopData = () => {

    const dispatch = useDispatch()
    let delivery = useSelector(state => state.dopDataReducer.delivery)
    let install = useSelector(state => state.dopDataReducer.install)
    let onStage = useSelector(state => state.dopDataReducer.onStage)

   const toggleDelivery = () => {
        dispatch(isDelivery(true))
   }
   const toggleInstall = () => {
        dispatch(isInstall(true))
   }
   const toggleOnStage = () => {
        dispatch(isOnStage(true))
   }


    return (
        <Box sx={{mt:5,border:'1px solid black',width:'220px',boxShadow:'12px 12px 12px black'}}>
            <Box sx={{pt:2, pl:2}}><b> Доп услуги: </b></Box>
            <Box sx={{m:2,pt:2}}>
                <Checkbox color={'info'} checked={delivery} onChange={() => toggleDelivery()} />
                <Box component='span'>Доставка</Box>
            </Box>

            <Box sx={{m:2}}>
                <Checkbox color={'info'} checked={install} onChange={() => toggleInstall()} />
                <Box component='span'>Установка</Box>
            </Box>

            <Box sx={{m:2}}>
                <Checkbox color={'info'} checked={onStage} onChange={() => toggleOnStage()}/>
                <Box component='span'>Подьем на этаж</Box>
            </Box>
        </Box>
    );
};

export default InputDopData;