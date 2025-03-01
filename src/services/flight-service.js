const { FlightRepository } = require('../repository/index');

class FlightService {
    constructor(){
        this.flightRepo = new FlightRepository();
    }

    async createFlight(data){
        try {
            const flight  = await this.flightRepo.createFlight(data);
            return flight;
        } catch (error) {
            console.error("Something went wrong in the service layer");
            throw {error};
        }
    }

    async getAllFlights(data){
        try {
            const flights  = await this.flightRepo.getAllFlights(data);
            return flights;
        } catch (error) {
            console.error("Something went wrong in the service layer");
            throw {error};
        }
    }
}

module.exports = FlightService;