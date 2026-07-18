function calculateEfficiency(produced, expected) {

    if (expected <= 0) return 0;

    return Number(((produced / expected) * 100).toFixed(2));

}

module.exports = {
    calculateEfficiency
};