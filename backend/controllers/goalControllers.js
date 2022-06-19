// @desc  Get goals
// @rout  GET /api/goals
const getGoal= (req,res)=>{
    res.status(200).json({msg:"this is the get requst.."});
}

// @desc  set goals
// @rout  POST /api/goals
const setGoal= (req,res)=>{
    console.log(`this is my body data`,req.body);
    res.status(200).json({msg:"this is the post requst.."});
}

// @desc  Update goals
// @rout  PUT /api/goals/:id
const updateGoal= (req,res)=>{
    res.status(200).json({msg:"this is the put requst.."});
}

// @desc  Delete goals
// @rout  DELETE /api/goals/:id
const deleteGoal= (req,res)=>{
    res.status(200).json({msg:`this is the delete requst.. ${req.params.id}`});
}



module.exports={
    getGoal,
    setGoal,
    updateGoal,
    deleteGoal
}