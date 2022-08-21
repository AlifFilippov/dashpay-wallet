import { useEffect } from 'react';
import actions from './actions';
import useStyles from './useStyles';
import useMachine from './useMachine';

function useAvatar(props) {
  const { avatarUrl } = props.user;
  const source = { uri: avatarUrl };

  const styles = useStyles(props);
  const [state, dispatch] = useMachine(props);

  const bind = {
    source,
    onError() {
      dispatch(actions.imageError());
    },
  };

  useEffect(() => {
    dispatch(actions.reset({ avatarUrl }));
  }, [avatarUrl]);

  return {
    bind,
    state,
    styles,
  };
}

export default useAvatar;
