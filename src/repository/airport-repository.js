const { Airport } = require('../models/index');

class AirportRepository {
    async createAirport(data){
        try {
            const airport = Airport.create(data);
            return airport;
        } catch (error) {
            console.error("Something went wrong in the repository layer")
            throw {error};
        }
    }

    async updateAirport(airportId, data){
        try {
            const airport = await Airport.findByPk(airportId);
            airport.name = data.name;
            airport.address = data.address;
            airport.save();
            return airport;
        } catch (error) {
            console.error("Something went wrong in the repository layer")
            throw {error};
        }
    }

    async deleteAirport(airportId){
        try {
            await Airport.destroy({where: {id: airportId}});
            return true;
        } catch (error) {
            console.error("Something went wrong in the repository layer")
            throw {error};
        }
    }

    async getAirport(airportId){
        try {
            const airport = await Airport.findByPk(airportId);
            return airport;
        } catch (error) {
            console.error("Something went wrong in the repository layer")
            throw {error};
        }
    }

    async getAllAirports(){
        try {
            const airports = await Airport.findAll();
            return airports ?? [];
        } catch (error) {
            console.error("Something went wrong in the repository layer")
            throw {error};
        }
    }
}

module.exports = AirportRepository