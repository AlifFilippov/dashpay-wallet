// TODO: this is a temporary solution,
//       we need something more serious

const logger = {
  error: (...args) => __DEV__ && console.warn(...args),
  warn: (...args) => __DEV__ && console.warn(...args),
  debug: (...args) => __DEV__ && console.debug(...args),
};

export default logger;
