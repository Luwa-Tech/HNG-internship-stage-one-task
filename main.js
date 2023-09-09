const date = document.querySelector('[data-testid="currentDayOfTheWeek"]')
console.log(date)

const newDate = new Date()
const currentDayOfTheWeek = newDate.getDay()
const weekday = ['Sunday', 'Monday', 'Tuesday',
'Wednesday', 'Thursday', 'Friday', 'Saturday'
]

date.innerText= `Today is ${weekday[currentDayOfTheWeek]}!`

console.log(weekday[currentDayOfTheWeek])