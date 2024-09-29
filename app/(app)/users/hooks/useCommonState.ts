import { useEffect, useState } from "react";
import { constants } from "../utils/constants";
import { toast } from "@vivekkv178/library";
import useApi from "@/lib/useApi";
import { BE_ROUTES, HttpMethod, ROLES } from "@/lib/constants";
import { useAppSelector } from "@/lib/reduxHooks";
import { User } from "../utils/types";
import { replaceUrl } from "@vivekkv178/library";

const useUsersState = () => {
  const [addDialog, setAddDialog] = useState(false);
  const [editDialog, setEditDialog] = useState(false);
  const [deleteDialog, setDeleteDialog] = useState(false);
  const [deleteContactEvent, setDeleteContactEvent] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any | null>(
    null || {
      name: "Vivek",
      email: "vivek@test.com",
      role: ROLES.USER,
    },
  );
  const [listLoading, setListLoading] = useState(false);
  const [getLoading, setGetLoading] = useState(false);
  const [saveLoading, setSaveLoading] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);

  const authState = useAppSelector((state) => state.auth);

  const [users, setUsers] = useState([]);
  const api = useApi();

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSelectedItem = { ...selectedItem };
    newSelectedItem[event.target.name] = event.target.value;
    setSelectedItem(newSelectedItem);
  };

  const onSelectChangeHandler = (field: string, value: string) => {
    console.log(field, value);

    const newSelectedItem = { ...selectedItem };
    newSelectedItem[field] = value;
    setSelectedItem(newSelectedItem);
  };

  const editHandler = async (user: User) => {
    setEditDialog(true);
    setGetLoading(true);
    try {
      const userDetails = await api.callApi({
        url: replaceUrl(BE_ROUTES.GET_USER, { email: user?.email }),
        method: HttpMethod.GET,
      });
      userDetails.role = userDetails.access_role;

      setSelectedItem(userDetails);
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error while fetching.",
        description: error?.response?.data?.message || "",
      });
    } finally {
      setGetLoading(false);
    }
  };

  const deleteHandler = (user: User) => {
    setDeleteDialog(true);
    setSelectedItem(user);
  };

  const addHandler = async () => {
    setSaveLoading(true);
    try {
      await api.callApi({
        url: BE_ROUTES.CREATE_USER,
        method: HttpMethod.POST,
        data: {
          name: selectedItem?.name,
          email: selectedItem?.email,
          password: null,
          access_role: selectedItem?.role,
          is_registered: false,
        },
      });
      toast({
        title: "Added Successfully",
      });
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error while adding.",
        description: error?.response?.data?.message || "",
      });
    } finally {
      setSaveLoading(false);
      setAddDialog(false);
    }
    listData();
  };

  const updateHandler = async () => {
    setSaveLoading(true);
    try {
      await api.callApi({
        url: BE_ROUTES.UPDATE_USER,
        method: HttpMethod.PUT,
        data: {
          name: selectedItem?.name,
          email: selectedItem?.email,
          access_role: selectedItem?.role,
        },
      });
      toast({
        title: "Updated Successfully",
      });
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error while updating.",
        description: error?.response?.data?.message || "",
      });
    } finally {
      setSaveLoading(false);
      setEditDialog(false);
    }
    listData();
  };

  const onDeleteHandler = async () => {
    setDeleteLoading(true);
    try {
      await api.callApi({
        url: replaceUrl(BE_ROUTES.DELETE_USER, { email: selectedItem?.email }),
        method: HttpMethod.DELETE,
      });
      toast({
        title: "Deleted Successfully",
      });
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error while deleting.",
        description: error?.response?.data?.message || "",
      });
    } finally {
      setDeleteLoading(false);
      setDeleteDialog(false);
    }
    listData();
  };

  const dialogCloseHandler = (type: string) => {
    setSelectedItem(null);
    if (type === constants.ADD_DIALOG) setAddDialog(false);
    if (type === constants.EDIT_DIALOG) setEditDialog(false);
    if (type === constants.DELETE_DIALOG) {
      setDeleteDialog(false);
      setDeleteContactEvent(false);
    }
  };

  const listData = async () => {
    try {
      setListLoading(true);
      const userData = await api.callApi({
        url: BE_ROUTES.GET_USERS,
        method: HttpMethod.GET,
      });
      setUsers(userData);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setListLoading(false);
    }
  };

  useEffect(() => {
    if (authState?.user) listData();
  }, [authState?.user]);

  const refreshHandler = () => {
    listData();
  };

  return {
    listLoading,
    users,
    addDialog,
    setAddDialog,
    refreshHandler,
    dialogCloseHandler,
    editDialog,
    setEditDialog,
    editHandler,
    deleteDialog,
    deleteHandler,
    selectedItem,
    addHandler,
    updateHandler,
    onDeleteHandler,
    onChangeHandler,
    onSelectChangeHandler,
    getLoading,
    saveLoading,
    deleteLoading,
  };
};

export default useUsersState;
