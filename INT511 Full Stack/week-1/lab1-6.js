function getTotalBalance(accounts, type) {
    return accounts
        .filter(function (accounts) { return accounts.type === type; })
        .reduce(function (sum, accounts) { return sum + accounts.balance; }, 0);
}
var accounts = [
    { id: 1, type: 1, balance: 50 },
    { id: 2, type: 2, balance: 100 },
    { id: 3, type: 1, balance: 50 },
    { id: 4, type: 2, balance: 100 }
];
var total = getTotalBalance(accounts, 1);
console.log(total);
