// Script B: Movement Logic

//@input SceneObject targetObject
//@input SceneObject cameraObject
//@input float speed = 1.0

function update(eventData) {
    if (!script.targetObject || !script.cameraObject) {
        print("Error: One or more objects are not assigned.");
        return;
    }

    var cameraTransform = script.cameraObject.getTransform();
    var targetTransform = script.targetObject.getTransform();
    var direction = cameraTransform.getWorldPosition().sub(targetTransform.getWorldPosition()).normalize();
    var newPosition = targetTransform.getWorldPosition().add(direction.uniformScale(script.speed * getDeltaTime()));
    targetTransform.setWorldPosition(newPosition);
}

// Expose the movement function to be called from other scripts
script.api.moveTowardsUser = function() {
    print("MoveTowardUser started");
    script.createEvent("UpdateEvent").bind(update);  // Bind the update function to continuously move the object
};

