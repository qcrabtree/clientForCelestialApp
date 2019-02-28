// import React, { Component } from 'react';
import * as THREE from 'three';


// let geometry = new THREE.SphereGeometry(0.5,100,100);
// var material = new THREE.MeshPhongMaterial( { map: THREE.ImageUtils.loadTexture('eyeballmap.jpg',THREE.SphericalRefractionMapping) } );
// var eyeball = new THREE.Mesh( geometry, material );
// eyeball.overdraw = true;
// eyeball.castShadow = true;
// scene.add( eyeball );

// class ThreeScene extends component{
//     componentDidMount() {
//         const width = this.mount.clientWidth
//         const height = this.mount.clientHeight
//     }
// }


// let scene = new THREE.Scene();
// let camera = new THREE.PerspectiveCamera(50, 500 / 400, 0.1, 1000);

// let renderer = new THREE.WebGLRenderer();
// renderer.setSize( 500, 400 );
// document.body.appendChild(renderer.domElement);

// let radius = 40;
// let segments = 50;
// let rings = 30;

// let geometry = new THREE.SphereGeometry(radius, segments, rings);
// let material = new THREE.MeshNormalMaterial({ color: 0xff0000 });
// let sphere = new THREE.Mesh(geometry, material);
// scene.add(sphere);


// camera.position.z = 150;
// let render = function () {
//     requestAnimationFrame(render);

//     sphere.rotation.y += 0.99;
//     sphere.rotation.x += 0.99;

//     renderer.render(scene, camera);
// };

// render();



let scene = new THREE.Scene();
			let camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

			let renderer = new THREE.WebGLRenderer({
                preserveDrawingBuffer: true
            });
            renderer.setSize( window.innerWidth, window.innerHeight );
			document.body.appendChild( renderer.domElement );
			
			// let loader = new THREE.MaterialLoader();

			let geometry = new THREE.SphereGeometry( 5, 32, 32 );
			let pointLight = new THREE.PointLight(0xFFFFFF);
			// let material = new THREE.MaterialLoader();
			// loader.load('../Assets/earthmap1k.jpg',
			// function ( material ) {
			// 	Object.material = material;
			// }
			
			// );
			// let material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
			// let material = new THREE.TextureLoader().load('../Assets/earthmap1k.');
			let texture = THREE.TextureLoader('earthmap1k.jpg');
			let material = new THREE.MeshPhongMaterial({map: texture});
			let sphere = new THREE.Mesh( geometry, material );
			sphere.overdraw= true;
			sphere.castShadow= true;
			pointLight.position.x = 50;
			pointLight.position.y = 50;
			pointLight.position.z = 25;
			scene.add( sphere );
			scene.add(pointLight);

			camera.position.z = 25;

			let animate = function () {
				requestAnimationFrame( animate );


				sphere.rotation.x += 0.09;
				sphere.rotation.y += 0.09;


				renderer.render( scene, camera );
			};

            animate();
            

export default THREE;