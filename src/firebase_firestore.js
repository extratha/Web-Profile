import firebase from "firebase";
firebase.initializeApp({
  apiKey: "AIzaSyCRsBIveUOPVYKWD3SwRYCcxL-NvNx5YYA",
  authDomain: "thakorn-t.firebaseapp.com",
  databaseURL: "https://thakorn-t.firebaseio.com",
  projectId: "thakorn-t",
  storageBucket: "thakorn-t.appspot.com",
  messagingSenderId: "1033645618254",
  appId: "1:1033645618254:web:249f3f89b514faf7b27f1f",
  measurementId: "G-4JXFQ1CY2C",
});
const db = firebase.firestore();
export default class MasterData {
  collection_name;
  constructor(collection_name) {
    this.collection_name = collection_name;
  }
  async getCollectionList(page, item_per_page) {
    let data = [];
    if (!item_per_page) item_per_page = 10;
    const collectionRef = db.collection(this.collection_name);
    const response = await collectionRef.orderBy("id").get();
    response.forEach(doc => {
      const docData = doc.data()
      data.push(docData)
    })
    return data;
  }
}
