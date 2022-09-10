const CREATE_MANDALART = "mandalart/CREATE_MANDALART" as const;

export const createMandalart = () => ({
  type: CREATE_MANDALART,
});

type MandalartAction = ReturnType<typeof createMandalart>;

type MandalartState = {
  isOpenedCreatMandalart: boolean;
};

const initialState: MandalartState = {
  isOpenedCreatMandalart: false,
};

function mandalart(
  state: MandalartState = initialState,
  action: MandalartAction,
): MandalartState {
  switch (action.type) {
    case CREATE_MANDALART:
      return { isOpenedCreatMandalart: !state.isOpenedCreatMandalart };
    default:
      return state;
  }
}

export default mandalart;
