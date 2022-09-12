import React from 'react'
import { useSelector } from 'react-redux';

import CreateMandalart from '../components/Home/CreateMandalart';
import MandalartCardContainer from '../components/Home/MandalartCardContainer'
import { RootState } from '../modules';

type Props = {}

export default function Home({}: Props) {
  const isOpenCreateMandalart = useSelector(
    (state: RootState) => state.mandalartReducer.isOpenCreateMandalart,
  );
  return (
    <>
    {
      isOpenCreateMandalart ? (
        <CreateMandalart />
      ) : (

        <MandalartCardContainer />
      )
    }
    </>
  )
}