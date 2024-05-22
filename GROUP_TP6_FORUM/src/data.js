const firebase = require("firebase/app");
require("firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyD2Yiu2oQs_Ai85i6qpQ_5Is0PovFCdWkw",
    authDomain: "js-project-a0dca.firebaseapp.com",
    projectId: "js-project-a0dca",
    storageBucket: "js-project-a0dca.appspot.com",
    messagingSenderId: "507313056295",
    appId: "1:507313056295:web:470cc2a9eb0e500e317c02",
    measurementId: "G-NPBXBLZ1MM"
  };
firebase.initializeApp(firebaseConfig);

// Access Firestore
const db = firebase.firestore();

// Sample Data
const sampleThreads = [
  {
    title: "Understanding Async/Await in JavaScript",
    content: "Can someone explain how async/await works in JavaScript with examples?",
    author: "user1",
    tags: ["JavaScript", "Async", "Programming"],
    answers: []
  },
  {
    title: "Best Practices for REST API Design",
    content: "What are some best practices to follow when designing a RESTful API?",
    author: "user2",
    tags: ["API", "REST", "Best Practices"],
    answers: []
  },
  {
    title: "CSS Grid vs Flexbox",
    content: "When should I use CSS Grid and when should I use Flexbox?",
    author: "user3",
    tags: ["CSS", "Grid", "Flexbox"],
    answers: []
  },
  {
    title: "Introduction to Vue 3 Composition API",
    content: "What are the key features of the Vue 3 Composition API and how does it differ from the Options API?",
    author: "user4",
    tags: ["Vue", "Composition API", "JavaScript"],
    answers: []
  },
  {
    title: "Understanding Closures in JavaScript",
    content: "Can someone explain what closures are in JavaScript and provide an example?",
    author: "user5",
    tags: ["JavaScript", "Closures", "Programming"],
    answers: []
  }
];

const sampleUsers = [
  { uid: "user1", threads: [] },
  { uid: "user2", threads: [] },
  { uid: "user3", threads: [] },
  { uid: "user4", threads: [] },
  { uid: "user5", threads: [] }
];

// Function to add users to Firestore
const addUsersToFirestore = async (usersData) => {
  try {
    for (const user of usersData) {
      await db.collection("users").doc(user.uid).set(user);
      console.log(`User ${user.uid} added successfully`);
    }
  } catch (error) {
    console.error("Error adding users to Firestore: ", error);
  }
};

// Function to add threads to Firestore and update user documents
const addThreadsToFirestore = async (threadsData) => {
  try {
    for (const thread of threadsData) {
      const threadRef = await db.collection("threads").add(thread);
      const threadID = threadRef.id;

      const userRef = db.collection("users").doc(thread.author);
      const userDoc = await userRef.get();
      if (!userDoc.exists) {
        console.error(`User document for ${thread.author} does not exist.`);
        continue;
      }
      const currentThreads = userDoc.data().threads || [];
      currentThreads.push(threadID);
      await userRef.update({ threads: currentThreads });
      console.log(`Thread ${threadID} added by user ${thread.author}`);
    }
  } catch (error) {
    console.error("Error adding threads to Firestore: ", error);
  }
};

// Call the functions to add data to Firestore
const populateFirestore = async () => {
  await addUsersToFirestore(sampleUsers);
  await addThreadsToFirestore(sampleThreads);
};

populateFirestore();
