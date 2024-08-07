import Image from 'next/image';

const MyComponent = () => (
  <div>
    {/* Local image in the public folder */}
    <Image src="/Decix.png" alt="De-cix" width={500} height={300} />
    <Image src="/bcgunionbank.png" alt="BCG - Union Bank" width={500} height={300} />
    <Image src="/Rwfk.png" alt="RWFK" width={500} height={300} />
    <Image src="/Sparklet.png" alt="SparkLet" width={500} height={300} />
  </div>
);

export default MyComponent;
