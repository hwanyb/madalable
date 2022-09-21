export type Todo = {
  id: number;
  text: string;
  emoji: string;
  multiple?: boolean;
  period?: string;
  periodText?: string;
  periodRange?: string;
  periodNumber?: number;
  done?: boolean;
};

export type Goal = {
  id: number;
  text: string;
  todos: Todo[],
  success?: number
};

export type Mandalart = {
  doc_id?: string;
  alias: string;
  emoji: string;
  color: string;
  start_date?: string;
  end_date?: string;
  difficulty: string;
  user_id?: string;
  created_at?: number;
  success?: number;
  goals?: Goal[];
};

export type AuthState = {
  isLoggedin: boolean;
  userId: string;
  nickname: string;
};

export type GoalState = {
  selectedGoal: Goal;
  selectedTodo: Todo;
  goalsArr: Goal[];
  isEditingGoal: boolean;
  isEditingTodo: boolean;
  isOpenedTodoDetail: boolean;
};

export type MandalartState = {
  mandalart: Mandalart;
  selectedMandalart: Mandalart;
  myMandalart: Mandalart[];
  isOpenedCreateMandalart: boolean;
  isOpenedMandalartDetail: boolean;
};

export type OverviewState = {
  selectedMandalart: Mandalart;
  selectedGoal: Goal;
  isOpenedGoalOverview: boolean;
  isOpenedTodoOverview: boolean;
}