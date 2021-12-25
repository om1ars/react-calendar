import dayjs from 'dayjs'


export function getMonth(month = dayjs().month()) {
    const year = dayjs().year()
    const firstDayOfMonth = dayjs(new Date(year, month, 1)).day()
    const da

}