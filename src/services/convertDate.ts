export function convertDate(date: number) {
    return new Date(date).toLocaleString("en-UK", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
    })
}
