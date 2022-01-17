let restaurant = {
  name: "TRH",
  guestCapacity: 75,
  guestCount: 73,
  checkAv: function (partySize) {
    let seatsLeft = this.guestCapacity - this.guestCount;
    return partySize <= seatsLeft;
  },
};

let status = restaurant.checkAv(4);

console.log(status);
