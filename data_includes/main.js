PennController.ResetPrefix(null); // Initiates PennController
AddHost("https://github.com/goldengua/TimedPictureSelection/tree/master/chunk_includes/");
// Start typing your code here
 // Initiates PennController

// Start typing your code here

Sequence( "welcome" , randomize("experiment") , "send" , "final" )
newTrial( "welcome" ,
    defaultText
        .print()
    ,
    newText("<p>Welcome!</p>")
    ,
    newText("<p>In this experiment, you will see aliens suddenly appear on the screen. </p>")
    ,
    newText("<p>Press mouse click to catch these aliens as quickly as possible.</p>")
    ,
    newText("<p>There are some regularities in the alien's moving trajectory. </p>")
    ,
    newText("<p>Discovering the trajectory might help you with a quick action. </p>")
    ,
    newText("<p>Please get yourself familiar with the action required for catching aliens. </p>")
    ,
    newText("<p>Please enter your ID and then click the button below to start the experiment.</p>")
    ,
    newImage("1","alien1.png")
         .size(200,200)
    ,
    newCanvas("intro",200,200)
         .add(   0 , 0 , getImage("1") )
         .print()
    ,
    newTextInput("inputID")
        .print()
    ,
    newButton("Start")
        .print()
        .wait()
    ,
    newVar("ID")
        .global()
        .set( getTextInput("inputID") )
   ,
   getCanvas("intro")
         .remove()
)
.log( "ID" , getVar("ID") )
Template( variable =>
    newTrial( "experiment" ,
    newAudio('bgm',"drumloop_65.wav")
        .play()
    ,
    newText("fixation",'+')
        .print()
    ,

    newTimer("wait", 800)
        .start()
        .wait()
    ,

    getText('fixation')
        .remove()
    ,
    newImage("gesture_key","alien1.png")
        .size(100,100)
    ,

    //first position
    newAudio("tone", variable.AudioFile)
        .play()
    ,
    newCanvas("p1",300,300)
        .add(   variable.P1x , variable.P1y , newImage("p1_alien",variable.Image).size(100,100) )
        .print()
    ,
    newSelector()
       .add( getImage("p1_alien")  )
       .log()
       .wait()
   ,
    newTimer("wait", 300)
        .start()
        .wait()
    ,
    getCanvas("p1")
        .remove()
    ,
    //second position
    newAudio("tone", variable.AudioFile)
        .play()
    ,
    newCanvas("p2",300,300)
        .add(   variable.P2x , variable.P2y , newImage("p2_alien","alien1.png").size(100,100) )
        .print()
    ,
    newSelector()
       .add( getImage("p2_alien")  )
       .log()
       .wait()
   ,
    newTimer("wait", 300)
        .start()
        .wait()
    ,  
    getCanvas("p2")
        .remove()
    ,
             
    //third canvas 
    newAudio("tone", variable.AudioFile)
        .play()
    ,
    newCanvas("p3",300,300)
        .add(   variable.P3x , variable.P3y , newImage("p3_alien","alien1.png").size(100,100) )
        .print()
    ,
    newSelector()
       .add( getImage("p3_alien")  )
       .log()
       .wait()
   ,
    newTimer("wait", 500)
        .start()
        .wait()
    ,  
    getCanvas("p3")
        .remove()
    ,
    newCanvas("alien",300,300)
        .add(   variable.P1x , variable.P1y , newImage("alien1.png").size(100,100) )
        .add(   variable.P2x , variable.P2y , newImage("alien1.png").size(100,100) )
        .add(   variable.P3x , variable.P3y , newImage("alien1.png").size(100,100))
        .print()
    ,
   newAudio("success", "success.wav")
        .play()
   ,

   newTimer("wait", 800)
        .start()
        .wait()
    ,         
    getCanvas("alien")
        .remove()
    
    

    //newText("continue","Press space bar to continue;")
        //.print()
    //,
    //newKey('space',' ')
         //.wait()

  )
  .log( "ID"     , getVar("ID")    )
  .log( "Item"   , variable.Item   )
  .log( "Group"  , variable.Group  )
)

SendResults( "send" )
newTrial( "final" ,
    newText("<p>Thank you for your participation!</p>")
        .print()
    ,
    newText("<p><a href='https://www.pcibex.net/' href='_blank'>Click here to validate your participation.</a></p>")
        .print()
    ,
    newButton("void")
        .wait()
)

