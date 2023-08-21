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
status: document.querySelector('.status'),
reserve: document.querySelector('.reserve'),
checkout: document.querySelector('.checkout'),
checkin: document.querySelector('.checkin'),
}
const book2 = {
status: document.querySelector('.status'),
reserve: document.querySelector('.reserve'),
checkout: document.querySelector('.checkout'),
checkin: document.querySelector('.checkin'),
}

const book3 = {
    status: document.querySelector('.status'),
    reserve: document.querySelector('.reserve'),
    checkout: document.querySelector('.checkout'),
    checkin: document.querySelector('.checkin'),
}

book1.checkin[0].color = none
book1.status[0].style.color = STATUS_MAP.status.color
book1.reserve[0] = STATUS_MAP.status.canReserver ? 'enabled' : 'disabled'
book1.checkout[0] = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled'
book1.checkin[0] = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled'

book2.checkin[1].color = none
book2.status[1].style.color = STATUS_MAP.status.color
book2.reserve[1] = STATUS_MAP.status.canReserver ? 'enabled' : 'disabled'
book2.checkout[1] = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled'
book2.checkin[1] = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled'

book3.checkin[2].color = none
book3.status[2].style.color = STATUS_MAP.status.color
book3.reserve[2] = STATUS_MAP.status.canReserver ? 'enabled' : 'disabled'
book3.checkout[2] = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled'
book3.checkin[2] = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled'