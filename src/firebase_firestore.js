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
  collectionRef;
  constructor(collection_name) {
    this.collection_name = collection_name;
    this.collectionRef = db.collection(this.collection_name);
  }
  async getCollectionList(page, item_per_page, filter) {
    let data = [];
    if (!item_per_page) item_per_page = 10;
    let query = this.collectionRef.orderBy("id");
    if (filter) {
      for (const key in filter) {
        console.log(key, filter[key])
        query = query.where(key, "==", filter[key]);
      }
    }
    const response = await query.get();
    response.forEach((doc) => {
      const docData = doc.data();
      data.push(docData);
    });
    return data;
  }
  async setCollection(data) {
    try {
      if (!data) throw "data is undefined.";
      const response = await this.collectionRef.set(data);
      if (response) {
        console.log(response);
      }
      return response;
    } catch (error) {
      console.log(error);
    }
  }
}
