import { useEffect, useState } from 'react';
import axios from 'axios';
export default function ResultPage() {
  const [userId, setUserId] = useState();

  useEffect(() => {
    const getUserId = async () => {
      const result = await axios.get();
      console.log(result.data.id);
    };
    getUserId();
  }, []);

  return <></>;
}
