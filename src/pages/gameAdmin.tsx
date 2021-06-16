import { FC } from 'react';
import { Loading, connect, defaultState } from 'umi';
import { Card, Button, Modal, Input, Divider, Radio } from 'antd';
import GameList from './conpoments/GameList';

interface PageProps {
  global: defaultState;
  loading: boolean;
}

const GameAdmin: FC<PageProps> = (props) => {
  const temp = {
    type: '',
    name: '',
    id: 0,
    participant: [],
  };
  const setName = (e: any) => {
    temp.name = e.target.value;
  };
  const setType = (e: any) => {
    console.log(e.target.value);
    temp.type = e.target.value;
  };
  const addParentItem = () => {
    Modal.confirm({
      title: '请添加内容',
      onOk: () => {
        addItem;
      },
      onCancel: () => {
        cancel;
      },
      centered: true,
      maskClosable: true,
      content: (
        <div>
          <Input placeholder="赛事名称" onChange={setName} />
          <Radio.Group onChange={setType}>
            <Radio value="simple">单人赛</Radio>
            <Radio value="double">多人赛</Radio>
          </Radio.Group>
        </div>
      ),
    });
  };
  const deleteItem = (id: any, type: string) => {
    const { dispatch }: any = props;
    const { simple, double }: any = props.global;
    if (type === 'simple') {
      for (let i = 0; i < simple.length; i++) {
        if (simple[i].id === id) simple.splice(i, 1);
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
        if (double[i].id === id) double.splice(i, 1);
        dispatch({
          type: 'global/changeGameMounts',
          payload: {
            type: type,
            list: double,
          },
        });
      }
    }
  };
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
  const addItem = () => {
    const { dispatch }: any = props;
    const { simple, double }: any = props.global;
    if (temp.type === 'simple') {
      simple.push(temp);
      dispatch({
        type: 'global/changeGameMounts',
        payload: {
          type: temp.type,
          list: simple,
        },
      });
    } else {
      double.push(temp);
      dispatch({
        type: 'global/changeGameMounts',
        payload: {
          type: temp.type,
          list: double,
        },
      });
    }
  };
  const cancel = () => {
    temp.name = '';
    temp.id = 0;
    temp.participant = [];
    temp.type = '';
  };
  return (
    <Card
      title="比赛管理"
      extra={
        <Button type="link" onClick={addParentItem}>
          添加比赛
        </Button>
      }
    >
      <GameList
        list={props.global.simple}
        delete={deleteItem}
        addIn={addIn}
        title="单人赛"
        type="simple"
      ></GameList>
      <Divider />
      <GameList
        list={props.global.simple}
        delete={deleteItem}
        addIn={addIn}
        title="双人赛"
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
)(GameAdmin);
