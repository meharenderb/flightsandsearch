const { AirportRepository } = require('../repository/index');

class AirportService {
    constructor() {
        this.airportRepo = new AirportRepository();
    }

    async createAirport(data){
        try {
            const airport  = await this.airportRepo.createAirport(data);
            return airport;
        } catch (error) {
            console.error("Something went wrong in the service layer");
            throw {error};
        }
    }

    async updateAirport(airportId, data){
        try {
            const airport  = await this.airportRepo.updateAirport(airportId, data);
            return airport;
        } catch (error) {
            console.error("Something went wrong in the service layer");
            throw {error};
        }
    }

    async deleteAirport(airportId){
        try {
            const airport  = await this.airportRepo.deleteAirport(airportId);
            return airport;
        } catch (error) {
            console.error("Something went wrong in the service layer");
            throw {error};
        }
    }

    async getAirport(airportId){
        try {
            const airport  = await this.airportRepo.getAirport(airportId);
            return airport;
        } catch (error) {
            console.error("Something went wrong in the service layer");
            throw {error};
        }
    }

    async getAllAirports(){
        try {
            const airport  = await this.airportRepo.getAllAirports();
            return airport;
        } catch (error) {
            console.error("Something went wrong in the service layer");
            throw {error};
        }
    }
}

module.exports = AirportService;