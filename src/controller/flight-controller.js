const { FlightService, AirplaneService } = require('../services/index');

const flightService = new FlightService();
const airplaneService = new AirplaneService();

const createFlight = async (req, res) => {
    try {
        const airplane = await airplaneService.getAirplane(req.body.airplaneId);

        if(!airplane){
            throw new Error("Sorry! Airplane details not found for provided id.");
        }

        const flight = await flightService.createFlight({
					...req.body,
					flightNumber: airplane.modelNumber,
					totalSeats: airplane.capacity,
				});
        return res.status(201).json({
            status: true,
            message: 'Successfully created a flight.',
            data: flight,
            err: {}
        })
    } catch (error) {
        console.error('Something went wrong in the controller layer',error);
        return res.status(500).json({
            status: false,
            message: 'Not able to create a flight.',
            data: {},
            err: error.message
        })
    }
}

const getAllFlights = async (req, res) => {
    try {
        const flights = await flightService.getAllFlights(req.body);

        return res.status(201).json({
            status: true,
            message: 'Successfully fetched a flights.',
            data: flights,
            err: {}
        })
    } catch (error) {
        console.error('Something went wrong in the controller layer',error);
        return res.status(500).json({
            status: false,
            message: 'Not able to create a flight.',
            data: {},
            err: error?.message
        })
    }
}

const getFlightById = async (req, res) => {
    try {
        const flight = await flightService.getFlightById(req.params.id);

        return res.status(201).json({
            status: true,
            message: 'Successfully fetched a flight.',
            data: flight,
            err: {}
        })
    } catch (error) {
        console.error('Something went wrong in the controller layer',error);
        return res.status(500).json({
            status: false,
            message: 'Not able to fetch a flight.',
            data: {},
            err: error?.message
        })
    }
}

const updateFlightSeatsAvailability = async (req, res) => {
    try {
        const flight = await flightService.updateFlightSeatsAvailability(req.params.id, req.body);

        return res.status(201).json({
            status: true,
            message: 'Successfully updated flight seats availability',
            data: flight,
            err: {}
        })
    } catch (error) {
        console.error('Something went wrong in the controller layer',error);
        return res.status(500).json({
            status: false,
            message: 'Not able to update flight seats availability.',
            data: {},
            err: error?.message
        })
    }
}

module.exports = {
    createFlight,
    getAllFlights,
    getFlightById,
    updateFlightSeatsAvailability
}