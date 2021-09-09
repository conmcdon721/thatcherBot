
const calculator = () => {
    let today = new Date();
    let maggieDeathDate = new Date('April 8, 2013 06:28:00')
    
    const leapYearFinder = () => {
        let leapYears = [];
        let todaysYear = today.getFullYear();
    
        for (let i = 2013; i < todaysYear; i ++) {
            let currentRemainder = i % 4;
            if (currentRemainder === 0) {
                leapYears.push(i);
            };
        };
    
        let leapYearDays = leapYears.length;
        return leapYearDays;
    }
    
    let leapDays = leapYearFinder();

    /* ------------------------------------------------------------------------------------------------------------------------------------------------ */

    const monthArray = [30, 61, 91, 122, 153, 183, 214, 244, 275, 306, 334]

    let milliSinceDeath = today - maggieDeathDate
    let hoursSinceDeath = (((milliSinceDeath / 1000) / 60) / 60)
    let daysSinceDeath = (((milliSinceDeath / 1000) / 60) / 60) / 24;
    let trueDaysSinceDeath = Math.floor(daysSinceDeath % 365) - leapDays;
    
    let years = Math.floor(daysSinceDeath / 365)
    
    let monthsInHours = trueDaysSinceDeath * 24;
    let yearsInHours = (years * 8760) + (leapDays * 24);

    let months
    let days
    
    for (let i = 0; i < monthArray.length; i++) {
        if (trueDaysSinceDeath <= monthArray[i]) {
            months = i + 1;
            days = trueDaysSinceDeath - monthArray[i];
            break
        }
    }

    let hours = (Math.floor(hoursSinceDeath - yearsInHours - monthsInHours)) - 4;
    let mins = Math.floor(((hoursSinceDeath - yearsInHours - monthsInHours) - hours) * 60);
    
    return `Yes! Margaret Thatcher is indeed dead. She has been dead for ${years} years, ${months} month(s), ${days} day(s), ${hours} hour(s), and ${mins} minute(s).`
}

module.exports.calculator = calculator;