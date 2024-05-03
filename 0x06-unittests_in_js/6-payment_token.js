function getPaymentTokenFromAPI(success) {
    return new Promise((resolve, reject) => {
        if (success) {
            resolve({ data: 'Successful response from the API' });
        } else {
            // If success is false, do nothing
            resolve();
        }
    });
}

module.exports = getPaymentTokenFromAPI;

