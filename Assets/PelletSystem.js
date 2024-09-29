<<<<<<< HEAD
//@input Asset.ObjectPrefab pelletPrefab

const NUM_SPHERES = 5;

script.createEvent("OnStartEvent").bind(function() {
    var startPosition = new vec3(0, -5, 0); // Adjust this as necessary

    for (let i = 0; i < NUM_SPHERES; i++) {
        
        var pellet = script.pelletPrefab.instantiate(script.getSceneObject());
        
        var position = new vec3(startPosition.x, startPosition.y, 100 + startPosition.z + (i * -100));

        pellet.getTransform().setWorldPosition(position);

    }
    
});
=======
////@input Asset.ObjectPrefab pelletPrefab
//
//const NUM_SPHERES = 5;
//
//script.createEvent("OnStartEvent").bind(function() {
//    var startPosition = new vec3(0, -5, 0); // Adjust this as necessary
//
//    for (let i = 0; i < NUM_SPHERES; i++) {
//        
//        var pellet = script.pelletPrefab.instantiate(script.getSceneObject());
//        
//        var position = new vec3(startPosition.x, startPosition.y, startPosition.z + (i * 100) * -1);
//
//        pellet.getTransform().setWorldPosition(position);
//
//    }
//    
//});
//
>>>>>>> 765f9a5dfb5715ee36087fe47017256c9d3963f1
