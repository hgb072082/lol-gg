import MainUI from './Main.presenter';
import { useState } from 'react';
export default function Main() {
  const [userId, setUserId] = useState('');

  const onChangeUserId = (e) => {
    setUserId(e.target.value);
  };
  return <MainUI onChangeUserId={onChangeUserId} />;
}
