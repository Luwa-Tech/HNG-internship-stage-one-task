const date = document.querySelector('[data-testid="currentDayOfTheWeek"]')
const utc = document.querySelector('[data-testid="currentUTCTime"]')

const UTCTime = new Date()
const UTCHours = UTCTime.getUTCHours()
const UTCMinutes = UTCTime.getUTCMinutes()
const UTCSeconds = UTCTime.getUTCSeconds()


const newDate = new Date()
const currentDayOfTheWeek = newDate.getDay()
const weekday = ['Sunday', 'Monday', 'Tuesday',
'Wednesday', 'Thursday', 'Friday', 'Saturday'
]

date.innerText= `Today is ${weekday[currentDayOfTheWeek]}!`
utc.innerText = `${UTCHours}:${UTCMinutes}:${UTCSeconds} UTC`

console.log(weekday[currentDayOfTheWeek])