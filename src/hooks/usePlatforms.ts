import { useQuery } from "@tanstack/react-query";
import { FetchResponse } from "../services/api-client";
import APIClient from "../services/api-client";
import platforms from "../data/platforms";
import { Platform } from "../entities/Platform";

const apiClient = new APIClient<Platform>("/platforms/list/parents");

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000,
    initialData: { count: platforms.length, results: platforms, next: null },
  });

export default usePlatforms;
