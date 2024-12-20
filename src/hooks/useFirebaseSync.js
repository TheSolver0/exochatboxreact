import { useEffect, useState } from "react";
import { ref, onValue, set } from "firebase/database";
import { database } from "./firebase";

export const useFirebaseSync = (firebasePath) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const dbRef = ref(database, firebasePath);

    // Synchronisation en temps réel
    const unsubscribe = onValue(dbRef, (snapshot) => {
      setData(snapshot.val());
    });

    return () => unsubscribe(); // Nettoyer l'abonnement
  }, [firebasePath]);

  // Mise à jour des données dans Firebase
  const updateData = (newData) => {
    const dbRef = ref(database, firebasePath);
    set(dbRef, newData);
  };

  return [data, updateData];
};
