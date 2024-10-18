import User from "../models/userSchema.js"





export const Create_User = async (req, res) => {
    try {
        const { name, email, age } = req.body;
        if (!name || !email || !age) {
            return res.status(401).json({ success: false, mssg: "All field are required to be filled" })
        }

        const createNewUser = await User.create({
            name, email, age
        })

        if (!createNewUser) {
            return res.status(401).json({ success: false, mssg: "Server Error" })
        }

        return res.status(201).json({ success: true, mssg: "User is successfully created" })
    } catch (error) {
        console.log(error)
    }
}


export const Show_All_User = async (req, res) => {
    try {

        let page = Number(req.query.page) || 1;
        let limit =  5;
        let skip = Number(limit*page)-limit;

        const showAllUser = await User.find({}).skip(skip).limit(limit);
        if (!showAllUser) {
            return res.status(401).json({ success: false, mssg: "No User Existed" })
        }

        return res.status(201).json({ success: true, showAllUser });
    } catch (error) {
        console.log(error)
    }
}


export const Update_Specific_User = async (req, res) => {
    try {
        const { userId } = req.params;
        let { name, email, age } = req.body;

        let changeData = {};
        if (name) {
            changeData.name = name;
        }
        if (email) {
            changeData.email = email;
        }
        if (age) {
            changeData.age = age;
        }

        const updatedData = await User.findByIdAndUpdate({ _id: userId }, changeData, { new: true });

        if (!updatedData) {
            return res.status(401).json({ success: false, mssg: "Error Occured while updating the Data" })
        }

        return res.status(201).json({ success: true, mssg: "User Data is successfully updated" })

    } catch (error) {
        console.log(error)
    }
}


export const Delete_Specific_User = async (req, res) => {
    try {
        const { userId } = req.params;

        const deletedUser = await User.findByIdAndDelete({ _id: userId });

        if (!deletedUser) {
            return res.status(401).json({ success: false, mssg: "Error Occured while Deleting the Data" })
        }

        return res.status(201).json({ success: true, mssg: "User Data is successfully deleted" })
    } catch (error) {
        console.log(error)
    }
}
