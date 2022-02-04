let restaurant = {
  name: "Olive Garden",
  guestCapacity: 75,
  guestCount: 73,
  checkAvailability: function (partySize) {
    let seatsLeft = this.guestCapacity - this.guestCount;
    return partySize <= seatsLeft;
  },
};

let staus = restaurant.checkAvailability(4);

console.log(staus);
