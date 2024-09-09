const regions = [
  { id: 1, name: 'Москва' },
  { id: 2, name: 'Санкт-Петербург' },
  { id: 3, name: 'Сочи' },
];

const hotels = [
  {
    name: 'Отель "Азимут"',
    regionId: 1,
  },
  {
    name: 'Отель "CПБ"',
    regionId: 2,
  },
  {
    name: 'Отель "SEA BREEZE"',
    regionId: 3,
  },
];

const roomTypes = [
  { id: 1, name: 'Стандарт', capacity: 2 },
  { id: 2, name: 'Люкс', capacity: 2 },
  { id: 3, name: 'Апартаменты', capacity: 4 },
];

const roomStatuses = [
  { id: 1, name: 'Свободен' },
  { id: 2, name: 'Занят' },
];

const hotelRooms = [
  {
    hotelId: 1,
    rooms: [
      {
        number: '201',
        typeId: 1,
        statusId: 1,
      },
      {
        number: '202',
        typeId: 2,
        statusId: 1,
      },
    ],
  },
];

const changeRoomStatus = (hotelId, roomNumber, hotelRoom) => {
  const hotel = hotelRoom.find((getHotel) => getHotel.hotelId === hotelId);

  const room = hotel.rooms.find((hotelsRoom) => hotelsRoom.number === roomNumber);

  const currentStatus = roomStatuses.find((status) => status.id === room.statusId);

  room.statusId = currentStatus.id === 1 ? 2 : 1;

  console.log(`Статус номера ${roomNumber} успешно изменен.`);
};

const hotelGuest = {
  fullName: '',
  contactPhone: '',
};

const Payer = {
  name: '',
  type: '',
  guests: [],
};

const guest1 = {
  fullName: 'Иванов Иван Иванович',
  contactPhone: '+79991234567',
};

const payer1 = {
  name: 'ИП Петров',
  type: 'юридическое лицо',
  guests: [guest1],
};

const guest2 = {
  fullName: 'Петрова Ольга Петровна',
  contactPhone: '+79991234568',
};

payer1.guests.push(guest2);

console.log('Информация о плательщике:');
console.log('Наименование:', payer1.name);
console.log('Вид плательщика:', payer1.type);

console.log('\nИнформация о постояльцах:');
payer1.guests.forEach((guest, index) => {
  console.log(`Постоялец ${index + 1}:`);
  console.log('ФИО:', guest.fullName);
  console.log('Контактный телефон:', guest.contactPhone);
});

export {
  regions, hotels, roomTypes, hotelRooms, changeRoomStatus, hotelGuest, Payer,
};
