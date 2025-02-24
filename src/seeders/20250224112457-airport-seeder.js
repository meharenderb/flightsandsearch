'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		/**
		 * Add seed commands here.
		 *
		 * Example:
		 * await queryInterface.bulkInsert('People', [{
		 *   name: 'John Doe',
		 *   isBetaMember: false
		 * }], {});
		 */
		await queryInterface.bulkInsert('Airports', [
			{
				name: 'Indira Gandhi International Airport',
				address: 'Palam, Delhi, India',
				cityId: 1,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				name: 'Chhatrapati Shivaji Maharaj International Airport',
				address: 'Sahar, Andheri East, Mumbai, Maharashtra, India',
				cityId: 2,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				name: 'Kempegowda International Airport',
				address: 'Devanahalli, Bengaluru Rural District, Karnataka, India',
				cityId: 3,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				name: 'Netaji Subhas Chandra Bose International Airport',
				address: 'Dum Dum, Kolkata, West Bengal, India',
				cityId: 4,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				name: 'Chennai International Airport',
				address: 'Meenambakkam, Chennai, Tamil Nadu, India',
				cityId: 5,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				name: 'Rajiv Gandhi International Airport',
				address: 'Shamshabad, Hyderabad, Telangana, India',
				cityId: 6,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				name: 'Cochin International Airport',
				address: 'Nedumbassery, Kochi, Kerala, India',
				cityId: 7,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				name: 'Trivandrum International Airport',
				address: 'Chacka, Thiruvananthapuram, Kerala, India',
				cityId: 8,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				name: 'Sardar Vallabhbhai Patel International Airport',
				address: 'Hansol, Ahmedabad, Gujarat, India',
				cityId: 9,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				name: 'Goa International Airport (Dabolim Airport)',
				address: 'Dabolim, Goa, India',
				cityId: 10,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				name: 'Jaipur International Airport',
				address: 'Sanganer, Jaipur, Rajasthan, India',
				cityId: 11,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				name: 'Lokpriya Gopinath Bordoloi International Airport',
				address: 'Borjhar, Guwahati, Assam, India',
				cityId: 12,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				name: 'Sri Guru Ram Dass Jee International Airport',
				address: 'Rajasansi, Amritsar, Punjab, India',
				cityId: 13,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				name: 'Bagdogra International Airport',
				address: 'Bagdogra, Darjeeling District, West Bengal, India',
				cityId: 14,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				name: 'Devi Ahilya Bai Holkar Airport',
				address: 'Depalpur Road, Indore, Madhya Pradesh, India',
				cityId: 15,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				name: 'Dr. Babasaheb Ambedkar International Airport',
				address: 'Sonegaon, Nagpur, Maharashtra, India',
				cityId: 16,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				name: 'Biju Patnaik International Airport',
				address: 'Aerodrome Area, Bhubaneswar, Odisha, India',
				cityId: 17,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				name: 'Lal Bahadur Shastri International Airport',
				address: 'Babatpur, Varanasi, Uttar Pradesh, India',
				cityId: 18,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				name: 'Chaudhary Charan Singh International Airport',
				address: 'Amausi, Lucknow, Uttar Pradesh, India',
				cityId: 19,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				name: 'Veer Savarkar International Airport',
				address: 'Lamba Line, Port Blair, Andaman and Nicobar Islands, India',
				cityId: 20,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
		]);
	},

	async down(queryInterface, Sequelize) {
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		 */
	},
};
