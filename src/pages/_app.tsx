import { type AppType } from "next/app";
import { api } from "finnaz/utils/api";
import "finnaz/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default api.withTRPC(MyApp);
