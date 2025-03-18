import { useState, useMemo } from "react";

export type Cookies = {
  name: string;
  description: string;
};

const useCookies = (cookies: Cookies[], consentCookies?: string[]) => {
  const mappedCookies = useMemo(() => {
    return cookies.map((cookie) => ({
      ...cookie,
      enabled: (consentCookies ?? []).includes(cookie.name),
    }));
  }, [consentCookies, cookies]);
  const [enabledCookies, setEnabledCookies] = useState(mappedCookies);

  return { enabledCookies, setEnabledCookies };
};

export default useCookies;
