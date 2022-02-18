import * as Styles from './Main.styles';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
export default function MainUI(props) {
  return (
    <>
      <Styles.Wrapper>
        <Styles.MainImg
          src={
            'https://opgg-static.akamaized.net/logo/20220213150048.e461db2b818e43058e2ec223833fbdf0.png?image=q_auto,f_auto,w_650&v=1644907161216&browser=&name=Chrome&version=98.0.4758.80&major=98&name=MacOS&version=10.15.7&image=q_auto,f_auto,w_auto&v=1644907161216&name=Chrome&version=98.0.4758.80&major=98&name=MacOS&version=10.15.7'
          }
        />
        <Styles.SearchBox>
          <Styles.SearchInput
            onChange={props.onChangeUserId}
            placeholder="소환사명을 입력하세요."
          />
          <Button type="primary" icon={<SearchOutlined />}>
            검색
          </Button>
        </Styles.SearchBox>
      </Styles.Wrapper>
    </>
  );
}
