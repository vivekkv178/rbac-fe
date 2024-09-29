import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@vivekkv178/library";
import { Input } from "@vivekkv178/library";
import { Label } from "@vivekkv178/library";
import { Button } from "@vivekkv178/library";
import { useUsersContext } from "../context/context";
import { constants } from "../utils/constants";
import { Loader2 } from "lucide-react";
import { ROLES } from "@/lib/constants";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useAppSelector } from "@/lib/reduxHooks";

const formFields = [
  {
    id: "name",
    label: "Name",
    placeholder: "Ex: Vivek",
    type: "text",
    disabled: false,
  },
  {
    id: "email",
    label: "Email",
    placeholder: "Ex: vivek@test.com",
    type: "text",
    disabled: true,
  },
  {
    id: "role",
    label: "Role",
    placeholder: "Ex: Admin",
    type: "select",
    disabled: false,
  },
];

const EditUser = () => {
  const { commonState } = useUsersContext();
  const authState = useAppSelector((state) => state.auth);

  const getSelectValues = (selectValueType: string) => {
    const selectValues: Record<string, string[]> = {
      role:
        authState?.user?.role === ROLES.SUPER_ADMIN
          ? [ROLES.SUPER_ADMIN, ROLES.ADMIN, ROLES.USER]
          : [ROLES.ADMIN, ROLES.USER],
    };

    return selectValues[selectValueType];
  };

  return (
    <Dialog
      open={commonState?.editDialog}
      onOpenChange={() =>
        commonState?.dialogCloseHandler(constants.EDIT_DIALOG)
      }
    >
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit User</DialogTitle>
          <DialogDescription>
            You have selected : {commonState?.selectedItem?.name}
          </DialogDescription>
        </DialogHeader>
        {commonState?.getLoading ? (
          <div className="tw-grid tw-place-items-center">
            <Loader2 className="tw-h-12 tw-w-12 tw-animate-spin" />
          </div>
        ) : (
          <div className="grid gap-4 py-4 tw-max-h-[70vh]">
            {formFields.map((formField, index) => (
              <div className="grid grid-cols-4 items-center gap-4" key={index}>
                <Label htmlFor={formField.id} className="text-right">
                  {formField.label}
                </Label>
                {formField.type === "text" ? (
                  <Input
                    id={formField.id}
                    name={formField.id}
                    placeholder={formField.placeholder}
                    className="col-span-3"
                    value={commonState?.selectedItem?.[formField.id]}
                    onChange={commonState?.onChangeHandler}
                    disabled={formField.disabled}
                  />
                ) : (
                  <Select
                    onValueChange={(value) =>
                      commonState?.onSelectChangeHandler(formField.id, value)
                    }
                    value={commonState?.selectedItem?.[formField.id]}
                    disabled={formField.disabled}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a Role for the user" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup className="tw-min-w-0">
                        <SelectLabel>Roles</SelectLabel>
                        {getSelectValues(formField?.id)?.map(
                          (selectValue, index) => (
                            <SelectItem key={index} value={selectValue}>
                              {selectValue}
                            </SelectItem>
                          ),
                        )}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                )}
              </div>
            ))}
          </div>
        )}
        <DialogFooter>
          <Button onClick={commonState?.updateHandler}>
            {commonState?.saveLoading ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              "Save"
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default EditUser;
