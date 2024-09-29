import { useEffect, useState } from "react";
import { toast } from "@vivekkv178/library";
import useApi from "@/lib/useApi";
import { BE_ROUTES, HttpMethod } from "@/lib/constants";
import { useAppSelector } from "@/lib/reduxHooks";
import { replaceUrl } from "@vivekkv178/library";

const useCommonState = () => {
  const [listLoading, setListLoading] = useState(false);

  const authState = useAppSelector((state) => state.auth);

  const [mainItems, setMainItems] = useState({});
  const api = useApi();

  const getUserData = async () => {
    try {
      setListLoading(true);
      const data = await api.callApi({
        url: replaceUrl(BE_ROUTES.GET_USER, { email: authState?.user?.email }),
        method: HttpMethod.GET,
      });
      setMainItems(data);
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error while fetching.",
        description: error?.response?.data?.message || "",
      });
    } finally {
      setListLoading(false);
    }
  };

  useEffect(() => {
    if (authState?.user?.email) getUserData();
  }, [authState?.user?.email]);

  const refreshHandler = () => {
    getUserData();
  };

  return {
    listLoading,
    mainItems,
    refreshHandler,
  };
};

export default useCommonState;
