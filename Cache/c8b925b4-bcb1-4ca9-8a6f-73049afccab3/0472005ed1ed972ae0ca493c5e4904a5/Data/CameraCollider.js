// Create a dummy scene object to represent the camera for collision detection.
var cameraObj = scene.createSceneObject('CameraObject');
var cameraBody = cameraObj.createComponent('Physics.BodyComponent');

// The default shape for a collider/body is a sphere. Change it to a box (using the default size).
cameraBody.shape = Shape.createBoxShape();

// Print collision events.
// The event 'collider' is some other body/collider component that hit this one.
cameraBody.onCollisionEnter.add(function (e) {
  var collision = e.collision;
  print('CollisionEnter(' + collision.id + '): ---> ' + collision.collider);
});

cameraBody.onCollisionStay.add(function (e) {
  var collision = e.collision;
  print('CollisionStay(' + collision.id + '): ---> ' + collision.collider);
});

cameraBody.onCollisionExit.add(function (e) {
  var collision = e.collision;
  print('CollisionExit(' + collision.id + '): ---> ' + collision.collider);
});

