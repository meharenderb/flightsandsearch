const {AirplaneRepository} = require("../repository/index");

class AirplaneService {
    constructor(){
        this.airplaneRepo = new AirplaneRepository();
    }

    async createAirplane(data){
        try {
            const airplane  = await this.airplaneRepo.createAirplane(data);
            return airplane;
        } catch (error) {
            console.error("Something went wrong in the service layer");
            throw {error};
        }
    }

    async updateAirplane(airplaneId, data){
        try {
            const airplane  = await this.airplaneRepo.updateAirplane(airplaneId, data);
            return airplane;
        } catch (error) {
            console.error("Something went wrong in the service layer");
            throw {error};
        }
    }

    async deleteAirplane(airplaneId){
        try {
            const airplane  = await this.airplaneRepo.deleteAirplane(airplaneId);
            return airplane;
        } catch (error) {
            console.error("Something went wrong in the service layer");
            throw {error};
        }
    }

    async getAirplane(airplaneId){
        try {
            const airplane  = await this.airplaneRepo.getAirplane(airplaneId);
            return airplane;
        } catch (error) {
            console.error("Something went wrong in the service layer");
            throw {error};
        }
    }

    async getAllAirplanes(){
        try {
            const airplane  = await this.airplaneRepo.getAllAirplanes();
            return airplane;
        } catch (error) {
            console.error("Something went wrong in the service layer");
            throw {error};
        }
    }
}

module.exports = AirplaneService;