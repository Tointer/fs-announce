import dynamic from "next/dynamic";

const App = function () {
  // eslint-disable-next-line node/no-unsupported-features/es-syntax
  const ComponentWithNoSSR = dynamic(() => import("../components/Main"), {
    ssr: false,
  });
  return <ComponentWithNoSSR />;
};

export default App;
