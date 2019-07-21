var customerName = 'bob';

function upperCaseCustomerName(){
  customerName = customerName.toUpperCase();
}

var bestCustomer;

function setBestCustomer(){
  bestCustomer = 'not bob';
}

function overWriteBestCustomer(){
  bestCustomer = 'maybe bob';
}

const leastFavoriteCustomer = 'bob';

function changeLeastFavoriteCustomer(){
  leastFavoriteCustomer = 'not bob';
}

let favoriteCustomer = 'bob';
function attemptTwoFavoriteCustomers(){
  let favoriteCustomer = 'not bob';

  throw SyntaxError(SyntaxError)
}
