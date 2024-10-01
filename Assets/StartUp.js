// Script A: Pellet Instantiation and Calling Movement

//@input Asset.ObjectPrefab pelletPrefab
//@input SceneObject startScreen
//@input SceneObject targetObject
//@input SceneObject cameraObj
//@input float speed = 1.0

const NUM_SPHERES = 5;

// Function to instantiate pellets
function instantiatePellets() {
    var startPosition = new vec3(0, -5, 0); // Adjust this as necessary

    for (let i = 0; i < NUM_SPHERES; i++) {
        var pellet = script.pelletPrefab.instantiate(script.startScreen.getParent());
        var position = new vec3(startPosition.x, startPosition.y, -100 + startPosition.z + (i * 100) * -1);
        pellet.getTransform().setWorldPosition(position);
    }
    print("Pellets Created");
}

// Function to call the movement logic in Script B
function callMoveTowardsUser() {
    // Get Script B component from the target object
    var movementScript = script.targetObject.getComponent("Component.ScriptComponent"); 
    if (movementScript && movementScript.api.moveTowardsUser) {
        movementScript.api.moveTowardsUser(); // Call the exposed function from Script B
        print("MoveTowardUser called from Script A");
    } else {
        print("Error: Movement script or function not found");
    }
}

function goAwayGhost() {
    var camPos = script.cameraObj.getTransform().getWorldPosition();
    script.targetObject.getTransform().setWorldPosition(new vec3(400 + camPos.x, 0, 400 + camPos.z));
}

function onTouch() {
    script.startScreen.enabled = false;
    print("Start Pellets");
    instantiatePellets();      // Instantiate the pellets
    callMoveTowardsUser();     // Call movement function from Script B
    goAwayGhost();
    script.targetObject.enabled = true;
}

// Register the touch event to call the function
script.createEvent("OnStartEvent").bind(onTouch);
