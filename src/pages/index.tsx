import { FC } from 'react';
import { Loading, connect, defaultState } from 'umi';
import { Card } from 'antd';
import GameList from './conpoments/GameList';

interface PageProps {
  global: defaultState;
  loading: boolean;
}

const IndexPage: FC<PageProps> = (props) => {
  const deleteItem = (id: any) => {
    const { dispatch }: any = props;
    const { simple }: any = props.global;
    for (let i = 0; i < simple.length; i++) {
      if (simple[i].id === id) simple.splice(i, 1);
    }
    dispatch({
      type: '',
    });
  };
  return (
    <Card>
      <GameList list={props.global.simple} delete={deleteItem}></GameList>
    </Card>
  );
};

export default connect(
  ({ global, loading }: { global: defaultState; loading: Loading }) => ({
    global,
    loading: loading.models.index,
  }),
)(IndexPage);
