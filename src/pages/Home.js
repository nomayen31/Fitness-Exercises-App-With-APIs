import { Box } from '@mui/system';
import React from 'react';
import HeroBanner from '../Components/HeroBanner'
import Exercises from '../Components/Exercises';
import SearchExercises from '../Components/SearchExercises';

const Home = () => {
    return (
        <Box>
            <HeroBanner></HeroBanner>
            <SearchExercises></SearchExercises>
            <Exercises></Exercises>
        </Box>
    );
};

export default Home;