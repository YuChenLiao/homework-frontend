import { FC } from 'react';
import { Loading, connect, defaultState } from 'umi';
import { Card } from 'antd';
import GameList from './conpoments/GameList';

interface PageProps {
  global: defaultState;
  loading: boolean;
}

const IndexPage: FC<PageProps> = (props) => {
  console.log(props);
  return (
    <Card>
      <GameList list={props.global.userList}></GameList>
    </Card>
  );
};

export default connect(
  ({ global, loading }: { global: defaultState; loading: Loading }) => ({
    global,
    loading: loading.models.index,
  }),
)(IndexPage);
