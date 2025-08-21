import { QueryClient as Base } from "@tanstack/react-query";

export const QueryClient = new Base({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: true,
      // staleTime: 5000 * 60 // 1 minute
    },
  },
});
