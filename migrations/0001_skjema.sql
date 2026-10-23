-- Tabellene som skjemaene på h-u-b.no lagrer i (D1-databasen hub-skjema).
CREATE TABLE IF NOT EXISTS venteliste (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  opprettet TEXT NOT NULL DEFAULT (datetime('now')),
  epost TEXT NOT NULL UNIQUE,
  fornavn TEXT,
  mobil TEXT,
  interesser TEXT,
  lag TEXT,
  grunnleggerkort INTEGER NOT NULL DEFAULT 0,
  kilde TEXT
);
CREATE TABLE IF NOT EXISTS undersokelse (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  opprettet TEXT NOT NULL DEFAULT (datetime('now')),
  svar TEXT NOT NULL,
  kilde TEXT
);
CREATE TABLE IF NOT EXISTS samarbeid (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  opprettet TEXT NOT NULL DEFAULT (datetime('now')),
  type TEXT,
  navn TEXT NOT NULL,
  firma TEXT,
  epost TEXT NOT NULL,
  mobil TEXT,
  melding TEXT NOT NULL
);
