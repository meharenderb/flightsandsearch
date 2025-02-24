const { CityService } = require('../services/index');

const cityService = new CityService();

const create = async (req, res) => {
    try {
        const city = await cityService.createCity(req.body);
        return res.status(201).json({
            data: city,
            status: true,
            message: 'Successfully created a city.',
            err: {}
        })
    } catch (error) {
        console.error('Something went wrong in the controller layer');
        return res.status(500).json({
            data: {},
            status: false,
            message: 'Not able to created a city.',
            err: error
        })
    }
};

const update = async (req, res) => {
    try {
        const city = await cityService.updateCity(req.params.id, req.body);
        return res.status(201).json({
            data: city,
            status: true,
            message: 'Successfully updated a city.',
            err: {}
        })
    } catch (error) {
        console.error('Something went wrong in the controller layer');
        return res.status(500).json({
            data: {},
            status: false,
            message: 'Not able to update a city.',
            err: error
        })
    }
};

const destroy = async (req, res) => {
    try {
        const city = await cityService.deleteCity(req.params.id);
        return res.status(201).json({
            data: city,
            status: true,
            message: 'Successfully deleted a city.',
            err: {}
        })
    } catch (error) {
        console.error('Something went wrong in the controller layer');
        return res.status(500).json({
            data: {},
            status: false,
            message: 'Not able to delete a city.',
            err: error
        })
    }
};

const get = async (req, res) => {
    try {
        const city = await cityService.getCity(req.params.id);
        return res.status(201).json({
            data: city,
            status: true,
            message: 'Successfully fetched a city.',
            err: {}
        })
    } catch (error) {
        console.error('Something went wrong in the controller layer');
        return res.status(500).json({
            data: {},
            status: false,
            message: 'Not able to fetch a city.',
            err: error
        })
    }
};

const getAll = async (req, res) => {
    try {
        console.log("req => ", req);
        
        const cities = await cityService.getAllCities(req.query);
        return res.status(201).json({
            data: cities,
            status: true,
            message: 'Successfully fetched cities.',
            err: {}
        })
    } catch (error) {
        console.error('Something went wrong in the controller layer');
        return res.status(500).json({
            data: {},
            status: false,
            message: 'Not able to fetch cities.',
            err: error
        })
    }
}

const createCities = async (req, res) => {
    try {        
        const cities = await cityService.createCities(req.body);
        return res.status(201).json({
            data: cities,
            status: true,
            message: 'Successfully created cities.',
            err: {}
        })
    } catch (error) {
        console.error('Something went wrong in the controller layer');
        return res.status(500).json({
            data: {},
            status: false,
            message: 'Not able to create cities.',
            err: error
        })
    }
}

module.exports = {
	create,
	update,
	destroy,
	get,
    getAll,
    createCities,
};
