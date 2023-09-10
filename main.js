const date = document.querySelector('[data-testid="currentDayOfTheWeek"]')
const utc = document.querySelector('[data-testid="currentUTCTime"]')

const currentDayOfTheWeek = () => {
    const newDate = new Date()
    const dayOfTheWeek = newDate.getDay()
    const weekday = ['Sunday', 'Monday', 'Tuesday',
    'Wednesday', 'Thursday', 'Friday', 'Saturday'
    ]

    date.innerText= `Current Day of The Week: ${weekday[dayOfTheWeek]}`
}

const utcTime = () => {
    const currentUTC = Date.now()
    utc.innerText = `Current UTC Time: ${currentUTC}`
}

currentDayOfTheWeek()
utcTime()