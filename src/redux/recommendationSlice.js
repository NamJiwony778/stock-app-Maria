import { createSlice } from "@reduxjs/toolkit";
import {
  fakePosts,
  getRecommendation,
  getSocialPostRecommendation,
} from "../utils/dateManupilation";

export const recommendationSlice = createSlice({
  name: "recommendation",
  initialState: {
    recAvgMoving: "",
    recSocialPosts: "",
  },
  reducers: {
    generateRecommendation: (state, action) => {
      state.recAvgMoving = getRecommendation(action.payload);
      state.recSocialPosts = getSocialPostRecommendation(fakePosts);
    },
    // generateSocialPostRecommendation: (state, action) => {

    // },
  },
});

export const { generateRecommendation } = recommendationSlice.actions;
export const selectRecommendation = (state) =>
  state.recommendation.recAvgMoving;
export const selectSocialPostsRecommendation = (state) =>
  state.recommendation.recSocialPosts;

export default recommendationSlice.reducer;
