<template>
  <div class="form-group">
    <div v-if="image">
      <b-img
        height="300"
        width="400"
        v-bind:src="globalUrl.readFileUrl+ image"
        fluid
        alt="Responsive image"
      ></b-img>
    </div>
    <b-input-group class="input-group">
      <b-form-file
        v-model="file"
        placeholder="Choose a file..."
        ref="file"
        drop-placeholder="Drop file here..."
      ></b-form-file>
      <b-input-group-append>
        <b-button class="career-btn" v-on:click="onImage(file)">Upload</b-button>
      </b-input-group-append>
    </b-input-group>
  </div>
</template>

<script>
import axios from "axios";
import global from "@/service/global.js";
export default {
  props: ["value"],
  data() {
    return {
      file: "",
      image: "",
      globalUrl: {}
    };
  },
  watch: {
    value: function(val) {
   
      this.image = val;
      
    }
  },
  methods: {
    async onImage(file) {
      const formData = new FormData();
      formData.append("file", file);
      try {
        await axios.post(this.globalUrl.uploadUrl, formData).then(data => {
          this.image = data.data.data[0];
          this.$emit("input", data.data.data[0]);
        });
      } catch (err) {
    
      }
    },
    setGlobalUrl() {
      this.globalUrl = global;
    }
  },
  created() {
    this.setGlobalUrl();
  }
};
</script>