const express=require("express")
const router=express.Router() 
const admin= require('./Admin/admincontroller')
const dance= require('./Admin/dancecontroller')
const song=require('./Admin/songcontroller')
const game=require('./Admin/gamecontroller')
const stud=require('./student/studentcontroller')
const sregistration=require('./student/eventregistercontroller')
const results=require('./Admin/resultcontroller')



// Admin
 router.post('/blogs',admin.upload,admin.addBlog)
 router.post('/viewblogs',admin.upload,admin.viewblog)
 router.post('/dances',dance.addEvent)
 router.post('/viewparticipant/:id',dance.viewparticipant)
 router.post('/viewtitles',dance.viewatitle)
 router.post('/viewalldetails/:id',dance.viewalldetails)
 router.post('/songs',song.addsong)
 router.post('/games',game.addgame)
 router.post('/result',results.addresult)
 router.post('/viewresult',results.viewresults)
 

// student
router.post('/student',stud.upload,stud.adduserdetails)
router.post('/login',stud.login)
router.post('/stprofile/:id',stud.viewprofile,stud.upload)
router.post('/updateStudentProfile/:id',stud.upload,stud.update)
router.post('/register',sregistration.registerForEvent )
// router.post('/result',sregistration.addresult )
router.post('/viewparticipant/:id',sregistration.viewparticipants )





module.exports=router