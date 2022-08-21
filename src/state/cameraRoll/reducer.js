/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import { get } from "lodash";
import initialParams from "./params";

const initialState = {
  hasMore: true,
  isFetching: false,
  photos: [],
  ...initialParams
};

const cameraRoll = (state = initialState, action) => {
  switch (action.type) {
    case "CAMERA_ROLL_CLEAR_PHOTOS":
      return { ...initialState, isFetching: true };

    case "CAMERA_ROLL_FETCH_PHOTOS_REQUEST":
      return { ...state, isFetching: true };

    case "CAMERA_ROLL_FETCH_PHOTOS_SUCCESS":
      const { response } = action;
      return {
        ...state,
        isFetching: false,
        hasMore: get(response, "page_info.has_next_page"),
        after: get(response, "page_info.end_cursor"),
        first: get(response, "page_info.first", 100),
        photos: state.photos.concat(
          response.edges.map(photo => photo.node.image)
        )
      };

    case "CAMERA_ROLL_FETCH_PHOTOS_FAILURE":
      return { ...state, isFetching: false };

    default:
      return state;
  }
};

export default cameraRoll;
