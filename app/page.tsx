import {Metadata} from "next";

export async function generateMetadata(): Promise<Metadata> {

  return {
    metadataBase: new URL('http://localhost:3000'),
    title:'Generate Metadata Bug',
    alternates: {
      canonical: '/',
      languages: {
        'x-default': '/',
        en: '/?hl=en_US',
        ko: '/?hl=ko_KR',
      },
    },
  };
}

export default function Home() {
  return <div>
    Check devtool
  </div>;
}
