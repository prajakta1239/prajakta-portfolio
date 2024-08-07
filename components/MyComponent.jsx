import Image from 'next/image';

const MyComponent = () => (
  <div>
    {/* Local image in the public folder */}
    <Image src="/decix.png" alt="Description" width={500} height={300} />
    <Image src="/bcgunionbank.png" alt="Description" width={500} height={300} />
    <Image src="/rwfk.png" alt="Description" width={500} height={300} />
    <Image src="/sparklet.png" alt="Description" width={500} height={300} />
  </div>
);

export default MyComponent;
