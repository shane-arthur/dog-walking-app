import { TimeSlot } from "../models";
import { TIME_SLOTS } from '../constants'

export function createDefaultTimeSlot(): TimeSlot {
    let walks = {}
     TIME_SLOTS.forEach(time => {
        walks = {...walks, [time]: { isBooked: false } }
    })
    return walks
}