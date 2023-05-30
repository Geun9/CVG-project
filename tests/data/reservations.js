const testReservation = [
  {
    id: 1, 
    reservationNumber: 'reservation-number-test-12345',
    startDate: '2023-06-03',
    endDate: '2023-06-05',
    totalPrice: 10000.00,
    totalMembers: 1,
    userId: 1,
    reservationStatusId: 3,
    createdAt: '2023-05-26 01:29:44',
    updatedAt: null,
    deletedAt: null
  },
  {
    id: 2, 
    reservationNumber: 'reservation-number-test-12345',
    startDate: '2023-05-03',
    endDate: '2023-05-05',
    totalPrice: 40000.00,
    totalMembers: 4,
    userId: 1,
    reservationStatusId: 2,
    createdAt: '2023-04-29 05:23:35',
    updatedAt: null,
    deletedAt: null
  }
];

module.exports = { 
  testReservation
}