import { TaskModel } from "./TaskModels"

export type TaskStateModel = {
    tasks: TaskModel[]
    secondsRemaining: number;
    formattedSecondsRemaining: string;
    activeTask: TaskModel | null;
    currentCycle: number;
    config: {
        work: number;
        pause: number;
        lgPause: number;
    }
}