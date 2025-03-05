const { Flight } = require('../models/index');
const {Op} = require('sequelize');

class FlightRepository {
    #createFilter(data){
        const filter = {};
        if(data.departureAirportId){
            Object.assign(filter, {where: {departureAirportId: data.departureAirportId}});
        }
        if(data.arrivalAirportId){
            // filter.where = {arrivalAirportId: data.arrivalAirportId};
            Object.assign(filter, {where: {arrivalAirportId: data.arrivalAirportId}});
        }
        if(data.minPrice){
            // filter.where = {price: {[Op.gte]: data.minPrice}};
            Object.assign(filter, {price: {[Op.gte]: data.minPrice}});
        }
        if(data.maxPrice){
            // filter.where = {price: {[Op.lte]: data.maxPrice}};
            Object.assign(filter, {price: {[Op.lte]: data.maxPrice}});
        }
        console.log("filter ", filter);
        
        return filter;
    }

    async createFlight(data){
        try {
            const flight = await Flight.create(data);
            return flight;
        } catch (error) {
            console.error("Something went wrong in the repository layer")
            throw {error};
        }
    }

    async getAllFlights(data){
        try {            
            const filter = this.#createFilter(data);
            const flights = await Flight.findAll({where:filter});
            // console.log("flights ", flights);
            
            return flights;
        } catch (error) {
            console.error("Something went wrong in the repository layer")
            throw {error};
        }
    }

    async getFlightById(flightId){
        try {            
            console.log("flightId ", flightId);
            
            const flight = await Flight.findByPk(flightId);
            if(!flight){
                throw {error: "Flight not found!"};
            }
            
            return flight;
        } catch (error) {
            console.error("Something went wrong in the repository layer")
            throw error;
        }
    }

    async updateFlightSeatsAvailability(flightId, data){
        try {                        
            await Flight.update(data, {where: {id: flightId}});
            return true;
        } catch (error) {
            console.error("Something went wrong in the repository layer")
            throw error;
        }
    }
}

module.exports = FlightRepository;