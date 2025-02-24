const { City } = require('../models/index');

class CityRepository {
    async createCity({name}) {
        try {
            const city = await City.create({name});
            return city;
        } catch (error) {
            console.error("Something went wrong in the repository layer")
            throw {error};
        }
    }

    async updateCity(cityId, data){
        try {
            // It will works but if db is postgres then returning: true will give us updated data
            // const city = await City.update(data,{
            //     where: {
            //         id: cityId
            //     }
            // });

            // for getting updated data in mysql
            const city = await City.findByPk(cityId);
            city.name = data.name;
            city.save();
            return city;
        } catch (error) {
            console.error("Something went wrong in the repository layer")
            throw {error};
        }
    }

    async deleteCity(cityId){
        try {
            await City.destroy({
                where: {
                    id: cityId
                }
            })
        } catch (error) {
            console.error("Something went wrong in the repository layer")
            throw {error};
            
        }
    }

    async getCity(cityId){
        try {
            const city = await City.findByPk(cityId);
            return city ?? [];
        } catch (error) {
            console.error("Something went wrong in the repository layer")
            throw {error};
        }
    }
}

module.exports = CityRepository;