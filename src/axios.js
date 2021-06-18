import axios from "axios";

// Why use axios?
// https://youtu.be/RDV3Z1KCBvo?t=22783

const instance = axios.create({
  baseURL: "https://us-central1-clone-coding-5e9d8.cloudfunctions.net/api"
  // baseURL: 'http://localhost:5001/clone-coding-5e9d8/us-central1/api' // For debug
  // THE API (cloud function) URL
});

export default instance;