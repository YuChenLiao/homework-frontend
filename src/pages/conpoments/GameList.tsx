import { Button, Card, List } from 'antd';
import styles from './GameList.less';

const GameList = (props: {
  list: any[] | undefined;
  delete: any;
  title: string;
  type: string;
}) => {
  const { list } = props;
  return (
    <Card title={props.title}>
      <List
        size="large"
        itemLayout="vertical"
        dataSource={list}
        renderItem={(item) => (
          <List.Item>
            <span className={styles.contentClass}>{item.name}</span>
            <span className={styles.buttonClass}>
              <Button type="link" onClick={props.delete(item.id, props.type)}>
                删除 |
              </Button>
            </span>
            <span className={styles.buttonClass}>
              <Button type="link">报名</Button>
            </span>
          </List.Item>
        )}
      />
    </Card>
  );
};

export default GameList;
