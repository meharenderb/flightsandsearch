const { AirportService } = require('../services/index');

const airportService = new AirportService();

const create = async (req, res) => {
    try {
        const airport = await airportService.createAirport(req.body);
        return res.status(201).json({
            status: true,
            message: 'Successfully created a airport.',
            data: airport,
            err: {}
        })
    } catch (error) {
        console.error('Something went wrong in the controller layer');
        return res.status(500).json({
            status: false,
            message: 'Not able to created a airport.',
            data: {},
            err: error
        })
    }
}

const update = async (req, res) => {
    try {
        const airport = await airportService.updateAirport(req.params.id, req.body);
        return res.status(201).json({
            status: true,
            message: 'Successfully updated a airport.',
            data: airport,
            err: {}
        })
    } catch (error) {
        console.error('Something went wrong in the controller layer');
        return res.status(500).json({
            status: false,
            message: 'Not able to update a airport.',
            data: {},
            err: error
        })
    }
}

const destroy = async (req, res) => {
    try {        
        const airport = await airportService.deleteAirport(req.params.id);
        return res.status(201).json({
            status: true,
            message: 'Successfully deleted a airport.',
            data: airport,
            err: {}
        })
    } catch (error) {
        console.error('Something went wrong in the controller layer', error);
        return res.status(500).json({
            status: false,
            message: 'Not able to delete a airport.',
            data: {},
            err: error
        })
    }
}

const getAirport = async (req, res) => {
    try {
        const airport = await airportService.getAirport(req.params.id);
        return res.status(201).json({
            status: true,
            message: 'Successfully fetch a airport.',
            data: airport,
            err: {}
        })
    } catch (error) {
        console.error('Something went wrong in the controller layer');
        return res.status(500).json({
            status: false,
            message: 'Not able to fetch a airport.',
            data: {},
            err: error
        })
    }
}

const getAllAirports = async (req, res) => {
    try {
        const airports = await airportService.getAllAirports();
        return res.status(201).json({
            status: true,
            message: 'Successfully fetch a airports.',
            data: airports,
            err: {}
        })
    } catch (error) {
        console.error('Something went wrong in the controller layer');
        return res.status(500).json({
            status: false,
            message: 'Not able to fetch a airports.',
            data: {},
            err: error
        })
    }
}

module.exports = {
	create,
	update,
	destroy,
	getAirport,
	getAllAirports,
};