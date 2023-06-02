import { Component, OnInit } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-three-component',
  templateUrl: './three-component.component.html',
  styleUrls: ['./three-component.component.css']
})
export class ThreeComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // Crear la escena, la cámara y el renderizador
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('canvas-container')?.appendChild(renderer.domElement);

    // Crear una geometría y un material
    const SVGLoader = new THREE.SVGLoader();
    loader.load('ruta-de-la-imagen.svg', function (data) {
      const paths = data.paths;
      const group = new THREE.Group();
    
      paths.forEach(function (path) {
        const shapes = path.toShapes(true);
        shapes.forEach(function (shape) {
          const geometry = new THREE.ExtrudeGeometry(shape, {
            depth: 10, // Ajusta la profundidad de la extrusión según tus necesidades
            bevelEnabled: false // Desactiva el biselado si no lo deseas
          });
          const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
          const mesh = new THREE.Mesh(geometry, material);
          group.add(mesh);
        });
      });
    
      scene.add(group);
    });

   
    // Configurar la posición de la cámara
    camera.position.z = 5;

    // Animación de rotación
    function animate() {
      requestAnimationFrame(animate);
      moon.rotation.x += 0.01;
      moon.rotation.y += 0.01;
      renderer.render(scene, camera);
    }
    animate();
  }
}
