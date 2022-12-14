export function getPreviousDate(date: string | number | Date, distance = 7) {
    let d
    const type = typeof date

    if (type === 'string' || type === 'number') {
        d = new Date(date)
    } else if (date instanceof Date) {
        d = date
    } else {
        return
    }

    const dates = []
    const day = 86400 * 1000
    const current = d.getTime()
    for (let i = 1; i < distance + 1; i++) {
        const p = new Date(current - day * i)
        dates.unshift(`${p.getMonth() + 1}.${p.getDate()}`)
    }

    return dates;
}