import { ADD_JOB, DELETE_JOB, SET_JOB } from "./constant";

export const initState = {
  job: "",
  jobs: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_JOB:
      return {
        ...state,
        // job: '',
        jobs: [...state.jobs, action.payload],
      };
    case DELETE_JOB:
      // eslint-disable-next-line no-case-declarations
      const newJobs = [...state.jobs];
      newJobs.splice(action.payload, 1);
      return {
        ...state,
        jobs: newJobs,
      };
    case SET_JOB:
      return {
        ...state,
        job: action.payload,
      };
    default:
      throw new Error("Invalid Action");
  }
};

export default reducer;
