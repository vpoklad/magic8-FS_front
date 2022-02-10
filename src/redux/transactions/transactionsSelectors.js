const getTransactions = state => state.transactions.transactions;
const currentDate = state => state.transactions.currentDate;

const transactionsSelectors = {
    getTransactions,
    currentDate
}


export default transactionsSelectors

