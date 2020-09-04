const getAllDefs = () => {
    return require('../../data/full-defs.json').data.listDefs;
}

const getDeff = (id) => {
    return require('../../data/full-defs.json').data.listDefs.filter((item) => (item._id===id))[0]
}

export {
    getAllDefs,
    getDeff
}