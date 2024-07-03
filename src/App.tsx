import { RouterProvider } from "react-router-dom";
import { router } from "./utils/router";
import { ConfigProvider } from "antd";
import { themeConfig } from "./utils/theme.config";

const App = () => {

  return (
    <ConfigProvider theme={themeConfig}>
      <RouterProvider router={router} />
    </ConfigProvider>
  )
};

export default App;
