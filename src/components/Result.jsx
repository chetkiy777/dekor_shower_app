import React from 'react';
import {Box} from "@material-ui/core";
import {useSelector} from "react-redux";

const Result = () => {

    const showResult = useSelector(state => state.resultReducer.showResult)
    const height = useSelector(state => state.inputReducer.height)
    const width = useSelector(state => state.inputReducer.width)
    const kol = useSelector(state => state.inputReducer.kol)
    const mkv = useSelector(state => state.inputReducer.mkv)
    const mpog = useSelector(state => state.inputReducer.mpog)



    return (
        <>
            {showResult &&
            <Box sx={{
                display: 'block',
                p: 3,
                background: 'white',
                border: '1px solid black',
                boxShadow: '12px 12px 12px black',
                height: '600px',
                mt: 2,
                width: '500px'
            }}>
                <Box sx={{display: 'flex', flexDirection: 'column', gap: '10px', wordSpacing:'5px'}}>
                    <h3>Параметры изделия:</h3>
                    <Box>
                        Высота_стекла: {height} , мм
                    </Box>
                    <Box>
                        Ширина_стекла: {width} , мм
                    </Box>
                    <Box>
                        Количество: { kol } , шт
                    </Box>
                    <Box>
                        Квадратура общая: { mkv } , м/кв
                    </Box>
                    <Box>
                        Поггонаж: { mpog } , м/пог
                    </Box>

                    <h3>Спецификация:</h3>
                    <Box sx={{display: 'flex', flexDirection: 'column', gap: '10px', wordSpacing:'5px'}}>
                        <Box>
                            Стекло_8_мм : 1500 ,грн
                        </Box>
                        <Box>
                            Полировка_торцов: 500 ,грн
                        </Box>
                        <Box>
                            Закалка : 1200 ,грн
                        </Box>
                        <Box>
                            Профиль_клемный : 1500 ,грн
                        </Box>
                        <Box>
                            Раздвижная система : 4200 ,грн
                        </Box>
                        <Box>
                            Доставка : 300 ,грн
                        </Box>
                        <Box>
                            Монтаж : 2000 ,грн
                        </Box>
                        <Box sx={{display:'inline',fontWeight:'900',mt:2}}>Итого: 9200, грн</Box>
                    </Box>
                </Box>
            </Box>
            }
        </>
    );
};

export default Result;