import { FC } from 'react';
import { Loading, connect, defaultState } from 'umi';
import { Card } from 'antd';
import GameList from './conpoments/GameList';

interface PageProps {
  global: defaultState;
  loading: boolean;
}

const IndexPage: FC<PageProps> = (props) => {
  const deleteItem = (id: any, type: string) => {};

  const addIn = (id: string, type: string) => {
    const { simple, double }: any = props.global;
    const { dispatch }: any = props;
    if (type === 'simple') {
      for (let i = 0; i < simple.length; i++) {
        if (simple[i].id === id)
          simple[i].participant.push(props.global.userinfo.username);
      }
      dispatch({
        type: 'global/changeGameMounts',
        payload: {
          type: type,
          list: simple,
        },
      });
    } else {
      for (let i = 0; i < double.length; i++) {
        if (double[i].id === id) {
          double[i].participant.push(props.global.userinfo.username);
        }
      }
      dispatch({
        type: 'global/changeGameMounts',
        payload: {
          type: type,
          list: double,
        },
      });
    }
  };

  return (
    <Card title="比赛列表">
      <GameList
        list={props.global.simple}
        delete={deleteItem}
        addIn={addIn}
        title="单人赛"
        type="simple"
      ></GameList>
      <GameList
        list={props.global.double}
        delete={deleteItem}
        addIn={addIn}
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
