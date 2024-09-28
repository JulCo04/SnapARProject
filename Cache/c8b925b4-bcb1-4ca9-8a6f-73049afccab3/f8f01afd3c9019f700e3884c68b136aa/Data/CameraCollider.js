var collider = script.getSceneObject().getComponent("Physics.ColliderComponent");
 
// Print overlap events.
collider.onOverlapEnter.add(function (e) {
    print("OverlapEnter(" + e.overlap.id + "): " + e.overlap.collider);
    var collidedObject = e.overlap.collider.getSceneObject();
    collidedObject.destroy();
    
});
collider.onOverlapStay.add(function (e) {
    var overlapCount = e.currentOverlapCount;
    if (overlapCount == 0) {
        return;
    }
    var overlaps = e.currentOverlaps;
    for (var i = 0; i < overlaps.length; ++i) {
        var overlap = overlaps[i];
        print("Overlap[" + i + "]: id=" + overlap.id + ", collider=" + overlap.collider);
    }
});
collider.onOverlapExit.add(function (e) {
    print("OverlapExit(" + e.overlap.id + ")");
});