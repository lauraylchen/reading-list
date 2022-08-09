import { useEffect, useState } from 'react'
import { db } from '../firebase/config'

// firebase imports
import { collection, onSnapshot } from 'firebase/firestore'

export const useCollection = (c) => {
  const [documents, setDocuments] = useState(null)

  useEffect(() => {
    let ref = collection(db, c)

    const unsub = onSnapshot(ref, (snapshot) => {
      let results = []
      snapshot.docs.forEach( doc => {
        results.push({id: doc.id, ...doc.data()})
      })
      setDocuments(results)
    })

    return () => unsub()
  }, [c])

  return { documents }
}
