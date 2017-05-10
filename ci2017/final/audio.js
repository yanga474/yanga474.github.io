var audio = document.getElementById('myplayer');

var first=true;
function stopEvent (event) {
  event.preventDefault();
  event.stopPropagation();
}


function playAudio (url, name) {
  audio.autoplay = true;
  audio.src = url;
  audio.play();
}


// ===============================
//       for opengl
// ===============================
if ( ! Detector.webgl ) Detector.addGetWebGLMessage();

var renderer, scene, camera, stats;

var WIDTH = window.innerWidth,
    HEIGHT = window.innerHeight;

var wave_history_size = 128;
var wave_index = 0;
var wave_history_geo = [];
var fft_size = 256;
var wave_height= 25, wave_width=wave_height*6, wave_depth=wave_height*6;
var lines = [];

var controls;
var clock = new THREE.Clock();

function set_wave(data, wave_geo) {
    if(wave_geo == null)
        wave_geo = new THREE.Geometry();
    if(wave_geo.vertices == null || wave_geo.vertices.length == 0){
        wave_geo.vertices = [];
        wave_geo.colors = [];
        for(var i=0;i<data.length;i++) {
            wave_geo.vertices.push(
                new THREE.Vector3(
                    wave_width * i / data.length,
                    data[i] / 256.0 * wave_height,
                    0
                )
            );
            var color = new THREE.Color( 0xffffff );
            color.setHSL( 0.6, 1.0, 1.0 );
            wave_geo.colors.push(color);
        }
        wave_geo.verticesNeedUpdate = true;
        wave_geo.colorsNeedUpdate = true;
    }else {
        for(var i=0;i<data.length;i++) {
            wave_geo.vertices[i].y = data[i] / 256.0 * wave_height;
            wave_geo.colors[i].setHSL( 0.0, 1.0, Math.max(0.3, data[i] / 256.0));
        }
        wave_geo.verticesNeedUpdate = true;
        wave_geo.colorsNeedUpdate = true;
    }

    return wave_geo;
}

function init() {

    camera = new THREE.PerspectiveCamera( 60, WIDTH / HEIGHT, 1, 1000 );
    camera.position.x = 75;
    camera.position.y = 75;
    camera.position.z = 75;
    camera.lookAt(new THREE.Vector3(0,0,0));

    scene = new THREE.Scene();

    // scene.fog = new THREE.Fog( 0x111111, 150, 200 );


    var material = new THREE.LineBasicMaterial( { color: 0xffffff, opacity: 1, linewidth: 3, vertexColors: THREE.VertexColors } );
    analyser.getByteFrequencyData(dataArray);
    for(var i=0;i<wave_history_size;i++) {
        var wave_geo = set_wave(dataArray);
        wave_history_geo.push(wave_geo);
        var line = new THREE.Line(wave_geo, material);
        wave_geo.translate(-wave_width/2, -wave_height/2, 0);
        lines.push(line);
        scene.add(line);
    }

    renderer = new THREE.WebGLRenderer( { antialias: true, alpha:true } );
    renderer.setClearColor( 0x111111, 0 );
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( WIDTH, HEIGHT );

    //controls = new THREE.OrbitControls( camera, renderer.domElement );


    var container = document.getElementById( 'container' );
    container.appendChild( renderer.domElement );

   
    window.addEventListener( 'resize', onWindowResize, false );

}

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );

}

function animate() {

    requestAnimationFrame( animate );
    // analyser.getByteTimeDomainData(dataArray);
    analyser.getByteFrequencyData(dataArray);

    render();
    

}

function render() {

    var delta = clock.getDelta();
    //controls.update( delta );

    set_wave(dataArray, wave_history_geo[wave_index]);
    for(var i=0;i<wave_history_size;i++) {
        lines[(wave_history_size + wave_index - i) % wave_history_size].position.z = -wave_depth*i/wave_history_size + wave_depth/2;
    }
    wave_index = (wave_index + 1) % wave_history_size;

    renderer.render( scene, camera );

}
 
// ===============================
//       for audio control
// ===============================
window.AudioContext = window.AudioContext || window.webkitAudioContext;
var dataArray, analyser;

function initSound() {
    var audioContext = new window.AudioContext();

    var source = audioContext.createMediaElementSource(audio);
    source.connect(audioContext.destination);
    analyser = audioContext.createAnalyser();            
    source.connect(analyser); 

    analyser.fftSize = fft_size;
    // analyser.smoothingTimeConstant = 0.9; 
    var bufferLength = analyser.frequencyBinCount;
    var bufferDrawLength = bufferLength;
    dataArray = new Uint8Array(bufferLength);
}


initSound();
init();
animate();