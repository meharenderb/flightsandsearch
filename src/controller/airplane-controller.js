const { AirplaneService } = require('../services/index');

const airplaneService = new AirplaneService();

const create = async (req, res) => {
    try {
        const airplane = await airplaneService.createAirplane(req.body);
        return res.status(201).json({
            status: true,
            message: 'Successfully created a airplane.',
            data: airplane,
            err: {}
        })
    } catch (error) {
        console.error('Something went wrong in the controller layer');
        return res.status(500).json({
            status: false,
            message: 'Not able to created a airplane.',
            data: {},
            err: error
        })
    }
}

const update = async (req, res) => {
    try {
        const airplane = await airplaneService.updateAirplane(req.params.id, req.body);
        return res.status(201).json({
            status: true,
            message: 'Successfully updated a airplane.',
            data: airplane,
            err: {}
        })
    } catch (error) {
        console.error('Something went wrong in the controller layer');
        return res.status(500).json({
            status: false,
            message: 'Not able to update a airplane.',
            data: {},
            err: error
        })
    }
}

const destroy = async (req, res) => {
    try {        
        const airplane = await airplaneService.deleteAirplane(req.params.id);
        return res.status(201).json({
            status: true,
            message: 'Successfully deleted a airplane.',
            data: airplane,
            err: {}
        })
    } catch (error) {
        console.error('Something went wrong in the controller layer', error);
        return res.status(500).json({
            status: false,
            message: 'Not able to delete a airplane.',
            data: {},
            err: error
        })
    }
}

const getAirplane = async (req, res) => {
    try {
        const airplane = await airplaneService.getAirplane(req.params.id);
        return res.status(201).json({
            status: true,
            message: 'Successfully fetch a airplane.',
            data: airplane,
            err: {}
        })
    } catch (error) {
        console.error('Something went wrong in the controller layer');
        return res.status(500).json({
            status: false,
            message: 'Not able to fetch a airplane.',
            data: {},
            err: error
        })
    }
}

const getAllAirplanes = async (req, res) => {
    try {
        const airplanes = await airplaneService.getAllAirplanes();
        return res.status(201).json({
            status: true,
            message: 'Successfully fetch a airplanes.',
            data: airplanes,
            err: {}
        })
    } catch (error) {
        console.error('Something went wrong in the controller layer');
        return res.status(500).json({
            status: false,
            message: 'Not able to fetch a airplanes.',
            data: {},
            err: error
        })
    }
}

module.exports = {
    create,
    update,
    destroy,
    getAirplane,
    getAllAirplanes,
};