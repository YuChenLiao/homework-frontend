import { FC } from 'react';
import { Loading, connect, defaultState } from 'umi';
import { Card } from 'antd';
import GameList from '../conpoments/GameList';

interface PageProps {
  global: defaultState;
  loading: boolean;
}

const userGame: FC<PageProps> = (props) => {
  const deleteItem = () => {};
  const addIn = () => {};
  return (
    <Card>
      <GameList
        list={props.global.userinfo.game}
        delete={deleteItem}
        addIn={addIn}
        title=""
        type="simple"
      ></GameList>
    </Card>
  );
};

export default connect(
  ({ global, loading }: { global: defaultState; loading: Loading }) => ({
    global,
    loading: loading.models.index,
  }),
)(userGame);
