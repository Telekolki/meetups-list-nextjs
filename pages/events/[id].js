import { useRouter } from 'next/router';

const Ids = () => {
  const router = useRouter();

  return <div>ID page {router.query['id']}</div>;
};

export default Ids;
