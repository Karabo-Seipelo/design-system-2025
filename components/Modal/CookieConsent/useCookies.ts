import { useState } from "react";

export type Cookies = {
  name: string;
  description: string;
};

const useCookies = (cookies: Cookies[]) => {
  const mappedCookies = cookies.map((cookie) => {
    return {
      ...cookie,
      enabled: false,
    };
  });
  const [enabledCookies, setEnabledCookies] = useState(mappedCookies);

  return { enabledCookies, setEnabledCookies };
};

export default useCookies;
