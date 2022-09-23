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
import { setWindowSize } from "./modules/appReducer";

function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const { isLoggedin, userId } = useSelector(
    (state: RootState) => state.authReducer,
  );

  const {
    selectedMandalart,
    isOpenedCreateMandalart,
    isOpenedMandalartDetail,
  } = useSelector((state: RootState) => state.mandalartReducer);

  const {
    isEditingGoal,
    isEditingTodo,
    isOpenedTodoDetail,
    selectedGoal,
    selectedTodo,
  } = useSelector((state: RootState) => state.goalReducer);

  const {
    selectedMandalart: overviewSelectedMandalart,
    selectedGoal: overviewSelectedGoal,
    isOpenedGoalOverview,
    isOpenedTodoOverview,
  } = useSelector((state: RootState) => state.overviewReducer);

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

  useEffect(() => {
    window.addEventListener("resize", onresizeWindow);
    return () => {
      window.removeEventListener("resize", onresizeWindow);
    };
  }, []);

  const onresizeWindow = () => {
    dispatch(setWindowSize(window.innerWidth));
  };

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
