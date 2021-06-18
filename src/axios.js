import axios from "axios";

// Why use axios?
// https://youtu.be/RDV3Z1KCBvo?t=22783

const instance = axios.create({
  baseURL: 'http://localhost:5001/clone-coding-5e9d8/us-central1/api'
  // THE API (cloud function) URL
});

export default instance;