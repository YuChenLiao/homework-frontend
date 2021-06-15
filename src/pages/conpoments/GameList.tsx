import { Button, Card, List } from 'antd';
import { connect } from 'dva';

const GameList = (props: { list: any[] | undefined }) => {
  const { list } = props;
  return (
    <Card>
      <List
        size="large"
        itemLayout="vertical"
        dataSource={list}
        renderItem={(item) => <List.Item>{item.name}</List.Item>}
      />
    </Card>
  );
};

export default GameList;
