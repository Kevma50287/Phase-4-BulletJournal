export interface JournalState{
  currentJournalId: number
  journal_entries: Array<JournalEntry>
}

export interface journalProps {
  emotion:string,
  entry:string, 
  date:string,
  activities:{[key:string]:boolean}
}

export interface JournalEntry {
  id:number,
  emotion:string,
  entry:string, 
  date:string,
  activities:[string]
}