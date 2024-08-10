interface Accounts {
    id: number,
    type: number,
    balance: number
}

function getTotalBalance(accounts: Array<Accounts>, type: number): number {
    return accounts
    .filter(accounts => accounts.type === type)
    .reduce((sum, accounts) => sum + accounts.balance, 0)
}

let accounts : Array<Accounts> = [
    {id: 1, type: 1, balance: 50},
    {id: 2, type: 2, balance: 100},
    {id: 3, type: 1, balance: 50},
    {id: 4, type: 2, balance: 100}
]

let total = getTotalBalance(accounts, 1)

console.log(total);
