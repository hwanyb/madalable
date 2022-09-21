import React, { useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { authService, dbService } from "./firebase";
import { useDispatch, useSelector } from "react-redux";

import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Todo from "./pages/Todo";
import Overview from "./pages/Overview";
import { setIsLoggedin, setNickname, setUserId } from "./modules/authReducer";
import { RootState } from "./modules";
import { setMyMandalart } from "./modules/mandalartReducer";

function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const isLoggedin = useSelector(
    (state: RootState) => state.authReducer.isLoggedin,
  );
  const userId = useSelector((state: RootState) => state.authReducer.userId);

  const selectedMandalart = useSelector(
    (state: RootState) => state.mandalartReducer.selectedMandalart,
  );
  const isOpenedCreateMandalart = useSelector(
    (state: RootState) => state.mandalartReducer.isOpenedCreateMandalart,
  );
  const isOpenedMandalartDetail = useSelector(
    (state: RootState) => state.mandalartReducer.isOpenedMandalartDetail,
  );

  const isEditingGoal = useSelector(
    (state: RootState) => state.goalReducer.isEditingGoal,
  );
  const isEditingTodo = useSelector(
    (state: RootState) => state.goalReducer.isEditingTodo,
  );
  const isOpenedTodoDetail = useSelector(
    (state: RootState) => state.goalReducer.isOpenedTodoDetail,
  );
  const selectedGoal = useSelector(
    (state: RootState) => state.goalReducer.selectedGoal,
  );
  const selectedTodo = useSelector(
    (state: RootState) => state.goalReducer.selectedTodo,
  );

  const overviewSelectedMandalart = useSelector(
    (state: RootState) => state.overviewReducer.selectedMandalart,
  );
  const overviewSelectedGoal = useSelector(
    (state: RootState) => state.overviewReducer.selectedGoal,
  );
  const isOpenedGoalOverview = useSelector(
    (state: RootState) => state.overviewReducer.isOpenedGoalOverview,
  );
  const isOpenedTodoOverview = useSelector(
    (state: RootState) => state.overviewReducer.isOpenedTodoOverview,
  );

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        dispatch(setIsLoggedin(true));
        navigate("/");
        dispatch(setUserId(user.uid));
        dispatch(setNickname(user.displayName));
      } else {
        dispatch(setIsLoggedin(false));
        navigate("/auth");
        dispatch(setUserId(""));
      }
    });
  }, []);

  const fetchDocs = async () => {
    await dbService
      .collection("mandalable")
      .where("user_id", "==", userId)
      .onSnapshot((snapshot) => {
        const docsArr: any = snapshot.docs.map((doc) => ({
          doc_id: doc.id,
          ...doc.data(),
        }));
        dispatch(setMyMandalart(docsArr));
      });
  };
  useEffect(() => {
    fetchDocs();
  }, [
    location,
    isLoggedin,
    userId,
    selectedMandalart,
    isOpenedCreateMandalart,
    isOpenedMandalartDetail,
    isEditingGoal,
    isEditingTodo,
    isOpenedTodoDetail,
    selectedGoal,
    selectedTodo,
    overviewSelectedMandalart,
    overviewSelectedGoal,
    isOpenedGoalOverview,
    isOpenedTodoOverview,
  ]);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/todo" element={<Todo />} />
      <Route path="/overview" element={<Overview />} />
      <Route path="/auth" element={<Auth />} />
    </Routes>
  );
}

export default App;
