import React from 'react';
import {
    Box, Button,
    Checkbox,
    TextField
} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {isDoorToggle, setHight, setKol, setMkv, setMpog, setWidth} from "../store/inputReducer";
import {showResultToggle} from "../store/resultReducer";


const InputMainData = () => {

    const dispatch = useDispatch()
    let isDoor = useSelector(state => state.inputReducer.isDoor)

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.currentTarget
        const data = {
            height: +form['height'].value,
            width: +form['width'].value,
            kol: +form['kol'].value,
        }

        const mkv = (data.height/1000) * (data.width/1000) * (data.kol)
        const mpog = (data.height/1000) + (data.width/1000) * 2 * (data.kol)

        dispatch(setHight(data.height))
        dispatch(setWidth(data.width))
        dispatch(setKol(data.kol))
        dispatch(setMkv(mkv))
        dispatch(setMpog(mpog))

        if (mkv !== 0) {
            dispatch(showResultToggle())
        }
    }



    const toggleIsDoor = () => {
        dispatch(isDoorToggle())
    }



    return (
        <Box>
            <form onSubmit={handleSubmit}>
                <Box sx={{display:'flex',flexDirection:'row',m:2,gap:'10px'}}>
                    <TextField
                        type='number'
                        name='height'
                        label='высота'
                        size='small'
                        sx={{background:'white',border:'2px solid orange',boxShadow:'4px 5px 10px orange'}}
                    />
                    <TextField
                        type='number'
                        name='width'
                        label='ширина'
                        size='small'
                        sx={{background:'white',border:'2px solid orange',boxShadow:'4px 5px 10px orange'}}
                    />
                    <TextField
                        name='kol'
                        type='number'
                        label='кол-во'
                        size='small'
                        sx={{background:'white',border:'2px solid orange',boxShadow:'4px 5px 10px orange'}}
                    />
                    <Box sx={{position:'absolute',top:'300px',left:'700px'}}>
                        <Button
                            type='submit'
                            size='medium'
                            variant='contained'
                        >
                            РАСЧИТЫВАЕМ
                        </Button>
                    </Box>
                </Box>

            <Box sx={{m:2}}>
                <Checkbox  checked={isDoor} onChange={() => toggleIsDoor()} color='info'/>
                <Box component='span'>Двери есть?</Box>
            </Box>
                {  isDoor &&
                    <Box sx={{m: 2}}>
                        <select name='select' id='sel' >
                            <option id='sliderType'>Раздвижные двери</option>
                            <option id='openType'>Распашные двери</option>
                        </select>
                    </Box>
                }
            </form>
        </Box>
    );
};

export default InputMainData;