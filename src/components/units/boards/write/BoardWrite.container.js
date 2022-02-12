import BoardWriteUI from './BoardWrite.presenter';
import { initializeApp } from 'firebase/app';
import { FirebaseApp } from 'firebase/app';
import { useState } from 'react';

export default function BoardWrite() {
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');

  return <BoardWriteUI />;
}
