<template>
  <div class="Tavern">
    <div class="container">
      <h2>Tavern</h2>
      <!-- <ul>
        <li v-for="(room, index) in Rooms" :key="index">
          {{ room.name }}
        </li>
      </ul> -->
    </div>
  </div>
</template>

<script>
import { forEach, random, shuffle, take } from 'lodash-es'
import Rooms from '@/constants/rooms'

export default {
  name: 'Tavern',
  computed: {
    roomNumber() {
      const roomList = []
      forEach(Rooms, room => {
        roomList.push(room.nb)
      })
      return roomList
    },
    initRooms() {
      // create empty room list
      const roomList = []
      // shuffle room types
      shuffle(Rooms)
      // get each room recurrences
      // push them into array
      forEach(Rooms, room => {
        const repetition = room.nb
        for (let i = 0; i < repetition; i++) {
          roomList.push(room)
        }
      })
      // randomize displayed rooms number and return rooms
      //const roomNumber = random(3, 6)
      //return take(roomList, roomNumber)
      return take(roomList, 6)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
