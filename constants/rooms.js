import { random } from 'lodash-es'

const Rooms = {
  Bathroom: {
    name: 'bathroom',
    size_x: {
      min: 3,
      max: 5
    },
    size_y: {
      min: 3,
      max: 5
    },
    floor_type: 'wood',
    assets: [
      {
        type: 'bathtub',
        nb: 1,
        size_x: 3,
        size_y: 1,
        model: ''
      },
      {
        type: 'chest',
        nb: random(0, 1),
        size_x: 1,
        size_y: 1,
        model: ''
      },
    ]
  },
  Bedroom: {
    name: 'bedroom',
    size_x: {
      min: 5,
      max: 8
    },
    size_y: {
      min: 5,
      max: 5
    },
    floor_type: 'wood',
    assets: [
      {
        type: 'bed',
        nb: 1,
        size_x: 3,
        size_y: 4,
        model: ''
      },
      {
        type: 'chest',
        nb: random(0, 1),
        size_x: 2,
        size_y: 1,
        model: ''
      },
      {
        type: 'table',
        nb: random(0, 1),
        size_x: 2,
        size_y: 2,
        model: ''
      }
    ]
  },
  Cellar: {
    name: 'cellar',
    size_x: {
      min: 3,
      max: 5
    },
    size_y: {
      min: 3,
      max: 5
    },
    floor_type: 'wood',
    assets: [
      {
        type: 'table',
        nb: random(0, 1),
        size_x: 2,
        size_y: 2,
        model: ''
      }
    ]
  },
  Dormitory: {
    name: 'dormitory',
    size_x:{
      min: 10,
      max: 15
    },
    size_y: {
      min: 10,
      max: 15
    },
    floor_type: 'wood',
    assets: [
      {
        type: 'bed',
        nb: random(2, 4),
        size_x: 3,
        size_y: 4,
        model: ''
      }
    ]
  },
  Kitchen: {
    name: 'kitchen',
    size_x: {
      min: 6,
      max: 10
    },
    size_y: {
      min: 6,
      max: 10
    },
    floor_type: 'stone',
    assets: [
      {
        type: 'table',
        nb: random(0, 1),
        size_x: 2,
        size_y: 3,
        model: ''
      },
      {
        type: 'table_with_food',
        nb: random(1, 2),
        size_x: 2,
        size_y: 3,
        model: ''
      },
      {
        type: 'oven',
        nb: 1,
        size_x: 2,
        size_y: 2,
        model: ''
      },
    ]
  },
  Mainroom: {
    name: 'mainroom',
    size_x: {
      min: 12,
      max: 20
    },
    size_y: {
      min: 12,
      max: 20
    },
    floor_type: 'wood',
    assets: [
      {
        type: 'counter',
        nb: 1,
        size_x: 4,
        size_y: 1,
        model: ''
      },
      {
        type: 'table',
        nb: random(1, 3),
        size_x: 2,
        size_y: 2,
        model: ''
      },
      {
        type: 'table_with_food',
        nb: random(1, 3),
        size_x: 2,
        size_y: 2,
        model: ''
      }
    ]
  }
}

export default Rooms
