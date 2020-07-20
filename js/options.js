import shaders from './gl/shaders';
import f from './fonts';

const options = [
  {
    word: 'ENDLESS',
    color: '#ffffff',
    fill: '#000000',
    geometry: new THREE.TorusKnotGeometry(9, 3, 768, 3, 4, 3),
    position: {
      texture: [-0.965, -0.4, 0],
      mesh: [0, 0, 0]
    },
    scale: [0.008, 0.04, 1],
    shaders: {
      vertex: shaders.vertex.demo1,
      fragment: shaders.fragment.demo1
    },
    font: {
      file: f.file.demo1,
      atlas: f.atlas.demo1
    },
  },
]

export default options;