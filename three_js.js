var THREE = require('n3d-threejs')
 
var width = window.innerWidth
var height = window.innerHeight
var scene, camera, renderer, cube
 
function init(){
  scene = new THREE.Scene()
  camera = new THREE.PerspectiveCamera(45, width/height, 0.1, 10000)
 
  renderer = new THREE.WebGLRenderer()
  renderer.setSize(width, height)
  document.body.appendChild(renderer.domElement)
 
  var geometry = new THREE.BoxGeometry(1, 1, 1)
  var material = new THREE.MeshBasicMaterial({color: 0x00ff00})
  cube = new THREE.Mesh(geometry, material)
  scene.add(cube)
 
  camera.position.z = 5
}
 
function animate(){
  requestAnimationFrame(animate)
  update()
  render()
}
 
function update(){
  cube.rotation.x += 0.1
  cube.rotation.y += 0.1
}
 
function render(){
  renderer.render(scene, camera)
}
 
init()
animate()
