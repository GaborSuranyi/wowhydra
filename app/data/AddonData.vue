<template>
	<div id="addonData">
		<ul>
			<li v-for="addon in installedAddons">{{ addon.name }}</li>
		</ul>
	</div>
</template>

<script>
var NodeGit = require('../../node_modules/nodegit/build/Release/nodegit.node'),
	path = require('path'),
	fs = require('fs');

import {bus} from './../main.js';

export default {
    data () {
      return {
        installedAddons: [],
		availableAddons: []
      }
    },
	props: [ 'wowPath' ],
	methods: {
		getAddons: function(path){
			console.log(this.wowPath);

			fs.readdir(this.wowPath, (err, files) => {
				files.forEach(file => {
					var path = this.wowPath+"\\"+file;
					if(fs.lstatSync(path).isDirectory() && fs.existsSync(path+'/.git') && fs.lstatSync(path+'/.git').isDirectory()){
						var pathToRepo = require("path").resolve(path);

						NodeGit.Repository.open(pathToRepo,function (repo) {
							console.log(repo);
						});
						console.log('sync?');
						this.installedAddons.push({
							name: file
						});

					}
				});
			})
		}
	},
	mounted: function(){
		bus.$on('addonDataThing', this.getAddons);
	}
  }
</script>
