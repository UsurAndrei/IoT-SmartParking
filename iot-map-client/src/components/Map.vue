<template>
  <div class="AppMap">
      <h1>"UNIWA Campus 1 - Parking Availability"</h1>
    <vl-map :load-tiles-while-animating="false" :load-tiles-while-interacting="false"
             data-projection="EPSG:4326" style="height: 600px">
      <vl-view :zoom.sync="zoom" :center.sync="center"></vl-view>
      <vl-geoloc >
        <template>
          <vl-feature>
            <vl-geom-point :coordinates="[ 23.674519613321433, 38.00159193588368 ]"></vl-geom-point>
            <vl-style-box v-if="isFree1">
              <vl-style-icon  img src="https://img.icons8.com/ultraviolet/40/000000/marker.png" :anchor="[0.5, 1]"></vl-style-icon>
            </vl-style-box>
            <vl-style-box v-else>
              <vl-style-icon  img src="https://img.icons8.com/officel/40/000000/marker.png" :anchor="[0.5, 1]"></vl-style-icon>
            </vl-style-box>  
          </vl-feature>
          <vl-feature>
            <vl-geom-point :coordinates="[ 23.674387875970293, 38.00166362114558 ]"></vl-geom-point>
            <vl-style-box v-if="isFree2">
              <vl-style-icon  img src="https://img.icons8.com/ultraviolet/40/000000/marker.png" :anchor="[0.5, 1]"></vl-style-icon>
            </vl-style-box>
            <vl-style-box v-else>
              <vl-style-icon  img src="https://img.icons8.com/officel/40/000000/marker.png" :anchor="[0.5, 1]"></vl-style-icon>
            </vl-style-box>            
          </vl-feature>
            <vl-feature>
            <vl-geom-point :coordinates="[  23.67449002243689, 38.00177809860685 ]"></vl-geom-point>
            <vl-style-box v-if="isFree3">
              <vl-style-icon  img src="https://img.icons8.com/ultraviolet/40/000000/marker.png" :anchor="[0.5, 1]"></vl-style-icon>
            </vl-style-box>
            <vl-style-box v-else>
              <vl-style-icon  img src="https://img.icons8.com/officel/40/000000/marker.png" :anchor="[0.5, 1]"></vl-style-icon>
            </vl-style-box>  
          </vl-feature>
            <vl-feature>
            <vl-geom-point :coordinates="[ 23.674594029686094, 38.00172214346546 ]"></vl-geom-point>
            <vl-style-box v-if="isFree4">
              <vl-style-icon  img src="https://img.icons8.com/ultraviolet/40/000000/marker.png" :anchor="[0.5, 1]"></vl-style-icon>
            </vl-style-box>
            <vl-style-box v-else>
              <vl-style-icon  img src="https://img.icons8.com/officel/40/000000/marker.png" :anchor="[0.5, 1]"></vl-style-icon>
            </vl-style-box>  
          </vl-feature>
        </template>
      </vl-geoloc>
      <vl-layer-tile>
        <vl-source-osm></vl-source-osm>
      </vl-layer-tile>
    </vl-map>
    <div class="Blue"> 
      <h3>{{ String1 }} -> Free Parking Space</h3>
    </div>
    <div class="Red"> 
      <h3>{{ String2 }} -> Occupied Parking Space</h3>
    </div>  
  </div>
</template>

<script>

import Vue from 'vue'
import VueLayers from 'vuelayers'
import 'vuelayers/lib/style.css'

Vue.use(VueLayers)

  export default {
    data () {
      return { 
        zoom: 19,
        center: [ 23.67469199916137, 38.00189161804275],
        String1: 'Blue',
        String2: 'Red',
        isFree1: false,
        isFree2: true,
        isFree3: false,
        isFree4: true
      }
    },
  }
</script>

<style>
.Blue {
  color: #0000FF;
}
.Red {
    color: #FF0000
}
</style>

