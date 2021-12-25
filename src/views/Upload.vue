<template>
  <div>
    <h1 class="title">Upload</h1>
    <p class="uploadInfo">
      Any uploads must comply with the
      <a href="https://thecatapi.com/privacy">upload guidelines</a> or face
      deletion.
    </p>
    <label>
      <input
        type="file"
        id="file"
        ref="file"
        v-on:change="handleFileUpload()"
      />
    </label>
    <button class="btnUpload" v-on:click="addFile()">Add image</button>
    <button class="btnSubmit" v-on:click="submitFile()">Upload file</button>
    <p v-if="isSelected">File selected successfully</p>
    <div v-if="response">
      <p v-if="response">File uploaded successfully</p>
      <img :src="response.url" :alt="response.id" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Loader from "@/components/Loader";
export default {
  data() {
    return {
      isUploaded: false,
      isSelected: false,
      file: "",
      img: "",
      response: undefined,
    };
  },
  components: {
    Loader,
  },
  methods: {
    handleFileUpload() {
      this.file = this.$refs.file.files[0];
      console.log(this.file);
      this.isSelected = true;
      setTimeout(function () {
        this.isSelected = false;
      }, 1000);
    },
    submitFile() {
      let formData = new FormData();
      formData.append("file", this.file);
      axios
        .post("https://api.thecatapi.com/v1/images/upload", formData, {
          headers: {
            "x-api-key": "db2157d0-39de-439e-b8fe-7e033060a0f0",
          },
        })
        .then((response) => {
          console.log(response);
          this.response = response.data;
          this.isUploaded = true;
          setTimeout(function () {
            this.isUploaded = false;
          }, 1000);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    addFile() {
      this.$refs.file.click();
    },
  },
};
</script>

<style scope>
.btnUpload {
  background-color: #4caf50 !important;
  border-color: #4caf50 !important;
  color: white;
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
  align-items: center;
  border-radius: 4px;
  display: inline-flex;
  flex: 0 0 auto;
  font-weight: 500;
  letter-spacing: 0.0892857143em;
  justify-content: center;
  cursor: pointer;
  height: 44px;
  min-width: 78px;
  padding: 0 19.5555555556px;
  margin-right: 20px;
}
.btnSubmit {
  background-color: #4caf50 !important;
  border-color: #4caf50 !important;
  color: white;
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
  align-items: center;
  border-radius: 4px;
  display: inline-flex;
  flex: 0 0 auto;
  font-weight: 500;
  letter-spacing: 0.0892857143em;
  justify-content: center;
  cursor: pointer;
  height: 44px;
  min-width: 78px;
  padding: 0 19.5555555556px;
}
.uploadImg {
  border: 1px solid purple;
  border-radius: 10px;
  width: 400px;
  height: 300px;
  margin: 20px auto;
  display: block;
}
a {
  color: #9895f0;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
.uploadInfo {
  padding: 20px 0;
}
input[type="file"] {
  position: absolute;
  top: -500px;
}
img {
  background-color: rgb(70, 70, 70, 0.4);
  box-shadow: 2px 5px 25px -3px rgba(180, 180, 180, 0.8);
  border-radius: 10px;
  height: auto;
  width: 420px;
}
</style>
