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
    const geometry = new THREE.SphereGeometry(1, 32, 32);
const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
const moon = new THREE.Mesh(geometry, material);
scene.add(moon);

   
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
