
export type Dog = {
  name: string
  owner: string
  breed: string
  id: string
}

export type Booking = {
  dog: Dog
  dateTime: Date
  user: User
}

export type User = {
  username: string
  name: string
  address: string
  dogs: Dog[]
}

export type TimeSlot = Record<number, SlotItem>

export type SlotItem ={
  isBooked: boolean
  dog?: Dog
  isOwnDog?: boolean
}

export type Walks = Record<string, TimeSlot[]>[]