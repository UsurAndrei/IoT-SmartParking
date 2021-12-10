<template>
  <div class="AppMap">
    <vl-map :load-tiles-while-animating="false" :load-tiles-while-interacting="false"
             data-projection="EPSG:4326" style="height: 600px">
      <vl-view :zoom.sync="zoom" :center.sync="center"></vl-view>

      <vl-geoloc >
        <template>
          <vl-feature>
            <vl-geom-point :coordinates="[ 23.674519613321433, 38.00159193588368 ]"></vl-geom-point>
            <vl-style-box>
              <vl-style-icon src="https://img.icons8.com/ultraviolet/50/000000/place-marker.png" :anchor="[0.5, 1]"></vl-style-icon>
              <vl-style-text text="Free Space" font="14px monospace"></vl-style-text>
            </vl-style-box>
          </vl-feature>
          <vl-feature>
            <vl-geom-point :coordinates="[ 23.674387875970293, 38.00166362114558 ]"></vl-geom-point>
            <vl-style-box>
              <vl-style-icon src="https://img.icons8.com/ultraviolet/50/000000/place-marker.png" :anchor="[0.5, 1]"></vl-style-icon>
              <vl-style-text text="Free Space" font="14px monospace"></vl-style-text>
            </vl-style-box>
          </vl-feature>
            <vl-feature>
            <vl-geom-point :coordinates="[  23.67449002243689, 38.00177809860685 ]"></vl-geom-point>
            <vl-style-box>
              <vl-style-icon src="https://img.icons8.com/ultraviolet/50/000000/place-marker.png" :anchor="[0.5, 1]"></vl-style-icon>
              <vl-style-text text="Free Space" font="14px monospace"></vl-style-text>
            </vl-style-box>
          </vl-feature>
            <vl-feature>
            <vl-geom-point :coordinates="[ 23.674594029686094, 38.00172214346546 ]"></vl-geom-point>
            <vl-style-box>
              <vl-style-icon src="https://img.icons8.com/ultraviolet/50/000000/place-marker.png" :anchor="[0.5, 1]"></vl-style-icon>
              <vl-style-text text="Free Space" font="14px monospace"></vl-style-text>
            </vl-style-box>
          </vl-feature>
        </template>
      </vl-geoloc>
      <vl-layer-tile>
        <vl-source-osm></vl-source-osm>
      </vl-layer-tile>
    </vl-map>
    <div style="padding: 20px">
      Zoom: {{ zoom }}<br>
      Center: {{ center }}<br>
    </div>
  </div>
</template>

<script>

import Vue from 'vue'
import VueLayers from 'vuelayers'
import 'vuelayers/lib/style.css'
import image from '/home/pavlosrep/map-iot-project/src/assets/map-marker-icon.png'

Vue.use(VueLayers)

  export default {
    data () {
      return { 
        zoom: 19,
        center: [ 23.67469199916137, 38.00189161804275],
        image: image
      }
    },
  }
</script>


