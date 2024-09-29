//@input Component.Text textComponent
//@input Asset.ObjectPrefab pelletPrefab

const DISTANCE = 300;

var collider = script.getSceneObject().getComponent("Physics.ColliderComponent");
var count = 0; 

// Print overlap events.
collider.onOverlapEnter.add(function (e) {   
  
    var collidedObj = e.overlap.collider.getSceneObject();
    
    if(collidedObj.name !== "Pellet") return;    
    
    const rotation = script.getSceneObject().getTransform().getWorldRotation();    
    const newPos = script.getSceneObject().getTransform().getLocalPosition();   
    
    collidedObj.destroy(); 
    
    count++;
    script.textComponent.text = count.toString();
    
    var pellet = script.pelletPrefab.instantiate(script.getSceneObject().getParent())   
    var position = new vec3(newPos.x - Math.sin(rotation.y*Math.PI) * DISTANCE, newPos.y - 5, newPos.z - Math.cos(rotation.y*Math.PI) * DISTANCE);
    
    pellet.getTransform().setWorldPosition(position);
});