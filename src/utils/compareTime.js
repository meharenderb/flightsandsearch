const compareTime = (req,res,next) => {
    if(!req.body.departureTime){
        return res.status(500).json({
            status: false,
            message: 'Departure datetime is required!.',
            data: {},
            err: {}
        }) 
    }
    if(!req.body.arrivalTime){
        return res.status(500).json({
            status: false,
            message: 'Arrival datetime is required!.',
            data: {},
            err: {}
        }) 
    }
    departureDatetime = new Date(req.body.departureTime);
    arrivalDatetime = new Date(req.body.arrivalTime);
    if(departureDatetime.getTime() > arrivalDatetime.getTime()){
        return res.status(500).json({
            status: false,
            message: 'Departure date-time must be before the arrival date-time.',
            data: {},
            err: {}
        }) 
    }

    next();
}

module.exports = compareTime;