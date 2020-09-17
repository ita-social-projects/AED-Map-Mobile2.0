import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import nearestDeff from "../utils/nearestDeff";
import {getDeff, setSelectedDeff} from "../redux/actions";

const useNextDeff = () => {
    const [counter,setCounter] = useState(1);

    const dispatch = useDispatch();

    const {deffData,userLocation} = useSelector((state) => ({
        deffData: state.deffData,
        userLocation: state.userLocation}));

    const findNext = () => {
        const nearbyDefs = nearestDeff(deffData, userLocation);

        setCounter(count => count + 1);

        if (counter >= nearbyDefs.length - 1) {
            setCounter(0);
        }

        const near = nearbyDefs[counter];

        dispatch(setSelectedDeff(near.id));
        dispatch(getDeff(near.id))
    };

    return findNext;
};

export default useNextDeff;