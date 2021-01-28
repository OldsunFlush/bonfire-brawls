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
import { forEach, random, shuffle, take, clone } from 'lodash-es'
import Rooms from '@/constants/rooms'

export default {
  name: 'Tavern',
  data() {
    return {
      suppRooms: random(1, 5),
      roomsKey : ['Mainroom', 'Kitchen', 'Cellar'],
      rooms: [],
      board: []
    }
  },
  computed: {
    roomNumber() {
      const roomList = []
      forEach(Rooms, room => {
        roomList.push(room.nb)
      })
      return roomList
    },
    initRooms() {
      // le probleme dans cette facon de faire c'est qu'on aura qu'une seule occurence type de room alors que dans notre cas il pourrait y avoir 2 cuisine 3 dortoirs etc
      // create empty room list
      const roomList = []
      // shuffle room types
      shuffle(Rooms)
      // get each room recurrences
      // push them into array
      // il n'y a pas de nb dans les rooms c'est juste pour les assets
      // en tout cas gg t'as bien utilisé les fonctions lodash :D
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
  },
  mounted () {
    // TODO instancier le board avec 50 * 50
    // grosso modo pour le moment j'attends un tableau avec des cases vides [] et des cases remplis avec le nom de la piece ['Cuisine']
    /* exemple 
    [][][][][][][][][][][][][][][][][][][][][][][][][]
    [][][][][][][][][][][][][][][][][][][][][][][][][]
    [][][][][]['Cuisine']['Cuisine']['Cuisine'][][][][][][][][][][][][][][][][][]
    [][][][][]['Cuisine']['Cuisine']['Cuisine'][][][][][][][][][][][][][][][][][]
    [][][][][]['Cuisine']['Cuisine']['Cuisine'][][][][][][][][][][][][][][][][][]
    [][][][][][][][][][][]['Debarras']['Debarras'][][][][][][][][][][][][]
    [][][][][][][][][][][]['Debarras']['Debarras'][][][][][][][][][][][][]
    [][][][][][][][][][][][][][][][][][][][][][][][][]
    [][][][][][][][][][][][][][][][][][][][][][][][][]

    du coups pour chaque case vide ça serait un carreau avec border couleur blanche 
    et pour les pieces tu as qu'as assigné la couleur que tu veux pour chaque piece
    */

    // On va ajouter des rooms randoms en plus des rooms déja définies
    for (let i = 0; i < this.suppRooms; i++) {
      // on récupère les clés des pièces
      // ça nous renvoie un array avec ['Bathroom', 'Bedroom'etc]
      const keys = Object.keys(Rooms);
      // on va pick un random entre 0 et du nombre de clé
      const rand = random(0, keys.length - 1)
      // et on va push les nouvelles clés dans la liste de rooms
      this.roomsKey.push(keys[rand])
    }

    // ensuite pour chaque clé qu'on a dans tavernRooms
    // On va généré un Objet contenant les valeurs de la piece en question
    forEach(this.roomsKey, key => {
        // on récupère les infos de la pièce grâce à ça clé 
        // on va cloné les infos pour ne pas modifier les data dans le fichier de référence
        const room = clone(Rooms[key])
        // le probleme avec les random dans les size_x etc c'est qu'ils vont etre généré au moment ou on va export
        // donc si on a 2 fois la meme piece elle va avoir la meme taille :/
        // donc j'ai remis des min / max
        room.size_x = random(room.size_x.min, room.size_x.max)
        room.size_y = random(room.size_y.min, room.size_y.max)
        

        // TODO ajouter les assets de façon random
        /*const assets = []
         forEach(room.assets, asset => {
           const nb = random(nb.min, nb.max)
           for etc
         })*/

         this.rooms.push(room)
      })
      console.log(this.rooms)
  },
}
</script>

<style lang="scss" scoped>

</style>
