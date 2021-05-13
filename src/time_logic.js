let today = new Date();
let maggieDeathDate = new Date('April 8, 2013 06:28:00')

const leapYearFinder = () => {
    let leapYears = [];
    let todaysYear = today.getFullYear();

    for (let i = 2013; i < todaysYear; i ++) {
        let currentRemainder = i % 4;
        if (currentRemainder === 0) {
            leapYears.push(i);
        }
    };

    let daysToSub = leapYears.length;
    return daysToSub;
}

let leapDays = leapYearFinder();

const calculator = () => {
    let dayDiff = ((((today - maggieDeathDate) / 1000) / 60) / 60) / 24;
    dayDiff -= leapDays;

    let years = Math.round(dayDiff / 365)
    let months = Math.round((dayDiff % 365) / 30)
    let days = Math.round((dayDiff % 365) % 30)

    return `Yes! Margaret Thatcher is indeed dead. She has been dead for ${years} years, ${months} month(s), and ${days} day(s).`
}

const sentence = calculator();

export { sentence };
