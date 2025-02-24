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

module.exports = {
	create,
	update,
	destroy,
	get,
};
