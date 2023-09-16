import fs from "fs"

type Note = {
  uid: string;
  folder: string;
  text: string;
  timestamp: string;
}

const db = new Map<string, Note>();
_read().forEach(([uid, note]) => db.set(uid, note))
export { db };

export function postNote(note: Omit<Note, "uid">): Note {
  const newNote: Note = {
    ...note,
    uid: Math.random().toString(16).substring(2),
    timestamp: (new Date()).toISOString()
  }

  db.set(newNote.uid, newNote)
  _write(Array.from(db.entries()))

  return newNote;
}

export function getNote(query: string) {
  const data = Array.from(db.values())
  data.filter(_data => _data.uid.includes(query))
  return data
}

function _write(payload: any) {
  fs.writeFileSync("db", JSON.stringify(payload));
}

export function _read() {
  return JSON.parse(fs.readFileSync("./db", "utf-8"));
}
