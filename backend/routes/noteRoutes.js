import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({
    message: "Notes fetched successfully",
  });
});

router.post("/", (req, res)=>{
    res.status(201).json({
        message:"Note added successfully"
    })
})

router.put("/:id", (req, res)=>{
    res.status(200).json({
        message:`${req.params.id} Note updated successfully`
    })
})

router.delete("/:id", (req, res)=>{
    res.status(200).json({
        message:`${req.params.id} Note deleted successfully`
    })
})


export default router;