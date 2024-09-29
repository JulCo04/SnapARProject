//@input SceneObject targetObject
//@input SceneObject cameraObject
//@input Component.Text distance
//@input float speed = 1.0

function update(eventData) {
    if (!script.targetObject || !script.cameraObject) {
        print("Error: One or more objects are not assigned.");
        return;
    }

    var cameraTransform = script.cameraObject.getTransform();
    var targetTransform = script.targetObject.getTransform();
    
    var targetPos = targetTransform.getWorldPosition();
    var cameraPos = cameraTransform.getWorldPosition();
    script.distance.text = (Math.sqrt((targetPos.x - cameraPos.x) ** 2 + (targetPos.y - cameraPos.y) ** 2 ) / 100).toFixed(2) + "m";
    
    var direction = cameraTransform.getWorldPosition().sub(targetTransform.getWorldPosition()).normalize();
    var newPosition = targetTransform.getWorldPosition().add(direction.uniformScale(script.speed * getDeltaTime()));
    targetTransform.setWorldPosition(newPosition);
}


script.createEvent("UpdateEvent").bind(update);
