//@input Asset.ObjectPrefab pelletPrefab

script.createEvent("OnStartEvent").bind(function() {
    var pelletArr = [];

    // Set the starting position
    var startPosition = new vec3(0, -50, 0); // Adjust this as necessary

    for (let i = 0; i < 10; i++) {
        
        var pellet = script.pelletPrefab.instantiate(script.getSceneObject());
        
        var position = new vec3(startPosition.x, startPosition.y, startPosition.z + (i * 25) * -1);

        pellet.getTransform().setWorldPosition(position);
        
        // Bind touch event to the pellet
        pellet.api.touchEvent.bind(function(eventData) {
            if (eventData.isTouching) {
                // Destroy the pellet when it is touched
                pellet.destroy();
                // Optionally, remove the pellet from the array if needed
                pelletArr = pelletArr.filter(p => p !== pellet);
            }
        });

        pelletArr.push(pellet);
    }
});