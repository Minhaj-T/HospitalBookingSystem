const express = require('express')
const router = express.Router()
const {
    getGoal,
    setGoal,
    updateGoal,deleteGoal
    }=require('../controllers/goalControllers')

router.route('/').get(getGoal).post(setGoal);
// router.get('/',getGoal)

// router.post('/mt',setGoal);

router.put('/:id',updateGoal);

router.delete('/:id',deleteGoal);

module.exports=router