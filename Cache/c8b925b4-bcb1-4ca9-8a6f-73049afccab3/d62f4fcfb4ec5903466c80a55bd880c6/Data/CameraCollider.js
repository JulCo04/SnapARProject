var camera = script.getSceneObject();

camera.onCollisionEnter.add(function (e) {
  var collision = e.collision;
  print('CollisionEnter(' + collision.id + '): ---> ' + collision.collider);
});