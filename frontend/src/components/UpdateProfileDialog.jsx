import { Dialog, DialogContent, DialogTitle } from "@radix-ui/react-dialog";
import { DialogHeader } from "./ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

// eslint-disable-next-line react/prop-types
function UpdateProfileDialog({open}) {
  return (
    <div className="">
      <Dialog open={open}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Update Profile</DialogTitle>
          </DialogHeader>
          <form>
            <div className="grid gap-4 py-4">
              <Label html="name" className="text-right">
                Name
              </Label>
              <Input className="col-span-3" id="name" />
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default UpdateProfileDialog;
