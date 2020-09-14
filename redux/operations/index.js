const axios = require('axios');

const getAllDefs = async () => {
    const res = await axios.get('https://aed.nevidkladka.org/api/defibrillators')
        .then(res => res)
        .catch(err => err);
    return res.data.mapDefs;
};

const getDeff = async (id) => {
    const res = await axios.get(`https://aed.nevidkladka.org/api/defibrillators/${id}`)
        .then(res => res)
        .catch(err => err);
    return res.data.defibrillator;
};

export {
    getAllDefs,
    getDeff
}