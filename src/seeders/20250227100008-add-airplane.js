'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Airplanes', [
			{
				modelNumber: 'Airbus A380',
				capacity: 525,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				modelNumber: 'Boeing 747-8',
				capacity: 467,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				modelNumber: 'Boeing 777-300ER',
				capacity: 300,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				modelNumber: 'Airbus A350-900',
				capacity: 280,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				modelNumber: 'Boeing 787-9 Dreamliner',
				capacity: 290,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				modelNumber: 'Boeing 737 MAX 8',
				capacity: 160,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				modelNumber: 'Airbus A320',
				capacity: 150,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				modelNumber: 'Embraer E190',
				capacity: 90,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				modelNumber: 'Bombardier CRJ900',
				capacity: 70,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				modelNumber: 'Dash 8 Q400',
				capacity: 60,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
		]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
