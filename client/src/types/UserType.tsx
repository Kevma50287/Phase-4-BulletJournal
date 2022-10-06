export interface UserState {
    id:number,
    username:string,
    journals:Array<Object>,
    email:string,
    first_name:string,
    last_name:string,
    phone_number:string,
    primary_journal_id: number
    friends:Array<Object>
    recent_mood:string
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