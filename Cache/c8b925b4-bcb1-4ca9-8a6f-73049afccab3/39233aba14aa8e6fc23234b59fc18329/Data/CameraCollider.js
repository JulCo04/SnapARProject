// Create a dummy scene object to represent the camera for collision detection.
var cameraObj = scene.createSceneObject('CameraObject');
var cameraBody = cameraObj.createComponent('Physics.BodyComponent');

// Change the shape to a box (using the default size).
cameraBody.shape = Shape.createBoxShape();

// Position the camera object at the camera's location.
cameraObj.transform.position = camera.transform.position;

// Print collision events for the dummy camera object.
cameraBody.onCollisionEnter.add(function (e) {
    var collision = e.collision;
    print('CollisionEnter(' + collision.id + '): ---> ' + collision.collider);
});

