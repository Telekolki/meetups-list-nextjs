import { useRouter } from 'next/router';

const Slug = () => {
  const router = useRouter();

  return <div>slug: {Object.entries(router.query)}</div>;
};

export default Slug;
