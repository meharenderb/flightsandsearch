const { Airplane } = require('../models/index');

class AirplaneRepository {
    async createAirplane(data){
        try {
            const airplane = Airplane.create(data);
            return airplane;
        } catch (error) {
            console.error("Something went wrong in the repository layer")
            throw {error};
        }
    }

    async updateAirplane(airplaneId, data){
        try {
            const airplane = await Airplane.findByPk(airplaneId);
            airplane.modelNumber = data.modelNumber;
            airplane.capacity = data.capacity;
            airplane.save();
            return airplane;
        } catch (error) {
            console.error("Something went wrong in the repository layer")
            throw {error};
        }
    }

    async deleteAirplane(airplaneId){
        try {
            await Airplane.destroy({where: {id: airplaneId}});
            return true;
        } catch (error) {
            console.error("Something went wrong in the repository layer")
            throw {error};
        }
    }

    async getAirplane(airplaneId){
        try {
            const airplane = await Airplane.findByPk(airplaneId);
            return airplane;
        } catch (error) {
            console.error("Something went wrong in the repository layer")
            throw {error};
        }
    }

    async getAllAirplanes(){
        try {
            const airplanes = await Airplane.findAll();
            return airplanes ?? [];
        } catch (error) {
            console.error("Something went wrong in the repository layer")
            throw {error};
        }
    }
}

module.exports = AirplaneRepository;