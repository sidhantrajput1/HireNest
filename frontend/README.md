# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


<Dialog open={open}>
        <DialogContent
          className="sm:max-w-[425px]"
          onInteractOutside={() => setOpen(false)}
          aria-describedby="profile-update-description"
        >
          <DialogHeader className="flex flex-row justify-between items-center p-3">
            <DialogTitle className="font-bold font-serif">
              Update Profile
            </DialogTitle>
            <button onClick={() => setOpen(() => !open)}>X</button>
          </DialogHeader>
          <form className="font-serif font-medium" onSubmit={submitHandler}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input
                  id="name"
                  value={input.fullname}
                  onChange={changeEventHandler}
                  name="name"
                  className="col-span-2"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="email" className="text-right">
                  Email
                </Label>
                <Input
                  id="email"
                  value={input.email}
                  onChange={changeEventHandler}
                  name="email"
                  className="col-span-2"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="number" className="text-right">
                  Number
                </Label>
                <Input
                  id="number"
                  value={input.phoneNumber}
                  onChange={changeEventHandler}
                  name="number"
                  className="col-span-2"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="bio" className="text-right">
                  Bio
                </Label>
                <Input
                  id="bio"
                  value={input.bio}
                  onChange={changeEventHandler}
                  name="bio"
                  className="col-span-2"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="skills" className="text-right">
                  Skills
                </Label>
                <Input
                  id="skills"
                  value={input.skills}
                  onChange={changeEventHandler}
                  name="skills"
                  className="col-span-2"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="resume" className="text-right">
                  Resume
                </Label>
                <Input
                  id="resume"
                  name="resume"
                  accept="application/pdf"
                  className="col-span-2"
                  type="file"
                  // value={input.file}
                  onChange={fileChangeHandler}
                />
              </div>
            </div>
            {/* <div className="flex justify-end">
              <Button variant="outline" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button type="submit" className="ml-2">
                Save Changes
              </Button>
            </div> */}
            <DialogFooter>
            {loading ? (
            <Button>
              <Loader2 className="mr-2 w-4 h-4 animate-spin" />
              Please Wait
            </Button>
          ) : (
            <Button className="bg-neutral-800 my-1">Update</Button>
          )}
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>