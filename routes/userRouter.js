const express=require('express')
const usersController=require('../controllers/userCtrl')
const isAuthenticated=require('../middlewares/isAuth')
const userRouter=express.Router()
//register
userRouter.post('/api/v1/users/register',usersController.register)
//! Login
userRouter.post("/api/v1/users/login", usersController.login);
//!Profile
userRouter.get(
    "/api/v1/users/profile",
    isAuthenticated,
    usersController.profile
);
//!change password
userRouter.put(
  "/api/v1/users/change-password",
  isAuthenticated,
  usersController.changeUserPassword
);
//! update Profile
userRouter.put(
  "/api/v1/users/update-profile",
  isAuthenticated,
  usersController.updateUserProfile
);

module.exports=userRouter












// changeUserPassword: asyncHandler(async (req, res) => {
//     const { newPassword } = req.body;
//     //! Find the user
//     const user = await User.findById(req.user);
//     if (!user) {
//       throw new Error("User not found");
//     }
//     //! Hash the new password before saving
//     //!Hash the user password
//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(newPassword, salt);
//     user.password = hashedPassword;
//     //! ReSave
//     await user.save({
//       validateBeforeSave: false,
//     });
//     //!Send the response
//     res.json({ message: "Password Changed successfully" });
//   }),
