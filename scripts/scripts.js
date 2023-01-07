window.onload = function(){
    var canvas = document.getElementById("canvas");
    var gl = canvas.getContext("webgl");
    
    if (!gl) {
      // WebGL is not supported, fall back to something else
    }
    
    // Set up the scene, camera, and renderer
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(75, canvas.width / canvas.height, 0.1, 1000);
    camera.position.z = 5;
    
    var renderer = new THREE.WebGLRenderer({canvas: canvas});
    
    // Create your 3D objects and add them to the scene
    var geometry = new THREE.BoxGeometry(1, 1, 1);
    var material = new THREE.MeshBasicMaterial({color: 0x00ff00});
    var cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    
    // Render the scene
    renderer.render(scene, camera);
    
};