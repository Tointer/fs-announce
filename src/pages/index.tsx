import dynamic from "next/dynamic";

const App = function () {
  const ComponentWithNoSSR = dynamic(() => import("../components/Main"), {
    ssr: false,
  });
  return <ComponentWithNoSSR />;
};

export default App;
