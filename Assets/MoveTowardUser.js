// Script B: Movement Logic

//@input SceneObject targetObject
//@input SceneObject cameraObject
//@input Component.Text distance
//@input float speed = 1.0

//@input SceneObject startMenu
//@input Component.Text score

//var collider = script.targetObject.getComponent("Physics.ColliderComponent")
//collider.onOverlapEnter.add(function(e) {
//    if(e.overlap.collider.getSceneObject().name === "Camera Object") {
//        script.startMenu.enabled = true;
//        script.targetObject.enabled = false;
//        // RESET
//        
//        script.score.text = 0;
//    }
//});

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

// Expose the movement function to be called from other scripts
script.api.moveTowardsUser = function() {
    print("MoveTowardUser started");
    script.createEvent("UpdateEvent").bind(update);  // Bind the update function to continuously move the object
};

