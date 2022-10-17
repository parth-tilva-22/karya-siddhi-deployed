export interface Task{
    id?:String;
    title: string;
    description: string;
    dueDate: string;
    isComplete: boolean;
    priority: number;
}