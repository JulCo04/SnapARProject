//@input Asset.ObjectPrefab pelletPrefab

script.createEvent("OnStartEvent").bind(function() {
    var pelletArr = [];

    // Set the starting position
    var startPosition = new vec3(0, -50, 0); // Adjust this as necessary

    for (let i = 0; i < 10; i++) {
        
        var pellet = script.pelletPrefab.instantiate(script.getSceneObject());
        
        var position = new vec3(startPosition.x, startPosition.y, startPosition.z + (i * 25) * -1);

        pellet.getTransform().setWorldPosition(position);

        pelletArr.push(pellet);
    }
});