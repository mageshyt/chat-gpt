import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
} from "firebase/firestore";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import db from "../firebase";
import { Message } from "../typings";
import { useCollection, useDocument } from "react-firebase-hooks/firestore";

export const addMessage = async (
  chatId: string,
  responseDoc: Message,
  session: any
) => {
  const docRef = await addDoc(
    collection(db, "users", session?.user?.email!, "chats", chatId, "messages"),
    // add the mess to arr
    {
      messages: responseDoc,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    }
  );

  return docRef;
};

export const getAllMessage = async (chatId: string, session: any) => {
  // get all the messages form user chat

  const docRef = collection(
    db,
    "users",
    session?.user?.email!,
    "chats",
    chatId,
    "messages"
  );

  const querySnapshot = (await getDocs(docRef)).docs.map((doc) => doc.data());
// check for react time chages
  return querySnapshot;
};
