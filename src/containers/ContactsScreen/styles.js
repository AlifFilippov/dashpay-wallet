/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  ["container"]: {
    position: "relative",
    backgroundColor: "#fff",
    borderColor: "#fff",
    flex: 1
  },
  ["header"]: {
    backgroundColor: '#088BE2',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 200,
  },
  ["body"]: {
    backgroundColor: "#fff",
    borderColor: "#fff",
    flex: 1
  },
  ["row"]: {
    flexGrow: 1,
    flexShrink: 0,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 15,
    paddingVertical: 7.5
  },
  ["text"]: {
    color: "#000",
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
    paddingHorizontal: 15,
    paddingVertical: 0
  },
  ["image"]: {
    width: 64,
    height: 64,
    borderRadius: 32,
    borderWidth: 0
  },
  ["column"]: {
    alignSelf: "stretch",
    flexDirection: "column",
    alignItems: "center"
  },
  ["row2"]: {
    flexGrow: 1,
    flexShrink: 0,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  ["button"]: {
    backgroundColor: "#088BE2",
    borderColor: "#088BE2",
    borderWidth: 0,
    borderRadius: 6,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  ["buttonText"]: {
    fontSize: 14,
    color: "#fff"
  },
  ['dash']: {
    width: 64,
    height: 64,
    borderRadius: 32,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  ["contentContainer"]: {
    paddingBottom: 15,
    paddingTop: 200,
    flexGrow: 1,
  },
  ['row']: {
    alignSelf: 'stretch'
  },
  ['first']: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1,
    flexShrink: 0,
  }
});
