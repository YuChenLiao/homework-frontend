import { FC, useState } from 'react';
import { Loading, connect, defaultState } from 'umi';
import { Card, Input, List } from 'antd';

const { Search } = Input;

interface PageProps {
  global: defaultState;
  loading: boolean;
}

const GameCheck: FC<PageProps> = (props) => {
  const [data, setData] = useState([]);
  const onSearch = (value: string) => {
    const { simple, double } = props.global;
    const list: any = simple;
    list.concat(double);
    for (let i = 0; i < list.length; i++) {
      const temp: any = [];
      if (value === list[i].name) {
        temp.push(list[i]);
        setData(temp);
      }
    }
  };
  return (
    <Card title="赛事查询">
      <Search
        placeholder="input search text"
        allowClear
        enterButton="Search"
        size="large"
        onSearch={onSearch}
      />
      <List
        size="large"
        itemLayout="vertical"
        dataSource={data}
        renderItem={(item: any) => <List.Item>{item.name}</List.Item>}
      />
    </Card>
  );
};

export default connect(
  ({ global, loading }: { global: defaultState; loading: Loading }) => ({
    global,
    loading: loading.models.index,
  }),
)(GameCheck);
