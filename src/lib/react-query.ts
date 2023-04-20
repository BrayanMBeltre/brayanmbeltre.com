import { QueryClient, QueryOptions } from '@tanstack/react-query';

import axiosClient from '@/lib/axios';

export const defaultQueryFn = async ({ queryKey }: QueryOptions) => {
  const { data } = await axiosClient.get(`${queryKey?.[0]}`);
  return data;
};

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: defaultQueryFn,
    },
  },
});
