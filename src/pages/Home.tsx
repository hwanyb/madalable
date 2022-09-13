import React from "react";
import { useSelector } from "react-redux";

import Layout from "../components/common/layout/Layout";
import CreateMandalart from "../components/Home/CreateMandalart";
import MandalartCardContainer from "../components/Home/MandalartCardContainer";
import MandalartDetail from "../components/Home/MandalartDetail";
import { RootState } from "../modules";

type Props = {};

export default function Home({}: Props) {
  const isOpenedCreateMandalart = useSelector(
    (state: RootState) => state.mandalartReducer.isOpenedCreateMandalart,
  );
  const isOpenedMandalartDetail = useSelector((state: RootState) => state.mandalartReducer.isOpenedMandalartDetail);
  return (
    <Layout>
      {isOpenedCreateMandalart ? (
        <CreateMandalart />
      ) : isOpenedMandalartDetail ? (
        <MandalartDetail />
      ) : (
        <MandalartCardContainer />
      )}
    </Layout>
  );
}
