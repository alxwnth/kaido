export default interface Task {
  id: number;
  listId?: number;
  done: boolean;
  contents: string;
  created: Date;
  due: Date;
  remindAt: Date;
  starred: boolean;
  note?: string;
}
