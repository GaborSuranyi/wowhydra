<template>
	<div id="app" class="col-xs-12">
		<div class="row">
			<div class="col-xs-12">
				<div class="row">
					<div class="col-xs-4">
						<h2>WoW Hydra</h2>
					</div>
					<div class="col-xs-8">
						<input id="user_select_wowpath" v-on:change="setWowPath" class="form-control" type="file" webkitdirectory/>
					</div>
					<div class="col-xs-4 pull-right">
						<div class="btn btn-default pull-right" v-on:click="test">CFG</div>
					</div>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-xs-2">
				<ul>
					<li>My Addons<span class="label label-info pull-right">5</span></li>
				</ul>
			</div>
			<div class="col-xs-10">
				<addonData v-bind:wowPath="wowPaths"></addonData>
			</div>
		</div>
	</div>
</template>

<script>
	import {bus} from './main.js';
	import addonData from './data/AddonData.vue'
	export default {

		components: {
			addonData
		},

		data () {
			return {
				wowPaths: "F:\\wowhydra\\"
			}
		},
		methods: {
			test: function(event){
				bus.$emit('addonDataThing');
			},
			setWowPath: function(e){
				this.wowPaths = document.getElementById("user_select_wowpath").files[0].path;
			}
		},
		mounted: function(){
		}
	}
</script>
