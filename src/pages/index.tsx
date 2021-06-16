import { FC } from 'react';
import { Loading, connect, defaultState } from 'umi';
import { Card } from 'antd';
import GameList from './conpoments/GameList';

interface PageProps {
  global: defaultState;
  loading: boolean;
}

const IndexPage: FC<PageProps> = (props) => {
  const deleteItem = () => {};
  return (
    <Card title="比赛列表">
      <GameList
        list={props.global.simple}
        delete={deleteItem}
        title="单人赛"
        type="simple"
      ></GameList>
      <GameList
        list={props.global.double}
        delete={deleteItem}
        title="多人赛"
        type="double"
      ></GameList>
    </Card>
  );
};

export default connect(
  ({ global, loading }: { global: defaultState; loading: Loading }) => ({
    global,
    loading: loading.models.index,
  }),
)(IndexPage);
