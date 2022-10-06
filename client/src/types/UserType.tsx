export interface UserState {
    id:number | null,
    username:string | null,
    journals:Array<Object>,
    email:string | null,
    first_name:string | null,
    last_name:string | null,
    phone_number:string | null,
    primary_journal_id: number | null
    friends:Array<Object>
    recent_mood:string | null
}



/*
Information wanted:
  username;
  count of all entries;
  moods: {
    depressed: 1
    happy: 2
    etc.
  };
  activities: {
    sing: 1,
    ...
  };
  

*/