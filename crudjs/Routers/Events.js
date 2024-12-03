const express =require('express');
const Event = require('../Models/Event');
//for routing purpose
const router=express.Router();
//importing handle of Event Schema


//getting request for get 
//geting request and response object(req,res)
//requst should be async request
router.get('/',async(req,res)=>{
    try {
        const Events=await Event.find();
        //returning data in json format
        res.json(Events)
    } catch (err) {
        //send is normal text format
    res.send('Error'+ err)
    }
})

//get db entry via id
router.get('/:id',async(req,res)=>{
    try {
        //for fetching by id
        //as we are getting id in a url--"http://localhost:9000/Events/:id" so we are using (params)
        const Events=await Event.findById(req.params.id);
        //returning data in json format
        res.json(Events)
    } catch (err) {
        //send is normal text format
    res.send('Error'+ err)
    }
})
//patch helps in changing or updating without modifying the entire data
router.patch('/:id',async(req,res)=>{
    try {
        //for fetching by id
        //as we are getting id in a url--"http://localhost:9000/Events/:id" so we are using (params)
        const events=await Event.findById(req.params.id);
        //changing the name given of the client info
        events.name=req.body.name;
        //save the event changes
        const e1=await events.save();
        res.json(e1);
    } catch (err) {
        //send is normal text format
    res.send('Error'+ err)
    }
})


router.put("/:id", async (req, res) => {
	//Destructing and calling it from req.body
	const { name, description, category } = req.body;
	//to check if the database server is not down
	try {
	
	//Create a new Event object
	const newEvents = {};
    //checks if the object is there or not
    //if it is then updating it 
	if (name) {
		newEvents.name = name;
	}
	if (description) {
		newEvents.description = description;
	}
	if (category) {
		newEvents.category = category;
	}

	//find the note to be updated and update it
	let events = await Event.findById(req.params.id);
	//params.id is the "/:id"
	if (!events) {
		return res.status(404).send("not found");
	}

//updating the db info in the id by getting it through url "params.id"
	events = await Event.findByIdAndUpdate(
		req.params.id,
		{ $set: newEvents },
		{ new: true }
	);
	res.json({ events });
		
} //if db server is down
catch (error) {
	console.log(error.message);
			res.status(500).send("Internal Server Error Ocuured");	
}
});

//for creating data in our database
router.post('/',async(req,res)=>{
    //creating object
    const event=new Event({
        //information from the client side
        name:req.body.name,
        description:req.body.description,
        category:req.body.category,
        Schedule:req.body.Schedule,
    })
    try {
        //saving data from the client side
        const e1=await event.save()
        //client sees what is happening in server
        res.json(e1)
    } catch (err) {
        //send is normal text format
    res.send('Error'+ err)
    }
})

router.delete('/:id',async(req,res)=>{
    try {
        //for fetching by id
        //as we are getting id in a url--"http://localhost:9000/Events/:id" so we are using (params)
        const events=await Event.findById(req.params.id);
        //save the event changes
        const e1=await events.remove();
        res.json("deleted"+params.id);
    } catch (err) {
        //send is normal text format
    res.send('Error'+ err)
    }
})


//exporting the router for acessing from app.js
module.exports=router