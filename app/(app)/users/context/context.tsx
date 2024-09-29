import React, {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
} from "react";
import useCommonState from "../hooks/useCommonState";
import { User } from "../utils/types";

type CommonState = {
  // Define the structure of your common state here
  listLoading: boolean;
  getLoading: boolean;
  saveLoading: boolean;
  deleteLoading: boolean;
  users: User[];
  addDialog: boolean;
  setAddDialog: Dispatch<SetStateAction<boolean>>;
  editDialog: boolean;
  setEditDialog: Dispatch<SetStateAction<boolean>>;
  deleteDialog: boolean;
  refreshHandler: () => void;
  dialogCloseHandler: (type: string) => void;
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
  onSelectChangeHandler: (field: string, value: string) => void;
  editHandler: (org: User) => void;
  updateHandler: () => void;
  deleteHandler: (org: User) => void;
  selectedItem: any;
  addHandler: () => void;
  onDeleteHandler: () => void;
};

type UsersContextType = {
  commonState: CommonState;
};

type UsersProviderProps = {
  children: React.ReactNode;
};

const UsersContext = createContext<UsersContextType | null>(null);

export const UsersProvider: React.FC<UsersProviderProps> = ({ children }) => {
  const commonState = useCommonState(); // Assuming this returns CommonState
  return (
    <UsersContext.Provider value={{ commonState }}>
      {children}
    </UsersContext.Provider>
  );
};

export const useUsersContext = () => {
  const context = useContext(UsersContext);
  if (!context) {
    throw new Error("useUsersContext must be used within an UsersProvider");
  }
  return context;
};
