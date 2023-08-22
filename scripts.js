// scripts.js

const STATUS_MAP = {
    shelf: {
        color: 'green',
        canReserve: true,
        canCheckout: true,
        canCheckIn: false,
    },
    reserved: {
        color: 'blue',
        canReserve: false,
        canCheckout: true,
        canCheckIn: false,
    },
    overdue: {
        color: 'red',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    },
    checkedOut: {
        color: 'orange',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    }
}

// Edit below line 

const book1 = {
status: document.querySelector('#book1 .status'),
reserve: document.querySelector('#book1 .reserve'),
checkout: document.querySelector('#book1 .checkout'),
checkin: document.querySelector('#book1 .checkin'),
}


const book2 =  {
status: document.querySelector('#book2 .status'),
reserve: document.querySelector('#book2 .reserve'),
checkout: document.querySelector('#book2 .checkout'),
checkin: document.querySelector('#book2 .checkin'),
}

const book3 = {
    status: document.querySelector('#book3 .status'),
    reserve: document.querySelector('#book3 .reserve'),
    checkout: document.querySelector('#book3 .checkout'),
    checkin: document.querySelector('#book3 .checkin'),
}


book1.reserve.style.color = 'black'
book1.checkout.style.color = 'black'
book1.checkin.style.color = 'black'
book1.status.style.color = STATUS_MAP.overdue.color
book1.reserve = STATUS_MAP.reserved.canReserve ? book1.reserve.enabled : book1.reserve.disabled
book1.checkout = STATUS_MAP.checkedOut.canCheckout ? book1.checkout.enabled : book1.checkout.disabled
book1.checkin = STATUS_MAP.shelf.canCheckIn ? book1.checkin.enabled :  book1.checkin.disabled

book2.reserve.style.color = 'black'
book2.checkout.style.color = 'black'
book2.checkin.style.color = 'black'
book2.status.style.color = STATUS_MAP.reserved.color
book2.reserve = STATUS_MAP.reserved.canReserve ? book2.reserve.enabled : book2.reserve.disabled
book2.checkout = STATUS_MAP.checkedOut.canCheckout ? book2.checkout.enabled : book2.checkout.disabled
book2.checkin = STATUS_MAP.shelf.canCheckIn ? book2.checkin.enabled :  book2.checkin.disabled

book3.reserve.style.color = 'black'
book3.checkout.style.color = 'black'
book3.checkin.style.color = 'black'
book3.status.style.color = STATUS_MAP.shelf.color
book3.reserve = STATUS_MAP.reserved.canReserve ? book3.reserve.enabled : book3.reserve.disabled
book3.checkout = STATUS_MAP.checkedOut.canCheckout ? book3.checkout.enabled : book3.checkout.disabled
book3.checkin = STATUS_MAP.shelf.canCheckIn ? book3.checkin.enabled :  book3.checkin.disabled