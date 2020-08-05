export default function convertHoursToMinutes(time: string){
    
    //  00:00

    const [ hours , minutes ] = time.split(':').map(Number)

    const timeInMinutes = ( hours * 60 ) + minutes

    return timeInMinutes
}