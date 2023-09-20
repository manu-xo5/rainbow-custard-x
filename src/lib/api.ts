import { doc, getDocs, addDoc, collection, getDoc } from 'firebase/firestore'
import { db } from './firebase'
import * as O from './O'

const notesCollectionFor = (folderId: string) => collection(db, 'folders', folderId, 'notes')

function qsToArray(qs) {
  const arr = []
  qs.forEach((doc) => {
    arr.push({
      id: doc.id,
      ...doc.data(),
    })
  })
  return arr
}

export function getFolders() {
  return O.pipe(
    0,
    O.tryCatch(() => getDocs(collection(db, 'folders')).catch(() => [])),
    O.bind(qsToArray)
  )
}

export function getFolder(id: string) {
  return O.pipe(
    0,
    (() => getDocs(notesCollectionFor(id)).catch(error => error)),
    O.bind(qsToArray),
  )
}

export function saveFolder(body: { icon: string; title: string; first_note?: string; accentColor: string }) {
  return O.pipe(
    body,
    filter<ObjectValues<typeof body>>(Boolean),
    O.tryCatch((x: any) => addDoc(collection(db, 'folders'), x).catch(() => alert('api failed')))
  )
}

type ObjectValues<T> = T[keyof T]

const filter =
  <T>(fn: (x: T) => boolean) =>
  (x: T) =>
    Object.fromEntries<T>(Object.entries(x).filter(([_, value]) => fn(value)))
