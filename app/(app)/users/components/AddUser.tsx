import React, { useState } from "react";
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

const formFields = [
  {
    id: "name",
    label: "Name",
    placeholder: "Ex: Vivek",
    type: "text",
  },
  {
    id: "email",
    label: "Email",
    placeholder: "Ex: vivek@test.com",
    type: "text",
  },
  {
    id: "role",
    label: "Role",
    placeholder: "Ex: Admin",
    type: "select",
    selectValues: [ROLES.SUPER_ADMIN, ROLES.ADMIN, ROLES.USER],
  },
];

const AddContact = () => {
  const { commonState } = useUsersContext();

  return (
    <Dialog
      open={commonState?.addDialog}
      onOpenChange={() => commonState?.dialogCloseHandler(constants.ADD_DIALOG)}
    >
      <DialogContent className="sm:tw-max-w-2xl">
        <DialogHeader>
          <DialogTitle>Add User</DialogTitle>
          <DialogDescription>Add a new user to your list.</DialogDescription>
        </DialogHeader>
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
                />
              ) : (
                <Select
                  onValueChange={(value) =>
                    commonState?.onSelectChangeHandler(formField.id, value)
                  }
                  value={commonState?.selectedItem?.[formField.id]}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a Role for the user" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup className="tw-min-w-0">
                      <SelectLabel>Roles</SelectLabel>
                      {formField?.selectValues?.map((selectValue, index) => (
                        <SelectItem key={index} value={selectValue}>
                          {selectValue}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              )}
            </div>
          ))}
        </div>
        <DialogFooter>
          <Button type="submit" onClick={commonState?.addHandler}>
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

export default AddContact;
